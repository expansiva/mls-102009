/// <mls fileReference="_102009_/l1/pizzaria/layer_2_controller/login.ts" enhancement="_blank" />
/**
* @screen login
* @page login
* @actor customer
* @purpose Authenticate user and establish session for secure access to the pizzaria app.
*/
// ── entity interfaces ─────────────────────────────────────────────
export interface user {
email    : string;
password : string;
}

// ── TempStateAction ───────────────────────────────────────────────
export enum TempStateAction {
SHOW_PASSWORD = 'showPassword',
REMEMBER_ME   = 'rememberMe',
LAST_TRIED_EMAIL = 'lastTriedEmail',
}

// ── NavigationFieldsAction ────────────────────────────────────────
export enum NavigationFieldsAction {
GO_TO_FORGOT_PASSWORD = 'goToForgotPassword',
GO_TO_REGISTER        = 'goToRegister',
}

// ── EmitsAction ───────────────────────────────────────────────────
export enum EmitsAction {
SUBMIT_LOGIN = 'submitLogin',
}

// ── action state enums ────────────────────────────────────────────
export enum Loading {
IDLE    = 'idle',
LOADING = 'loading',
}

export enum Error {
NONE                = 'none',
INVALID_CREDENTIALS = 'invalid_credentials',
NETWORK_ERROR       = 'network_error',
}

// ── mocks ─────────────────────────────────────────────────────────
export const Mock_user: user[] = [
{
email    : 'alice@example.com',
password : 'Alice@2024!',
},
{
email    : 'bob@pizzaria.com',
password : 'B0bSecure#',
},
{
email    : 'carol@pizza.io',
password : 'C@rolPass99',
},
];
