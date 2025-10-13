/// <mls shortName="organismViewMyAppointments" project="102009" folder="petshop" enhancement="_100554_enhancementLit" groupName="petshop" />
import { html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { IcaOrganismBase } from './_100554_icaOrganismBase';

@customElement('petshop--organism-view-my-appointments-102009')
export class organismViewMyAppointments extends IcaOrganismBase {
    @state() scenary = 'list';

    render() {

        if (this.scenary === 'list') return this.renderList();
        return this.renderEdit();
    }

    renderList() {
        return html`<div class="form-container">
<h2>Meus Agendamentos</h2>
<div class="form-group">
<label for="date-filter">Filtrar por Data</label>
<input type="date" id="date-filter" name="date-filter">
</div>
<div class="section-card">
<table>
<thead>
<tr>
<th>Data</th>
<th>Horário</th>
<th>Serviço</th>
<th>Status</th>
<th>Ações</th>
</tr>
</thead>
<tbody>
<tr>
<td>2025-10-15</td>
<td>10:00</td>
<td>Banho e Tosa</td>
<td>Confirmado</td>
<td><button @click=${() => this.changeScneray('add')}>Ver Detalhes</button></td>
</tr>
<tr>
<td>2025-10-20</td>
<td>14:00</td>
<td>Consulta Veterinária</td>
<td>Pendente</td>
<td><button @click=${() => this.changeScneray('add')}>Ver Detalhes</button></td>
</tr>
<tr>
<td>2025-10-25</td>
<td>09:00</td>
<td>Vacinação</td>
<td>Cancelado</td>
<td><button @click=${() => this.changeScneray('add')}>Ver Detalhes</button></td>
</tr>
</tbody>
</table>
</div>
</div>`
    }

    renderEdit() {
        return html`<div class="form-container">
<div class="section-card">
<h2>Detalhes do Agendamento</h2>
<div class="form-group">
<label>Data:</label>
<span class="field-value">2025-10-15</span>
</div>
<div class="form-group">
<label>Horário:</label>
<span class="field-value">10:00</span>
</div>
<div class="form-group">
<label>Serviço:</label>
<span class="field-value">Banho e Tosa</span>
</div>
<div class="form-group">
<label>Pet:</label>
<span class="field-value">Rex</span>
</div>
<div class="form-group">
<label>Status:</label>
<span class="field-value">Confirmado</span>
</div>
<button  @click=${() => this.changeScneray('list')}>Cancelar Agendamento</button>
<button>Voltar à Lista</button>
</div>
</div>`
    }

    private changeScneray(scenary: string) {
        this.scenary = scenary;
    }
}