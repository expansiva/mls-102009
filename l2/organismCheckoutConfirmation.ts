/// <mls shortName="organismCheckoutConfirmation" project="102009" enhancement="_100554_enhancementLit" groupName="petshop" />

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { IcaOrganismBase } from './_100554_icaOrganismBase';

@customElement('organism-checkout-confirmation-102009')
export class _102009_organismCheckoutConfirmation extends IcaOrganismBase {
    render(){
        return html`
    <div class="checkout-confirmation-container" id="checkout-confirmation-1">
  <div class="confirmation-actions" id="checkout-confirmation-2">
    <button type="button" class="btn-secondary" onclick="history.back()" id="checkout-confirmation-3">Voltar ao Carrinho</button>
    <button type="submit" class="btn-primary" id="checkout-confirmation-4">Finalizar Compra</button>
  </div>
  
  <div class="terms-acceptance" id="checkout-confirmation-5">
    <label class="checkbox-label" id="checkout-confirmation-6">
      <input type="checkbox" id="checkout-confirmation-7" required="">
      <span class="checkmark" id="checkout-confirmation-8"></span>
      Aceito os <a href="#" class="terms-link" id="checkout-confirmation-9">termos e condições</a> e a <a href="#" class="privacy-link" id="checkout-confirmation-10">política de privacidade</a>
    </label>
  </div>
  
  <div class="success-message" id="checkout-confirmation-11" style="display: none;">
    <div class="success-icon" id="checkout-confirmation-12">
      <img src="https://images.unsplash.com/photo-1662057168153-c0d62a4025f7?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxncmVlbiUyMGNoZWNrbWFyayUyMHN1Y2Nlc3MlMjBpY29uJTIwY29uZmlybWF0aW9ufGVufDB8fHx8MTc1MzM2NTc1OXww&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=400" alt="Sucesso" id="checkout-confirmation-13">
    </div>
    <h2 id="checkout-confirmation-14">Pedido Realizado com Sucesso!</h2>
    <p id="checkout-confirmation-15">Número do pedido: <strong id="checkout-confirmation-16">#PET2024001</strong></p>
    <p id="checkout-confirmation-17">Você receberá um e-mail de confirmação em breve.</p>
    <div class="next-steps" id="checkout-confirmation-18">
      <h3 id="checkout-confirmation-19">Próximos Passos:</h3>
      <ul id="checkout-confirmation-20">
        <li id="checkout-confirmation-21">Acompanhe seu pedido através do e-mail enviado</li>
        <li id="checkout-confirmation-22">O prazo de entrega é de 3-5 dias úteis</li>
        <li id="checkout-confirmation-23">Em caso de dúvidas, entre em contato conosco</li>
      </ul>
    </div>
    <button type="button" class="btn-primary" onclick="window.location.href='/'" id="checkout-confirmation-24">Continuar Comprando</button>
  </div>
</div>

    `
    }
}