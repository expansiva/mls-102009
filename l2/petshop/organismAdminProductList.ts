/// <mls shortName="organismAdminProductList" project="102009" folder="petshop" enhancement="_100554_enhancementLit" groupName="petshop" />

import { html } from 'lit';
import { customElement, state, query } from 'lit/decorators.js';
import { IcaOrganismBase } from './_100554_icaOrganismBase';
import { setState } from '_100554_/l2/collabState';
import { exec } from "./_102019_layer1Exec";
import { MdmRecord, RegistrationDataProduct, MdmType, RequestMDMGetListByType } from "./_102019_commonGlobal";

@customElement('petshop--organism-admin-product-list-102009')
export class organismAdminProductList extends IcaOrganismBase {

    @state() mdmProducts?: MdmRecord[];
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
            params: { type: MdmType.Produto },
        };

        const response = await exec(req);
        if (response.ok) {
            this.mdmProducts = response.data.map((item: MdmRecord) => {
                const item2: MdmRecord = item;
                return item2;
            });
        }

    }

    get filteredProducts() {
        if (!this.mdmProducts) return [];
        return this.mdmProducts.filter(mdmProducts =>
            (mdmProducts.details.registrationData as RegistrationDataProduct)?.name.toLowerCase().includes(this.filterText.toLowerCase()) ||
            (mdmProducts.details.registrationData as RegistrationDataProduct).descriptionShort.toLowerCase().includes(this.filterText.toLowerCase())
        );
    }
    // Sort filtered products
    get sortedProducts() {
        const sorted = [...this.filteredProducts];
        sorted.sort((a, b) => {
            let aVal = (a.details?.registrationData as RegistrationDataProduct)[this.sortColumn as keyof RegistrationDataProduct];
            let bVal = (b.details?.registrationData as RegistrationDataProduct)[this.sortColumn as keyof RegistrationDataProduct];
            if (typeof aVal === 'string') aVal = aVal.toLowerCase();
            if (typeof bVal === 'string') bVal = bVal.toLowerCase();
            if (aVal < bVal) return this.sortDirection === 'asc' ? -1 : 1;
            if (aVal > bVal) return this.sortDirection === 'asc' ? 1 : -1;
            return 0;
        });
        return sorted;
    }
    // Get total pages
    get totalPages() {
        return Math.ceil(this.sortedProducts.length / this.itemsPerPage);
    }
    // Get paginated products for current page
    get paginatedProducts() {
        const start = (this.currentPage - 1) * this.itemsPerPage;
        const end = start + this.itemsPerPage;
        return this.sortedProducts.slice(start, end);
    }
    // Get visible pages for pagination (show current -1, current, current +1, clamped to 1 and totalPages)
    get visiblePages() {
        const pages = [];
        const start = Math.max(1, this.currentPage - 1);
        const end = Math.min(this.totalPages, this.currentPage + 1);
        for (let i = start; i <= end; i++) {
            pages.push(i);
        }
        return pages;
    }
    // Handle sort click
    handleSort(column: string) {
        if (this.sortColumn === column) {
            this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
        } else {
            this.sortColumn = column;
            this.sortDirection = 'asc';
        }
    }

    // Handle edit action
    handleEdit(e: MouseEvent, product: MdmRecord) {
        e.preventDefault();
        setState('ui.petshop.admin.product.selected', product);
        if (this.linkToEdit) this.linkToEdit.click();
    }

    // Handle previous page
    handlePrevPage() {
        if (this.currentPage > 1) {
            this.currentPage--;
        }
    }
    // Handle next page
    handleNextPage() {
        if (this.currentPage < this.totalPages) {
            this.currentPage++;
        }
    }
    // Handle page number click
    handlePageClick(page: number) {
        this.currentPage = page;
    }
    render() {
        return html`<div class="organism-admin-product-list" id="petshop--organism-admin-product-list-102009-1">
<h2 id="petshop--organism-admin-product-list-102009-2">Lista de Produtos</h2>
<div class="form-group" id="petshop--organism-admin-product-list-102009-3">
<label for="filter-name" id="petshop--organism-admin-product-list-102009-4">Filtrar por Nome ou Categoria:</label>
<div class="filter-controls" id="petshop--organism-admin-product-list-102009-29">
<input type="text" id="filter-name" placeholder="Digite o nome ou categoria" @input="${(e: Event) => this.filterText = (e.target as HTMLInputElement).value}" id="petshop--organism-admin-product-list-102009-5">
<button class="btn btn-save" id="petshop--organism-admin-product-list-102009-30"><a href="/pageAdminAddProduct">Adicionar novo</a></button>
</div>
</div>
<table id="petshop--organism-admin-product-list-102009-6">
<thead id="petshop--organism-admin-product-list-102009-7">
<tr id="petshop--organism-admin-product-list-102009-8">
<th @click="${() => this.handleSort('name')}" id="petshop--organism-admin-product-list-102009-9">Nome ${this.sortColumn === 'name' ? (this.sortDirection === 'asc' ? '↑' : '↓') : ''}</th>
<th @click="${() => this.handleSort('descriptionShort')}" id="petshop--organism-admin-product-list-102009-12">Descrição ${this.sortColumn === 'descriptionShort' ? (this.sortDirection === 'asc' ? '↑' : '↓') : ''}</th>
<th id="petshop--organism-admin-product-list-102009-13">Ações</th>
</tr>
</thead>
<tbody id="petshop--organism-admin-product-list-102009-14">
${this.paginatedProducts.map(product => html`
<tr>
<td>${(product.details.registrationData as RegistrationDataProduct)?.name}</td>
<td>${(product.details.registrationData as RegistrationDataProduct)?.descriptionShort}</td>

<td>
<a href="#" @click="${(e: MouseEvent) => this.handleEdit(e, product)}">Editar</button>
</td>
</tr>
`)}
</tbody>
</table>
<div class="pagination" id="petshop--organism-admin-product-list-102009-25">
<button @click="${this.handlePrevPage}" ?disabled="${this.currentPage === 1}" id="petshop--organism-admin-product-list-102009-26">Anterior</button>
${this.visiblePages.map(page => html`<button @click="${() => this.handlePageClick(page)}" class="${page === this.currentPage ? 'active' : ''}">${page}</button>`)}
<button @click="${this.handleNextPage}" ?disabled="${this.currentPage === this.totalPages}" id="petshop--organism-admin-product-list-102009-28">Próxima</button>
    <a id="link-to-edit" style="display:none" href="/pageAdminEditProduct"></a>

</div>
</div>`;
    }
}