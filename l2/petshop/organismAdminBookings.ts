/// <mls shortName="organismAdminBookings" project="102009" folder="petshop" enhancement="_100554_enhancementLit" groupName="petshop" />
import { html, css } from 'lit';
import { customElement, state, property, query } from 'lit/decorators.js';
import { IcaOrganismBase } from './_100554_icaOrganismBase';
import { propertyDataSource } from './_100554_collabDecorators';
import { setState } from '_100554_/l2/collabState';
import { petshopExec } from "./_102009_layer1Exec";
import { SchedulingData } from './_102009_layer4Scheduling'
import { RequestSchedulingList } from './_102009_layer4SchedulingBase'

@customElement('petshop--organism-admin-bookings-102009')
export class OrganismAdminBookings extends IcaOrganismBase {

	@property() mode: 'only-list' | 'with-filter' = 'with-filter';
	@property() filterMode: 'today' | 'week' | '' = '';

	@property() private search = '';
	@property() private statusFilter = '';
	@property() private filterService = '';

	@property() private filterDateStart = '';
	@property() private filterDateEnd = '';

	@state() private schedulings: SchedulingData[] = [];
	@state() private filtered: SchedulingData[] = [];
	@state() private currentPage = 1;

	@propertyDataSource() labelError?: string;
	@propertyDataSource() labelOk?: string;
	@query('#link-to-edit') linkToEdit?: HTMLAnchorElement;

	private pageSize = 5;

	async firstUpdated(_changedProperties: Map<PropertyKey, unknown>) {
		super.firstUpdated(_changedProperties);
		const req: RequestSchedulingList = {
			action: 'SchedulingList',
			inDeveloped: true,
			version: '1',
			params: { filter: '' }
		};

		const response = await petshopExec(req);
		if (!response.ok) {
			this.labelError = response.error as string;
			return;
		}

		this.schedulings = response.data.filter((item: any) => item != null);
		this.filtered = [...this.schedulings];
		this.applyFilters();

	}

	private handleEdit(e: MouseEvent, scheduling: SchedulingData) {
		e.preventDefault();
		setState('ui.petshop.admin.scheduling.selected', scheduling);
		if (this.linkToEdit) this.linkToEdit.click();
	}

	private handleSearch(e: Event) {
		this.search = (e.target as HTMLInputElement).value.toLowerCase();
		this.applyFilters();
	}
	private handleStatusFilter(e: Event) {
		this.statusFilter = (e.target as HTMLSelectElement).value;
		this.applyFilters();
	}

	private handleDateStartFilter(e: Event) {
		this.filterDateStart = (e.target as HTMLInputElement).value;
		this.applyFilters();
	}

	private handleDateEndFilter(e: Event) {
		this.filterDateEnd = (e.target as HTMLInputElement).value;
		this.applyFilters();
	}

	private handleServiceFilter(e: Event) {
		this.filterService = (e.target as HTMLSelectElement).value;
		this.applyFilters();
	}
	private applyFilters() {
		let list = [...this.schedulings];
		if (this.search) {
			list = list.filter(b =>
				b.data.jsonBin.tutor.name.toLowerCase().includes(this.search) ||
				b.data.jsonBin.pet.name.toLowerCase().includes(this.search)
			);
		}
		if (this.statusFilter) {
			list = list.filter(b => b.data.status === this.statusFilter);
		}

		let startDate: Date | null = this.filterDateStart ? new Date(this.filterDateStart) : null;
		let endDate: Date | null = this.filterDateEnd ? new Date(this.filterDateEnd) : null;

		if (this.filterMode) {
			const now = new Date();
			if (this.filterMode === 'today') {
				startDate = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()));
				endDate = startDate;
			} else if (this.filterMode === 'week') {
				startDate = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()));
				endDate = new Date(startDate);
				endDate.setUTCDate(endDate.getUTCDate() + 6);
			}
		}

		if (startDate || endDate) {
			list = list.filter(b => {
				const date = new Date(b.data.startDateTime);
				const d = new Date(date);
				d.setUTCHours(0, 0, 0, 0);
				if (startDate) startDate.setUTCHours(0, 0, 0, 0);
				if (endDate) endDate.setUTCHours(0, 0, 0, 0);

				if (startDate && endDate) {
					return d >= startDate && d <= endDate;
				} else if (startDate) {
					const day = date.toISOString().slice(0, 10);
					const target = startDate.toISOString().slice(0, 10);
					return day === target;
				} else if (endDate) {
					return d <= endDate;
				}
				return true;
			});
		}

		if (this.filterService) {
			list = list.filter(b => b.data.jsonBin.service.name === this.filterService);
		}
		this.currentPage = 1;
		this.filtered = list;
	}

	// ---- Paginação ----
	private get paginated() {
		const start = (this.currentPage - 1) * this.pageSize;
		return this.filtered.slice(start, start + this.pageSize);
	}
	private nextPage() {
		if (this.currentPage * this.pageSize < this.filtered.length) {
			this.currentPage++;
		}
	}
	private prevPage() {
		if (this.currentPage > 1) {
			this.currentPage--;
		}
	}
	// ---- Renderização ----
	render() {
		return html`
<section class="admin-bookings">
<h2 class="admin-bookings__title">Gestão de Agendamentos</h2>
	${this.mode === 'with-filter' ? html`
		<div class="admin-bookings__filters">
			<input
				type="text"
				placeholder="Buscar cliente ou pet..."
				@input=${this.handleSearch}
				value=${this.search}
			/>
			<select @change=${this.handleStatusFilter}>
				<option value="">Todos os status</option>
				<option value="PENDING">Pendente</option>
				<option value="CONFIRMED">Aprovado</option>
				<option value="CANCELED">Cancelado</option>
				<option value="COMPLETED">Completado</option>
			</select>
			<input
				type="date"
				@change=${this.handleDateStartFilter}
				value=${this.filterDateStart}
				/>
			<input
					type="date"
					@change=${this.handleDateEndFilter}
					value=${this.filterDateEnd}
			/>

			<select @change=${this.handleServiceFilter}>
				<option value="">Todos os serviços</option>
				${this.getUniqueServices().map(service => html`<option value="${service}">${service}</option>`)}
			</select>

			<div class="form-actions"">
            	<button class="btn btn-save"><a href="/pageAdminSchedulingAdd">Novo agendamento</a></button>
        	</div>
		</div>
	` : ''
			}

	<table class="admin-bookings__table">
		<thead>
			<tr>
				<th>Cliente</th>
				<th>Pet</th>
				<th>Serviço</th>
				<th>Data</th>
				<th>Status</th>
				<th>Ações</th>
			</tr>
		</thead>
		<tbody>
			${this.paginated.map(b => html`
			<tr>
				<td>${b.data.jsonBin.tutor.name}</td>
				<td>${b.data.jsonBin.pet.name}</td>
				<td>${b.data.jsonBin.service.name}</td>
				<td>${new Date(b.data.startDateTime).toLocaleString()}</td>
				<td>
					<span class="admin-bookings__status admin-bookings__${this.getStatusCls(b.data.status)}">
					${this.getStatusLabel(b.data.status)}
					</span>
				</td>
				<td class="admin-bookings__action_td">
					<a href="#" @click="${(e: MouseEvent) => this.handleEdit(e, b)}">Detalhes</button>
				</td>
			</tr>
			`)}
		</tbody>
	</table>
	<div class="admin-bookings__pagination">
		<button @click=${this.prevPage} ?disabled=${this.currentPage === 1}>← Anterior</button>
		<span>Página ${this.currentPage} de ${Math.ceil(this.filtered.length / this.pageSize) || 1}</span>
		<button @click=${this.nextPage} ?disabled=${this.currentPage * this.pageSize >= this.filtered.length}>Próxima →</button>
    	<a id="link-to-edit" style="display:none" href="/pageAdminEditScheduling"></a>
	</div>
</section>
`;
	}

	private getStatusCls(status: string): string {
		const stateCLS: Record<string, string> = {
			'PENDING': 'status--pending',
			'CONFIRMED': 'status--approved',
			'CANCELED': 'status--cancelled',
			'COMPLETED': 'status--approved',
		};
		return stateCLS[status] || '';
	}

	private getStatusLabel(status: string) {
		const stateLabel: Record<string, string> = {
			'PENDING': 'Pendente',
			'CONFIRMED': 'Aprovado',
			'CANCELED': 'Cancelado',
			'COMPLETED': 'Completo',
		}
		return stateLabel[status] || '';


	}
	private getUniqueServices() {
		const services = this.schedulings.map(b => b.data.jsonBin.service.name);
		return [...new Set(services)];
	}
}