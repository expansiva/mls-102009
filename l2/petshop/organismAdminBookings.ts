/// <mls shortName="organismAdminBookings" project="102009" folder="petshop" enhancement="_100554_enhancementLit" groupName="petshop" />
import { html, css } from 'lit';
import { customElement, state, property } from 'lit/decorators.js';
import { IcaOrganismBase } from './_100554_icaOrganismBase';
import { collab_check, collab_xmark } from './_100554_collabIcons';
import { propertyDataSource } from './_100554_collabDecorators';

import { petshopExec } from "./_102009_layer1Exec";
import { SchedulingData } from './_102009_layer4Scheduling'
import { RequestSchedulingList } from './_102009_layer4SchedulingBase'


@customElement('petshop--organism-admin-bookings-102009')
export class OrganismAdminBookings extends IcaOrganismBase {

	@property() mode: 'only-list' | 'with-filter' = 'with-filter';
	@property() private search = '';
	@property() private statusFilter = '';
	@property() private filterDate = ''
	@property() private filterService = '';

	@state() private schedulings: SchedulingData[] = [];
	@state() private filtered: SchedulingData[] = [];
	@state() private currentPage = 1;

	@propertyDataSource() labelError?: string;
	@propertyDataSource() labelOk?: string;

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

	private handleSearch(e: Event) {
		this.search = (e.target as HTMLInputElement).value.toLowerCase();
		this.applyFilters();
	}
	private handleStatusFilter(e: Event) {
		this.statusFilter = (e.target as HTMLSelectElement).value;
		this.applyFilters();
	}
	private handleDateFilter(e: Event) {
		this.filterDate = (e.target as HTMLInputElement).value;
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
		if (this.filterDate) {
			const ff = this.filterDate === 'today' ? new Date(Date.now()).toISOString() : new Date(this.filterDate).toISOString()
			list = list.filter(b => {
				const d1 = new Date(b.data.startDateTime).toISOString().slice(0, 10);
				const d2 = ff.slice(0, 10);
				return d1 === d2;
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
				@change=${this.handleDateFilter}
				value=${this.filterDate}
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

				</td>
			</tr>
			`)}
		</tbody>
	</table>
	<div class="admin-bookings__pagination">
		<button @click=${this.prevPage} ?disabled=${this.currentPage === 1}>← Anterior</button>
		<span>Página ${this.currentPage} de ${Math.ceil(this.filtered.length / this.pageSize) || 1}</span>
		<button @click=${this.nextPage} ?disabled=${this.currentPage * this.pageSize >= this.filtered.length}>Próxima →</button>
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