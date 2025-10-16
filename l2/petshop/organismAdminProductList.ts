/// <mls shortName="organismAdminProductList" project="102009" folder="petshop" enhancement="_100554_enhancementLit" groupName="petshop" />
import { html } from 'lit';
import { customElement, state, query } from 'lit/decorators.js';
import { IcaOrganismBase } from './_100554_icaOrganismBase';
import { setState } from '_100554_/l2/collabState';
import { RequestMDMGetListByType  } from "./_102019_layer4ResReq";
import { MdmData, RegistrationDataProduct, MdmType } from "./_102019_layer4Mdm";
import { exec } from "./_102019_layer1Exec";

@customElement('petshop--organism-admin-product-list-102009')
export class organismAdminProductList extends IcaOrganismBase {

    @state() mdmProducts?: MdmData[];
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
            this.mdmProducts = response.data.map((item: MdmData) => {
                const item2: MdmData = item;
                return item2;
            });
        }


        /*
        this.products = [{ name: 'Ração Premium Cães Adultos', descriptionShort: 'Ração completa e balanceada para cães adultos.' },
        { name: 'Areia Sanitária Biodegradável', descriptionShort: 'Areia higiênica natural e sem perfume para gatos.' },
        { name: 'Coleira Antipulgas MaxProtect', descriptionShort: 'Proteção contra pulgas e carrapatos por até 8 meses.' },
        { name: 'Brinquedo Mordedor Dental', descriptionShort: 'Ajuda na limpeza dos dentes e na redução do tédio.' },
        { name: 'Shampoo Hipoalergênico PetSoft', descriptionShort: 'Fórmula suave para peles sensíveis.' },
        { name: 'Ração Premium Gatos Castrados', descriptionShort: 'Controle de peso e saúde urinária para gatos adultos.' },
        { name: 'Cama Pet Luxo Redonda', descriptionShort: 'Cama confortável com base antiderrapante.' },
        { name: 'Comedouro Inox Antiderrapante', descriptionShort: 'Durável e fácil de limpar.' },
        { name: 'Arranhador Compact CatTree', descriptionShort: 'Estrutura resistente com poste de sisal.' },
        { name: 'Petiscos Naturais DogBites', descriptionShort: 'Sem corantes e conservantes.' },
        { name: 'Coleira Retrátil 5m', descriptionShort: 'Ideal para passeios seguros e confortáveis.' },
        { name: 'Tapete Higiênico Super Absorvente', descriptionShort: 'Neutraliza odores e seca rapidamente.' },
        { name: 'Escova Dupla para Pelagem', descriptionShort: 'Remove pelos soltos e desembaraça facilmente.' },
        { name: 'Ração Filhotes Cães Mini', descriptionShort: 'Ração balanceada para filhotes de raças pequenas.' },
        { name: 'Cortador de Unhas PetCare', descriptionShort: 'Lâmina afiada e empunhadura ergonômica.' },
        { name: 'Perfume Pet Vanilla', descriptionShort: 'Aroma suave e duradouro para pets.' },
        { name: 'Ração Natural Gatos Adultos', descriptionShort: 'Feita com ingredientes naturais e sem transgênicos.' },
        { name: 'Bolinha Interativa com Som', descriptionShort: 'Estimula o exercício e a curiosidade do pet.' },
        { name: 'Casinha Pet Madeira Compact', descriptionShort: 'Design resistente e fácil de montar.' },
        { name: 'Lenços Umedecidos PetClean', descriptionShort: 'Para limpeza rápida entre banhos.' },
        { name: 'Ração Light Cães Adultos', descriptionShort: 'Ajuda no controle de peso com baixo teor de gordura.' },
        { name: 'Brinquedo Corda Trançada', descriptionShort: 'Excelente para brincar de cabo de guerra.' },
        { name: 'Fonte Automática para Gatos', descriptionShort: 'Mantém a água sempre fresca e filtrada.' }
        ]*/
    }
    // Filter products based on filterText
    get filteredProducts() {
        if (!this.mdmProducts) return [];
        return this.mdmProducts.filter(mdmProducts =>
            (mdmProducts.data.registrationData as RegistrationDataProduct)?.name.toLowerCase().includes(this.filterText.toLowerCase()) ||
            (mdmProducts.data.registrationData as RegistrationDataProduct).descriptionShort.toLowerCase().includes(this.filterText.toLowerCase())
        );
    }
    // Sort filtered products
    get sortedProducts() {
        const sorted = [...this.filteredProducts];
        sorted.sort((a, b) => {
            let aVal = (a.data?.registrationData as RegistrationDataProduct)[this.sortColumn as keyof RegistrationDataProduct];
            let bVal = (b.data?.registrationData as RegistrationDataProduct)[this.sortColumn as keyof RegistrationDataProduct];
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
    handleEdit(e: MouseEvent, product: MdmData) {
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
<td>${(product.data.registrationData as RegistrationDataProduct)?.name}</td>
<td>${(product.data.registrationData as RegistrationDataProduct)?.descriptionShort}</td>

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