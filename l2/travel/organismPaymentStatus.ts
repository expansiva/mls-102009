/// <mls shortName="organismPaymentStatus" project="102009" folder="travel" enhancement="_100554_enhancementLit" groupName="travel" />

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { IcaOrganismBase } from './_100554_icaOrganismBase';

@customElement('travel--organism-payment-status-102009')
export class organismPaymentStatus extends IcaOrganismBase {
    render(){
        return html`<section class="payment-status-section" aria-live="polite" id="travel--payment-status-102009-1">
        <!-- Exemplo de status de pagamento -->
        <div class="payment-status payment-status--success" role="status" id="travel--payment-status-102009-2">
          <img src="https://images.unsplash.com/photo-1681577997228-8c558352ffa7?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHwlQzMlQURjb25lJTIwZGUlMjBzdWNlc3NvJTJDJTIwY2hlY2slMjB2ZXJkZXxlbnwwfHx8fDE3NTUwMzE1NzB8MA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080" alt="Sucesso" class="status-icon" id="travel--payment-status-102009-3">
          <div id="travel--payment-status-102009-4">
            <h2 class="status-title" id="travel--payment-status-102009-5">Pagamento aprovado!</h2>
            <p class="status-message" id="travel--payment-status-102009-6">Sua reserva foi confirmada. Você receberá um e-mail com os detalhes em instantes.</p>
          </div>
        </div>
        <!--
        <div class="payment-status payment-status--error" role="alert">
          <img src="https://images.unsplash.com/photo-1628322131627-312b59100847?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHwlQzMlQURjb25lJTIwZGUlMjBlcnJvJTJDJTIwWCUyMHZlcm1lbGhvfGVufDB8fHx8MTc1NTAzMTU3MXww&ixlib=rb-4.1.0&q=80&w=1080" alt="Erro" class="status-icon" />
          <div>
            <h2 class="status-title">Pagamento não aprovado</h2>
            <p class="status-message">Houve um problema ao processar seu pagamento. Tente novamente ou utilize outro método.</p>
          </div>
        </div>
        -->
      </section>
    `
    }
}