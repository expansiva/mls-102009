/// <mls shortName="organismBookingInfo" project="102009" folder="petshop" enhancement="_100554_enhancementLit" groupName="petshop" />

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { IcaOrganismBase } from './_100554_icaOrganismBase';

@customElement('petshop--organism-booking-info-102009')
export class organismBookingInfo extends IcaOrganismBase {
    render(){
        return html`<h3 id="petshop--booking-info-102009-1">Como funciona o agendamento?</h3>
      <ul id="petshop--booking-info-102009-2">
        <li id="petshop--booking-info-102009-3">Escolha o serviço desejado, data e horário disponíveis.</li>
        <li id="petshop--booking-info-102009-4">Preencha os dados do seu pet e do tutor corretamente.</li>
        <li id="petshop--booking-info-102009-5">Após o envio, você receberá um e-mail de confirmação do agendamento.</li>
        <li id="petshop--booking-info-102009-6">Chegue com 10 minutos de antecedência ao horário marcado.</li>
      </ul>
      <div class="info-note" id="petshop--booking-info-102009-7">
        <strong id="petshop--booking-info-102009-8">Importante:</strong> Cancelamentos devem ser feitos com pelo menos 2h de antecedência. Horários disponíveis podem variar conforme demanda.<br id="petshop--booking-info-102009-9">
        Para dúvidas, entre em contato pelo WhatsApp ou telefone.
      </div>
    `
    }
}