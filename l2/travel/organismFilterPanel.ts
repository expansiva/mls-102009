/// <mls shortName="organismFilterPanel" project="102009" folder="travel" enhancement="_100554_enhancementLit" groupName="travel" />

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { IcaOrganismBase } from './_100554_icaOrganismBase';

@customElement('travel--organism-filter-panel-102009')
export class organismFilterPanel extends IcaOrganismBase {
    render(){
        return html`<form class="filter-form" aria-label="Filtrar pacotes de viagem" id="travel--filter-panel-102009-1">
          <fieldset class="filter-group" id="travel--filter-panel-102009-2">
            <legend class="filter-title" id="travel--filter-panel-102009-3">Preço</legend>
            <div class="filter-range" id="travel--filter-panel-102009-4">
              <label for="preco-min" id="travel--filter-panel-102009-5">Mínimo</label>
              <input type="number" id="preco-min" name="preco-min" min="0" placeholder="R$ 0">
              <label for="preco-max" id="travel--filter-panel-102009-6">Máximo</label>
              <input type="number" id="preco-max" name="preco-max" min="0" placeholder="R$ 10.000">
            </div>
          </fieldset>
          <fieldset class="filter-group" id="travel--filter-panel-102009-7">
            <legend class="filter-title" id="travel--filter-panel-102009-8">Destino</legend>
            <select name="destino" id="destino">
              <option value="" id="travel--filter-panel-102009-9">Todos</option>
              <option value="rio" id="travel--filter-panel-102009-10">Rio de Janeiro</option>
              <option value="salvador" id="travel--filter-panel-102009-11">Salvador</option>
              <option value="gramado" id="travel--filter-panel-102009-12">Gramado</option>
              <option value="florianopolis" id="travel--filter-panel-102009-13">Florianópolis</option>
            </select>
          </fieldset>
          <fieldset class="filter-group" id="travel--filter-panel-102009-14">
            <legend class="filter-title" id="travel--filter-panel-102009-15">Duração</legend>
            <select name="duracao" id="duracao">
              <option value="" id="travel--filter-panel-102009-16">Todas</option>
              <option value="1-3" id="travel--filter-panel-102009-17">1-3 dias</option>
              <option value="4-7" id="travel--filter-panel-102009-18">4-7 dias</option>
              <option value="8-14" id="travel--filter-panel-102009-19">8-14 dias</option>
              <option value="15+" id="travel--filter-panel-102009-20">15+ dias</option>
            </select>
          </fieldset>
          <fieldset class="filter-group" id="travel--filter-panel-102009-21">
            <legend class="filter-title" id="travel--filter-panel-102009-22">Tipo de pacote</legend>
            <div class="filter-checkboxes" id="travel--filter-panel-102009-23">
              <label id="travel--filter-panel-102009-24"><input type="checkbox" name="tipo" value="familia" id="travel--filter-panel-102009-25"> Família</label>
              <label id="travel--filter-panel-102009-26"><input type="checkbox" name="tipo" value="romantico" id="travel--filter-panel-102009-27"> Romântico</label>
              <label id="travel--filter-panel-102009-28"><input type="checkbox" name="tipo" value="aventura" id="travel--filter-panel-102009-29"> Aventura</label>
              <label id="travel--filter-panel-102009-30"><input type="checkbox" name="tipo" value="cultural" id="travel--filter-panel-102009-31"> Cultural</label>
            </div>
          </fieldset>
          <button type="submit" class="filter-submit" id="travel--filter-panel-102009-32">Aplicar filtros</button>
        </form>
      `
    }
}