/// <mls shortName="organismAdminServicesList" project="102009" folder="petshop" enhancement="_100554_enhancementLit" groupName="petshop" />
import { html } from 'lit';
import { customElement, state, query } from 'lit/decorators.js';
import { IcaOrganismBase } from './_100554_icaOrganismBase';
import { setState } from '_100554_/l2/collabState';
import { exec } from "./_102019_layer1Exec";
import { MdmRecord, RegistrationDataService, MdmType, RequestMDMGetListByType } from "./_102019_commonGlobal";

@customElement('petshop--organism-admin-services-list-102009')
export class organismAdminServicesList extends IcaOrganismBase {

	@state() mdmServices?: MdmRecord[];

	@state() filterText: string = '';
	@state() sortColumn: string = 'name';
	@state() sortDirection: 'asc' | 'desc' = 'asc';
	@state() currentPage: number = 1;
	@state() itemsPerPage: number = 5;
    @query('#link-to-edit') linkToEdit?: HTMLAnchorElement;

	async firstUpdated() {

		const req: RequestMDMGetListByType = {
			action: 'MDMGetListByType',
			inDeveloped: true,
			version: '1',
			params: { type: MdmType.Servico },
		};

		const response = await exec(req);
		if (response.ok) {
			this.mdmServices = response.data.map((item: MdmRecord) => {
				const item2: MdmRecord = item;
				return item2;
			});
		}

	}

	get filteredServices() {
		if (!this.mdmServices) return [];
		return this.mdmServices.filter(mdmServices =>
			(mdmServices.details.registrationData as RegistrationDataService)?.name.toLowerCase().includes(this.filterText.toLowerCase()) ||
			(mdmServices.details.registrationData as RegistrationDataService)?.descriptionShort.toLowerCase().includes(this.filterText.toLowerCase()) ||
			(mdmServices.details.registrationData as RegistrationDataService)?.serviceCode?.toLowerCase().includes(this.filterText.toLowerCase())
		);
	}

	get sortedServices() {
		const sorted = [...this.filteredServices];
		sorted.sort((a, b) => {
			let aVal = (a.details?.registrationData as RegistrationDataService)[this.sortColumn as keyof RegistrationDataService];
			let bVal = (b.details?.registrationData as RegistrationDataService)[this.sortColumn as keyof RegistrationDataService];
			if (!bVal || !aVal) return 0;
			if (typeof aVal === 'string') aVal = aVal.toLowerCase();
			if (typeof bVal === 'string') bVal = bVal.toLowerCase();
			if (aVal < bVal) return this.sortDirection === 'asc' ? -1 : 1;
			if (aVal > bVal) return this.sortDirection === 'asc' ? 1 : -1;
			return 0;
		});
		return sorted;
	}

	get totalPages() {
		return Math.ceil(this.sortedServices.length / this.itemsPerPage);
	}

	get paginatedServices() {
		const start = (this.currentPage - 1) * this.itemsPerPage;
		const end = start + this.itemsPerPage;
		return this.sortedServices.slice(start, end);
	}

	get visiblePages() {
		const pages = [];
		const start = Math.max(1, this.currentPage - 1);
		const end = Math.min(this.totalPages, this.currentPage + 1);
		for (let i = start; i <= end; i++) pages.push(i);
		return pages;
	}

	handleSort(column: string) {
		if (this.sortColumn === column) {
			this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
		} else {
			this.sortColumn = column;
			this.sortDirection = 'asc';
		}
	}


	handleEdit(e: MouseEvent, service: MdmRecord) {
		e.preventDefault();
		setState('ui.petshop.admin.service.selected', service);
		if (this.linkToEdit) this.linkToEdit.click();
	}


	handlePrevPage() {
		if (this.currentPage > 1) this.currentPage--;
	}

	handleNextPage() {
		if (this.currentPage < this.totalPages) this.currentPage++;
	}

	handlePageClick(page: number) {
		this.currentPage = page;
	}

	render() {
		return html`
		<div class="organism-admin-services-list" id="petshop--organism-admin-services-list-102009-1">
			<h2 id="petshop--organism-admin-services-list-102009-2">Lista de Serviços</h2>

			<div class="form-group" id="petshop--organism-admin-services-list-102009-3">
				<label for="filter-name" id="petshop--organism-admin-services-list-102009-4">Filtrar por Nome, Descrição ou Código:</label>
				<div class="filter-controls">
					<input
						type="text"
						id="filter-name"
						placeholder="Digite para filtrar"
						@input="${(e: Event) => this.filterText = (e.target as HTMLInputElement).value}"
					>
					<button class="btn btn-save">
						<a href="/pageAdminAddService">Adicionar novo</a>
					</button>
				</div>
			</div>

			<table id="petshop--organism-admin-services-list-102009-5">
				<thead>
					<tr>
						<th @click="${() => this.handleSort('name')}">
							Nome ${this.sortColumn === 'name' ? (this.sortDirection === 'asc' ? '↑' : '↓') : ''}
						</th>
						<th @click="${() => this.handleSort('descriptionShort')}">
							Descrição ${this.sortColumn === 'descriptionShort' ? (this.sortDirection === 'asc' ? '↑' : '↓') : ''}
						</th>
						<th @click="${() => this.handleSort('code')}">
							Código ${this.sortColumn === 'code' ? (this.sortDirection === 'asc' ? '↑' : '↓') : ''}
						</th>
						<th>Ações</th>
					</tr>
				</thead>
				<tbody>
					${this.paginatedServices.map(service => html`
						<tr>
							<td>${(service.details.registrationData as RegistrationDataService)?.name}</td>
							<td>${(service.details.registrationData as RegistrationDataService)?.descriptionShort}</td>
							<td>${(service.details.registrationData as RegistrationDataService)?.serviceCode}</td>

							<td>
								<a href="#" @click="${(e: MouseEvent) => this.handleEdit(e, service)}">Editar</a>
							</td>
						</tr>
					`)}
				</tbody>
			</table>

			<div class="pagination">
				<button @click="${this.handlePrevPage}" ?disabled="${this.currentPage === 1}">Anterior</button>
				${this.visiblePages.map(page => html`
					<button @click="${() => this.handlePageClick(page)}" class="${page === this.currentPage ? 'active' : ''}">
						${page}
					</button>
				`)}
				<button @click="${this.handleNextPage}" ?disabled="${this.currentPage === this.totalPages}">Próxima</button>
    		<a id="link-to-edit" style="display:none" href="/pageAdminEditService"></a>

			</div>
		</div>
		`;
	}
}
