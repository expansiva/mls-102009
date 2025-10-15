/// <mls shortName="organismAdminServicesList" project="102009" folder="petshop" enhancement="_100554_enhancementLit" groupName="petshop" />
import { html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { IcaOrganismBase } from './_100554_icaOrganismBase';
import { getState } from '_100554_/l2/collabState';
import { MdmData, RegistrationDataService, RequestMDMGetLitstByType, MdmType } from "./_102019_layer4Mdm";
import { exec } from "./_102019_layer1Exec";

@customElement('petshop--organism-admin-services-list-102009')
export class organismAdminServicesList extends IcaOrganismBase {

	@state() services?: RegistrationDataService[];
	@state() filterText: string = '';
	@state() sortColumn: string = 'name';
	@state() sortDirection: 'asc' | 'desc' = 'asc';
	@state() currentPage: number = 1;
	@state() itemsPerPage: number = 5;

	async firstUpdated() {

		const req: RequestMDMGetLitstByType = {
			action: 'MDMGetLitstByType',
			inDeveloped: true,
			version: '1',
			params: { type: MdmType.Servico },
		};

		const response = await exec(req);
		if (response.ok) {
			this.services = response.data.map((item: MdmData) => {
				const item2: RegistrationDataService = item.data.registrationData as RegistrationDataService;
				return item2;
			});
		}

		/*
		this.services = [
			{ name: 'Banho e Tosa', descriptionShort: 'Serviço completo de banho e tosa para cães e gatos.', serviceCode: 'SRV001' },
			{ name: 'Consulta Veterinária', descriptionShort: 'Consulta geral com veterinário para check-up.', serviceCode: 'SRV002' },
			{ name: 'Hospedagem', descriptionShort: 'Hospedagem diária para pets com supervisão.', serviceCode: 'SRV003' },
			{ name: 'Vacinação', descriptionShort: 'Aplicação de vacinas com acompanhamento veterinário.', serviceCode: 'SRV004' },
			{ name: 'Transporte Pet', descriptionShort: 'Serviço de transporte seguro e confortável.', serviceCode: 'SRV005' },
			{ name: 'Adestramento', descriptionShort: 'Treinamento comportamental para cães.', serviceCode: 'SRV006' },
			{ name: 'Banho Medicamentoso', descriptionShort: 'Banho com produtos terapêuticos para tratamento de pele.', serviceCode: 'SRV007' },
			{ name: 'Corte de Unhas', descriptionShort: 'Corte seguro e higiênico das unhas do pet.', serviceCode: 'SRV008' },
			{ name: 'Higienização Dental', descriptionShort: 'Limpeza dos dentes para prevenção de tártaro.', serviceCode: 'SRV009' },
			{ name: 'Tosa Higiênica', descriptionShort: 'Tosa leve para higiene e conforto do pet.', serviceCode: 'SRV010' }
		];*/
	}

	get filteredServices() {
		if (!this.services) return [];
		return this.services.filter(service =>
			service.name.toLowerCase().includes(this.filterText.toLowerCase()) ||
			service.descriptionShort.toLowerCase().includes(this.filterText.toLowerCase()) ||
			service.serviceCode?.toLowerCase().includes(this.filterText.toLowerCase())
		);
	}

	get sortedServices() {
		const sorted = [...this.filteredServices];
		sorted.sort((a, b) => {
			let aVal = a[this.sortColumn as keyof RegistrationDataService];
			let bVal = b[this.sortColumn as keyof RegistrationDataService];
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

	handleEdit(e: MouseEvent, service: RegistrationDataService) {
		e.preventDefault();
		// window.location.href = `/pageAdminEditService?code=${service.code}`;
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
							<td>${service.name}</td>
							<td>${service.descriptionShort}</td>
							<td>${service.serviceCode}</td>
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
			</div>
		</div>
		`;
	}
}
