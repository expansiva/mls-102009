/// <mls shortName="organismViewMyPets" project="102009" folder="petshop" enhancement="_100554_enhancementLit" groupName="petshop" />
import { html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { IcaOrganismBase } from './_100554_icaOrganismBase';
@customElement('petshop--organism-view-my-pets-102009')
export class organismViewMyPets extends IcaOrganismBase {

    @state() scenary = 'list';

    render() {

        if (this.scenary === 'list') return this.renderList();
        return this.renderEdit();
    }

    renderList() {
        return html`<div class="organism-view-my-pets"> 
      <section class="pets-list-section section-card">
        <h2>Meus Pets</h2>
        <div class="filters">
          <div class="form-group">
            <label for="filter-type">Tipo de Pet</label>
            <select id="filter-type">
              <option value="">Todos</option>
              <option value="cachorro">Cachorro</option>
              <option value="gato">Gato</option>
            </select>
          </div>
          <div class="form-group">
            <label for="filter-name">Nome</label>
            <input type="text" id="filter-name" placeholder="Buscar por nome">
          </div>
        </div>
        <button class="add-pet-btn">Adicionar Novo Pet</button>
        <table class="pets-table">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Tipo</th>
              <th>Dono</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Rex</td>
              <td>Cachorro</td>
              <td>João Silva</td>
              <td><button  @click=${() => this.changeScneray('add')}>Editar</button></td>
            </tr>
            <tr>
              <td>Whiskers</td>
              <td>Gato</td>
              <td>Maria Oliveira</td>
              <td><button  @click=${() => this.changeScneray('add')}>Editar</button></td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>`;
    }

    renderEdit() {
        return html`<div class="organism-view-my-pets"> 
      <section class="pet-form-section">
        <div class="form-container">
          <h2>Cadastrar/Editar Pet</h2>
          <form>
            <div class="form-group">
              <label for="pet-name">Nome</label>
              <input type="text" id="pet-name" value="Rex">
            </div>
            <div class="form-group">
              <label for="pet-type">Tipo</label>
              <select id="pet-type">
                <option value="cachorro" selected>Cachorro</option>
                <option value="gato">Gato</option>
              </select>
            </div>
            <div class="form-group">
              <label for="pet-breed">Raça</label>
              <input type="text" id="pet-breed" value="Labrador">
            </div>
            <div class="form-group">
              <label for="pet-age">Idade</label>
              <input type="number" id="pet-age" value="3">
            </div>
            <div class="form-group">
              <label for="pet-notes">Observações</label>
              <textarea id="pet-notes">Pet saudável e ativo.</textarea>
            </div>
            <button type="submit">Salvar</button>
            <button type="button" @click=${() => this.changeScneray('list')}>Cancelar</button>
            <button type="button">Excluir</button>
          </form>
        </div>
      </section>
    </div>`;
    }

    private changeScneray(scenary: string) {
        this.scenary = scenary;
    }
}
