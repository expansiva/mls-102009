/// <mls shortName="organismTestimonials" project="102009" enhancement="_100554_enhancementLit" groupName="petshop" />

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { IcaOrganismBase } from './_100554_icaOrganismBase';

@customElement('organism-testimonials-102009')
export class _102009_organismTestimonials extends IcaOrganismBase {
    render(){
        return html`
  <section class="testimonials-section" id="testimonials-1">
  <div class="container" id="testimonials-2">
    <h2 class="section-title" id="testimonials-3">O que nossos clientes dizem</h2>
    <div class="testimonials-carousel" id="testimonials-4">
      
      <div class="testimonial-card" id="testimonials-5">
        <div class="testimonial-content" id="testimonials-6">
          <p class="testimonial-text" id="testimonials-7">"Excelente atendimento! Minha cachorrinha sempre fica linda depois do banho e tosa. Equipe muito carinhosa."</p>
          <div class="testimonial-author" id="testimonials-8">
            <img src="https://images.unsplash.com/photo-1712571354493-a249035399e0?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHdvbWFuJTIwd2l0aCUyMGRvZyUyMHBvcnRyYWl0fGVufDB8fHx8MTc1MzM2NTA2M3ww&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=400" alt="Foto da Maria Silva" class="author-photo" id="testimonials-9">
            <div class="author-info" id="testimonials-10">
              <h4 class="author-name" id="testimonials-11">Maria Silva</h4>
              <span class="author-pet" id="testimonials-12">Dona da Bella</span>
            </div>
          </div>
        </div>
      </div>
      
      <div class="testimonial-card" id="testimonials-13">
        <div class="testimonial-content" id="testimonials-14">
          <p class="testimonial-text" id="testimonials-15">"O veterinário é muito competente e atencioso. Meu gato se sente à vontade durante as consultas."</p>
          <div class="testimonial-author" id="testimonials-16">
            <img src="https://images.unsplash.com/photo-1745365491611-7eaac36bccc0?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxtYW4lMjBob2xkaW5nJTIwY2F0JTIwcG9ydHJhaXR8ZW58MHx8fHwxNzUzMzY1MDYzfDA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=400" alt="Foto do João Santos" class="author-photo" id="testimonials-17">
            <div class="author-info" id="testimonials-18">
              <h4 class="author-name" id="testimonials-19">João Santos</h4>
              <span class="author-pet" id="testimonials-20">Dono do Mimi</span>
            </div>
          </div>
        </div>
      </div>
      
      <div class="testimonial-card" id="testimonials-21">
        <div class="testimonial-content" id="testimonials-22">
          <p class="testimonial-text" id="testimonials-23">"Produtos de ótima qualidade e preços justos. A entrega é sempre rápida e os produtos chegam em perfeito estado."</p>
          <div class="testimonial-author" id="testimonials-24">
            <img src="https://images.unsplash.com/photo-1752306639329-02e07c8ec4cd?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHdpdGglMjBsYXJnZSUyMGRvZyUyMHBvcnRyYWl0fGVufDB8fHx8MTc1MzM2NTA2NHww&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=400" alt="Foto da Ana Costa" class="author-photo" id="testimonials-25">
            <div class="author-info" id="testimonials-26">
              <h4 class="author-name" id="testimonials-27">Ana Costa</h4>
              <span class="author-pet" id="testimonials-28">Dona do Rex</span>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</section>

    `
    }
}