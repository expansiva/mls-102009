/// <mls shortName="organismAdminBookings" project="102009" folder="petshop" enhancement="_100554_enhancementLit" groupName="petshop" />
import { html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { IcaOrganismBase } from './_100554_icaOrganismBase';
import { collab_check, collab_xmark } from './_100554_collabIcons';
interface Booking {
	id: number;
	client: string;
	pet: string;
	service: string;
	date: string;
	status: 'pending' | 'approved' | 'cancelled';
}
@customElement('petshop--organism-admin-bookings-102009')
export class OrganismAdminBookings extends IcaOrganismBase {
	@state() private bookings: Booking[] = [];
	@state() private filtered: Booking[] = [];
	@state() private search = '';
	@state() private statusFilter = '';
	@state() private filterDate = '';
	@state() private filterService = '';
	@state() private currentPage = 1;
	private pageSize = 5;
	connectedCallback() {
		super.connectedCallback();
		// Mock de dados
		this.bookings = [
			{ id: 1, client: 'Maria Silva', pet: 'Rex (Cão)', service: 'Banho', date: '2025-08-05T10:00', status: 'pending' },
			{ id: 2, client: 'João Souza', pet: 'Mimi (Gato)', service: 'Tosa', date: '2025-08-05T11:30', status: 'approved' },
			{ id: 3, client: 'Ana Lima', pet: 'Pipoca (Ave)', service: 'Consulta', date: '2025-08-05T14:00', status: 'pending' },
			{ id: 4, client: 'Pedro Rocha', pet: 'Bolt (Cão)', service: 'Banho e tosa', date: '2025-08-06T09:00', status: 'cancelled' },
			{ id: 5, client: 'Mariana Costa', pet: 'Nina (Gato)', service: 'Consulta', date: '2025-08-06T15:00', status: 'approved' },
			{ id: 6, client: 'Lucas Andrade', pet: 'Thor (Cão)', service: 'Vacinação', date: '2025-08-07T09:30', status: 'pending' },
			{ id: 7, client: 'Fernanda Oliveira', pet: 'Luna (Gato)', service: 'Banho', date: '2025-08-07T13:00', status: 'approved' },
			{ id: 8, client: 'Ricardo Santos', pet: 'Toby (Cão)', service: 'Tosa', date: '2025-08-07T16:00', status: 'approved' },
			{ id: 9, client: 'Beatriz Mendes', pet: 'Bidu (Cão)', service: 'Consulta', date: '2025-08-08T10:00', status: 'pending' },
			{ id: 10, client: 'Paulo César', pet: 'Mel (Gato)', service: 'Banho e tosa', date: '2025-08-08T11:30', status: 'cancelled' },
			{ id: 11, client: 'Clara Torres', pet: 'Loki (Cão)', service: 'Banho', date: '2025-08-09T09:00', status: 'approved' },
			{ id: 12, client: 'Diego Martins', pet: 'Zeca (Ave)', service: 'Consulta', date: '2025-08-09T14:00', status: 'pending' },
			{ id: 13, client: 'Aline Ribeiro', pet: 'Snow (Gato)', service: 'Vacinação', date: '2025-08-10T08:30', status: 'approved' },
			{ id: 14, client: 'Rafael Nunes', pet: 'Max (Cão)', service: 'Banho', date: '2025-08-10T15:30', status: 'pending' },
			{ id: 15, client: 'Isabela Freitas', pet: 'Amora (Gato)', service: 'Tosa', date: '2025-08-11T10:30', status: 'cancelled' },
			{ id: 16, client: 'Marcelo Lopes', pet: 'Nino (Cão)', service: 'Banho e tosa', date: '2025-08-11T13:00', status: 'approved' },
			{ id: 17, client: 'Tatiane Pires', pet: 'Blue (Ave)', service: 'Consulta', date: '2025-08-12T09:00', status: 'pending' },
			{ id: 18, client: 'Rodrigo Silva', pet: 'Bela (Cão)', service: 'Vacinação', date: '2025-08-12T14:00', status: 'approved' },
			{ id: 19, client: 'Juliana Duarte', pet: 'Kiki (Gato)', service: 'Banho', date: '2025-08-13T11:00', status: 'approved' },
			{ id: 20, client: 'André Vasconcelos', pet: 'Spike (Cão)', service: 'Consulta', date: '2025-08-13T15:30', status: 'pending' },
		];
		this.filtered = [...this.bookings];
	}
	// ---- Filtros ----
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
		let list = [...this.bookings];
		if (this.search) {
			list = list.filter(b =>
				b.client.toLowerCase().includes(this.search) ||
				b.pet.toLowerCase().includes(this.search)
			);
		}
		if (this.statusFilter) {
			list = list.filter(b => b.status === this.statusFilter);
		}
		if (this.filterDate) {
			list = list.filter(b => new Date(b.date).toDateString() === new Date(this.filterDate).toDateString());
		}
		if (this.filterService) {
			list = list.filter(b => b.service === this.filterService);
		}
		this.currentPage = 1;
		this.filtered = list;
	}

	// ---- Ações ----
	private approveBooking(id: number) {
		this.bookings = this.bookings.map(b =>
			b.id === id ? { ...b, status: 'approved' } : b
		);
		this.applyFilters();
	}
	private cancelBooking(id: number) {
		this.bookings = this.bookings.map(b =>
			b.id === id ? { ...b, status: 'cancelled' } : b
		);
		this.applyFilters();
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
<div class="admin-bookings__filters">
<input
type="text"
placeholder="Buscar cliente ou pet..."
@input=${this.handleSearch}
value=${this.search}
/>
<select @change=${this.handleStatusFilter}>
<option value="">Todos os status</option>
<option value="pending">Pendente</option>
<option value="approved">Aprovado</option>
<option value="cancelled">Cancelado</option>
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
</div>
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
<td>${b.client}</td>
<td>${b.pet}</td>
<td>${b.service}</td>
<td>${new Date(b.date).toLocaleString()}</td>
<td>
<span class="admin-bookings__status admin-bookings__status--${b.status}">
${this.getStatusLabel(b.status)}
</span>
</td>
<td class="admin-bookings__action_td">
${b.status === 'pending' ? html`
<button class="admin-bookings__action admin-bookings__action--approve"
@click=${() => this.approveBooking(b.id)}>${collab_check}</button>
<button class="admin-bookings__action admin-bookings__action--cancel"
@click=${() => this.cancelBooking(b.id)}>${collab_xmark}</button>
` : b.status === 'approved' ? html`
<button class="admin-bookings__action admin-bookings__action--cancel"
@click=${() => this.cancelBooking(b.id)}>${collab_xmark}</button>
` : html`<em>—</em>`}
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
	private getStatusLabel(status: string) {
		switch (status) {
			case 'pending': return 'Pendente';
			case 'approved': return 'Aprovado';
			case 'cancelled': return 'Cancelado';
			default: return status;
		}
	}
	private getUniqueServices() {
		const services = this.bookings.map(b => b.service);
		return [...new Set(services)];
	}
}