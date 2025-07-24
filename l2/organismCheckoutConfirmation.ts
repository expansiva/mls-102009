/// <mls shortName="organismCheckoutConfirmation" project="102009" enhancement="_100554_enhancementLit" groupName="petshop" />

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { IcaOrganismBase } from './_100554_icaOrganismBase';

@customElement('organism-checkout-confirmation-102009')
export class _102009_organismCheckoutConfirmation extends IcaOrganismBase {
    render(){
        return html`
      <div class="checkout-confirmation-container">
        <div class="confirmation-actions">
          <button type="button" class="btn-secondary" onclick="history.back()">Voltar ao Carrinho</button>
          <button type="submit" class="btn-primary" id="confirm-order">Finalizar Compra</button>
        </div>
        
        <div class="terms-acceptance">
          <label class="checkbox-label">
            <input type="checkbox" id="accept-terms" required="">
            <span class="checkmark"></span>
            Aceito os <a href="#" class="terms-link">termos e condições</a> e a <a href="#" class="privacy-link">política de privacidade</a>
          </label>
        </div>
        
        <div class="success-message" id="success-message" style="display: none;">
          <div class="success-icon">
            <img src="https://images.unsplash.com/photo-1662057168153-c0d62a4025f7?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxncmVlbiUyMGNoZWNrbWFyayUyMHN1Y2Nlc3MlMjBpY29uJTIwY29uZmlybWF0aW9ufGVufDB8fHx8MTc1MzM2NTc1OXww&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=400" alt="Sucesso">
          </div>
          <h2>Pedido Realizado com Sucesso!</h2>
          <p>Número do pedido: <strong>#PET2024001</strong></p>
          <p>Você receberá um e-mail de confirmação em breve.</p>
          <div class="next-steps">
            <h3>Próximos Passos:</h3>
            <ul>
              <li>Acompanhe seu pedido através do e-mail enviado</li>
              <li>O prazo de entrega é de 3-5 dias úteis</li>
              <li>Em caso de dúvidas, entre em contato conosco</li>
            </ul>
          </div>
          <button type="button" class="btn-primary" onclick="window.location.href='/'">Continuar Comprando</button>
        </div>
      </div>
    `
    }
}