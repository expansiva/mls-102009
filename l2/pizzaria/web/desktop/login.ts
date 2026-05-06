/// <mls fileReference="_102009_/l2/pizzaria/web/desktop/login.ts" enhancement="_102020_/l2/enhancementAura" />
  
import { html } from 'lit'; 
import { customElement } from 'lit/decorators.js'; 
import { EmitsAction } from '_102009_/l1/pizzaria/layer_2_controller/login.js'; 
import { LoginShared } from '/_102009_/l2/pizzaria/web/shared/login.js';

/// **collab_i18n_start**
const message_en: Record<string, string> = {
  email: 'Email',
  password: 'Password',
  showPassword: 'Show Password',
  rememberMe: 'Remember me',
  login: 'Login',
  forgotPassword: 'Forgot password?',
  register: 'Register',
  loading: 'Loading...',
  error: 'An error occurred.',
  retry: 'Retry'
};
const message_pt: Record<string, string> = {
  email: 'E-mail',
  password: 'Senha',
  showPassword: 'Mostrar Senha',
  rememberMe: 'Lembrar-me',
  login: 'Entrar',
  forgotPassword: 'Esqueceu a senha?',
  register: 'Registrar',
  loading: 'Carregando...',
  error: 'Ocorreu um erro.',
  retry: 'Tentar novamente'
};
type MessageType = typeof message_en;
const messages: { [key: string]: MessageType } = { en: message_en, pt: message_pt };
/// **collab_i18n_end**

@customElement('pizzaria--web--desktop--login-102009')
export class LoginPage extends LoginShared {
  private msg = messages['en'];

  render() {
    const lang = document.documentElement.lang || 'en';
    this.msg = messages[lang] || messages['en'];

    if (this.loading) return html`<div class="login-form__loading flex flex-col items-center justify-center gap-3 py-12">
      <span class="loading__spinner h-8 w-8 animate-spin rounded-full border-4 border-blue-600 border-t-transparent"></span>
      <span class="text-sm text-gray-700">${this.msg.loading}</span>
    </div>`;

    if (this.error) return html`<div class="login-form__error flex flex-col items-center justify-center gap-3 py-12 text-center">
      <span class="error__message text-sm text-red-600 mt-1">${this.msg.error}</span>
      <button type="button" class="btn btn--secondary rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 mt-4"
        @click=${() => { this.action = EmitsAction.SUBMIT_LOGIN; }}>
        ${this.msg.retry}
      </button>
    </div>`;

    return html`<main class="login-form flex flex-col gap-4 w-full max-w-md mx-auto p-6">
      <section class="login-form bg-white rounded-2xl shadow-md p-6">
        <form class="login-form__form flex flex-col gap-4"
          @submit=${(e: Event) => { e.preventDefault(); this.action = EmitsAction.SUBMIT_LOGIN; }}>
          <label class="field text-sm font-medium text-gray-700 mb-1">
            ${this.msg.email}
            <input type="email" class="field__input w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              .value=${this.user_email}
              @input=${(e: Event) => { this.user_email = (e.target as HTMLInputElement).value; }}
              autocomplete="username" required />
          </label>
          <label class="field text-sm font-medium text-gray-700 mb-1 relative">
            ${this.msg.password}
            <input type=${this.showPassword ? 'text' : 'password'}
              class="field__input w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
              .value=${this.user_password}
              @input=${(e: Event) => { this.user_password = (e.target as HTMLInputElement).value; }}
              autocomplete="current-password" required />
            <button type="button" class="btn btn--icon btn--show-password absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
              @click=${() => { this.showPassword = !this.showPassword; }}>
              ${this.msg.showPassword}
            </button>
          </label>
          <label class="field field--checkbox flex items-center gap-2 text-sm font-medium text-gray-700">
            <input type="checkbox" class="field__checkbox h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              ?checked=${this.rememberMe}
              @input=${(e: Event) => { this.rememberMe = (e.target as HTMLInputElement).checked; }} />
            ${this.msg.rememberMe}
          </label>
          <div class="login-form__actions mt-6">
            <button type="submit" class="btn btn--primary w-full rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
              ?disabled=${!this.isSubmitEnabled}>
              ${this.msg.login}
            </button>
          </div>
          <div class="login-form__links flex justify-between mt-4 text-sm">
            <button type="button" class="btn btn--link text-blue-600 hover:underline"
              @click=${() => { this.navigateToForgotPassword(); }}>
              ${this.msg.forgotPassword}
            </button>
            <button type="button" class="btn btn--link text-blue-600 hover:underline"
              @click=${() => { this.navigateToRegister(); }}>
              ${this.msg.register}
            </button>
          </div>
        </form>
      </section>
    </main>`;
  }
}
