/// <mls shortName="organismFooterInfo" project="102009" enhancement="_100554_enhancementLit" groupName="petshop" />

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { IcaOrganismBase } from './_100554_icaOrganismBase';

@customElement('organism-footer-info-102009')
export class _102009_organismFooterInfo extends IcaOrganismBase {
    render(){
        return html`
      <footer class="site-footer">
        <div class="container">
          <div class="footer-content">
            <div class="footer-section">
              <h3 class="footer-title">PetShop</h3>
              <p class="footer-description">Cuidando do seu pet com amor e profissionalismo há mais de 10 anos.</p>
              <div class="social-links">
                <a href="#" class="social-link">
                  <img src="https://images.unsplash.com/photo-1688678991612-c1e7c9d85c71?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxmYWNlYm9vayUyMHNvY2lhbCUyMG1lZGlhJTIwaWNvbnxlbnwwfHx8fDE3NTMyOTE4OTJ8MA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=400" alt="Facebook">
                </a>
                <a href="#" class="social-link">
                  <img src="https://images.unsplash.com/photo-1688678991318-b6949e7d26ab?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxpbnN0YWdyYW0lMjBzb2NpYWwlMjBtZWRpYSUyMGljb258ZW58MHx8fHwxNzUzMjkxODkzfDA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=400" alt="Instagram">
                </a>
                <a href="#" class="social-link">
                  <img src="https://images.unsplash.com/photo-1644035525230-61eae56969da?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHx3aGF0c2FwcCUyMG1lc3NhZ2luZyUyMGljb258ZW58MHx8fHwxNzUzMjkxODkzfDA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=400" alt="WhatsApp">
                </a>
              </div>
            </div>
            <div class="footer-section">
              <h4 class="footer-subtitle">Serviços</h4>
              <ul class="footer-links">
                <li><a href="#">Banho e Tosa</a></li>
                <li><a href="#">Consulta Veterinária</a></li>
                <li><a href="#">Vacinação</a></li>
                <li><a href="#">Cirurgias</a></li>
              </ul>
            </div>
            <div class="footer-section">
              <h4 class="footer-subtitle">Produtos</h4>
              <ul class="footer-links">
                <li><a href="#">Ração</a></li>
                <li><a href="#">Brinquedos</a></li>
                <li><a href="#">Acessórios</a></li>
                <li><a href="#">Higiene</a></li>
              </ul>
            </div>
            <div class="footer-section">
              <h4 class="footer-subtitle">Contato</h4>
              <div class="contact-details">
                <p><strong>Telefone:</strong> (11) 9999-9999</p>
                <p><strong>Email:</strong> contato@petshop.com</p>
                <p><strong>Endereço:</strong> Rua dos Pets, 123<br>São Paulo, SP - CEP 01234-567</p>
              </div>
            </div>
          </div>
          <div class="footer-bottom">
            <p>© 2024 PetShop. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    `
    }
}