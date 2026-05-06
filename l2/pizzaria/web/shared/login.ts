/// <mls fileReference="_102009_/l2/pizzaria/web/shared/login.ts" enhancement="_102020_/l2/enhancementAura" />

import { CollabLitElement } from '/_102027_/l2/collabLitElement.js';
import { property, state } from 'lit/decorators.js';
import { execBff } from '/_102029_/l2/bffClient.js';
import type { user } from '_102009_/l1/pizzaria/layer_2_controller/login.js';
import {
  TempStateAction,
  NavigationFieldsAction,
  EmitsAction,
  Loading,
  Error,
  Mock_user,
} from '_102009_/l1/pizzaria/layer_2_controller/login.js';

export class LoginShared extends CollabLitElement {
  // ── @property() fields ──────────────────────────────
  // No route/input params specified in spec

  // ── @state() fields ─────────────────────────────────
  @state() action: TempStateAction | NavigationFieldsAction | EmitsAction | null = null;
  @state() loading: boolean = false;
  @state() error: string | null = null;

  // Entity fields
  @state() user_email: string = '';
  @state() user_password: string = '';

  // Temp states
  @state() showPassword: boolean = false;
  @state() rememberMe: boolean = false;
  @state() lastTriedEmail: string = '';
  @state() errorMessage: string = '';

  // Action states
  @state() loginLoading: Loading = Loading.IDLE;
  @state() loginError: Error = Error.NONE;

  // Computed fields
  @state() isSubmitEnabled: boolean = false;

  // ── updated() — covers every action value ───────────
  updated(changed: Map<string, unknown>) {
    if (changed.has('action')) {
      // EmitsAction
      if (this.action === EmitsAction.SUBMIT_LOGIN) this._submitLogin();
      // NavigationFieldsAction
      if (this.action === NavigationFieldsAction.GO_TO_FORGOT_PASSWORD) this.navigateToForgotPassword();
      if (this.action === NavigationFieldsAction.GO_TO_REGISTER) this.navigateToRegister();
      // TempStateAction
      if (this.action === TempStateAction.SHOW_PASSWORD) this._toggleShowPassword();
      if (this.action === TempStateAction.REMEMBER_ME) this._toggleRememberMe();
      if (this.action === TempStateAction.LAST_TRIED_EMAIL) this._setLastTriedEmail();
    }
  }

  // ── EmitsAction handlers ────────────────────────────
  private async _submitLogin() {
    this.action = null;
    this.loading = true;
    this.error = null;
    this.loginLoading = Loading.LOADING;
    try {
      /*
      // Remove comment to execute
      const result = await execBff<user>(
        'user.submitLogin',
        { email: this.user_email, password: this.user_password },
      );
      if (result.error) {
        this.error = result.error.message;
        this.errorMessage = result.error.message;
        this.loginLoading = Loading.IDLE;
        this.loginError = Error.INVALID_CREDENTIALS;
        this.loading = false;
        return;
      }
      const res = result.data;
      if (!res) {
        this.loading = false;
        return;
      }
      */
      const res: user = Mock_user[0];
      this.user_email = res.email;
      this.user_password = res.password;
      this.lastTriedEmail = res.email;
      this._computeIsSubmitEnabled();
      this.loginLoading = Loading.IDLE;
      this.loginError = Error.NONE;
      this.loading = false;
    } catch (e) {
      this.loading = false;
      this.loginLoading = Loading.IDLE;
      this.loginError = Error.NETWORK_ERROR;
      this.error = (e as any).message;
      this.errorMessage = (e as any).message;
    }
  }

  // ── TempStateAction handlers ────────────────────────
  private _toggleShowPassword() {
    this.action = null;
    this.showPassword = !this.showPassword;
  }

  private _toggleRememberMe() {
    this.action = null;
    this.rememberMe = !this.rememberMe;
  }

  private _setLastTriedEmail() {
    this.action = null;
    this.lastTriedEmail = this.user_email;
  }

  // ── NavigationFieldsAction handlers ─────────────────
  public navigateToForgotPassword() {
    this.action = null;
    // Example: update router state or call navigation service
  }

  public navigateToRegister() {
    this.action = null;
    // Example: update router state or call navigation service
  }

  // ── EmitsAction public surface ──────────────────────
  public emitSubmitLogin() {
    this.action = null;
    // Payload available as state; extending component reads it
  }

  // ── Computed fields ─────────────────────────────────
  private _computeIsSubmitEnabled() {
    this.isSubmitEnabled =
      this.user_email.includes('@') &&
      this.user_password.length >= 8 &&
      !this.loading;
  }
}
