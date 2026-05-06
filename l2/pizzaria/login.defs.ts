/// <mls fileReference="_102009_/l2/pizzaria/login.defs.ts"  enhancement="_blank"/>

export const definition = {
  "pages": [
    {
      "screenId": "login",
      "pageName": "login",
      "actor": "customer",
      "purpose": "Authenticate user and establish session for secure access to the pizzaria app.",
      "sections": [
        {
          "sectionName": "main",
          "mode": "stack",
          "organisms": [
            {
              "organismName": "loginForm",
              "purpose": "Collects user credentials and triggers authentication flow.",
              "rulesApplied": [
                "Password must be at least 8 characters.",
                "Email must be valid format.",
                "Show/hide password toggle.",
                "Disable submit while loading.",
                "Show error on failed login.",
                "Remember me option for persistent session."
              ],
              "dataShape": {
                "shape": "fields",
                "entityFields": [
                  {
                    "entity": "user",
                    "entityField": "email",
                    "stateKey": "db.user.email",
                    "priority": "required",
                    "usage": "edit",
                    "priorityReason": "Essential for authentication."
                  },
                  {
                    "entity": "user",
                    "entityField": "password",
                    "stateKey": "db.user.password",
                    "priority": "required",
                    "usage": "edit",
                    "priorityReason": "Essential for authentication."
                  }
                ]
              },
              "tempStates": [
                {
                  "stateKey": "ui.login.showPassword",
                  "type": "boolean",
                  "description": "Toggle to show/hide password input.",
                  "priority": "recommended",
                  "initialValue": "false"
                },
                {
                  "stateKey": "ui.login.rememberMe",
                  "type": "boolean",
                  "description": "Checkbox for persistent login session.",
                  "priority": "optional",
                  "initialValue": "false"
                }
              ],
              "computedFields": [
                {
                  "fieldId": "isSubmitEnabled",
                  "derivedFrom": [
                    "db.user.email",
                    "db.user.password",
                    "ui.loginForm.loading"
                  ],
                  "description": "Submit enabled only if fields valid and not loading.",
                  "priority": "required"
                }
              ],
              "navigationFields": [
                {
                  "fieldId": "goToForgotPassword",
                  "target": "forgotPassword",
                  "params": [],
                  "priority": "recommended",
                  "navigationType": "internal"
                },
                {
                  "fieldId": "goToRegister",
                  "target": "register",
                  "params": [],
                  "priority": "optional",
                  "navigationType": "internal"
                }
              ],
              "emits": [
                {
                  "event": "submitLogin",
                  "payload": "{email,password,rememberMe}",
                  "writesState": "ui.loginForm.loading"
                }
              ]
            }
          ]
        }
      ],
      "actionStates": [
        {
          "stateKey": "ui.loginForm.loading",
          "description": "Login form submission in progress.",
          "values": [
            "idle",
            "loading"
          ]
        },
        {
          "stateKey": "ui.loginForm.error",
          "description": "Error state for failed login attempt.",
          "values": [
            "none",
            "invalid_credentials",
            "network_error"
          ]
        }
      ],
      "tempStates": [
        {
          "stateKey": "ui.login.lastTriedEmail",
          "type": "string",
          "description": "Stores last attempted email for UX feedback.",
          "priority": "optional"
        }
      ]
    }
  ]
}

export const contractSpec = `
##Pages spec
\`\`\`JSON
    [[(_102009_/l2/pizzaria/login.defs.ts).definition]]
\`\`\`
`

export const sharedSpec = `
##Pages spec
\`\`\`JSON
{
  "interfacePath":"_102009_/l1/pizzaria/layer_2_controller/login.js",
  "definition": [[(_102009_/l2/pizzaria/login.defs.ts).definition]]
}    
\`\`\`

##Base Interfaces, Enuns ...
\`\`\`
    [[(_102009_/l1/pizzaria/layer_2_controller/login.ts)]]
\`\`\`
`

export const desktopLayout = {
  "className": "LoginPage",
  "tagName": "pizzaria--web--desktop--login-102009",
  "extends": "LoginShared",
  "sharedPath": "/_102009_/l2/pizzaria/web/shared/login.js",
  "styling": "",
  "imports": [
    {
      "type": "value",
      "import": "{ anyInterfaces }",
      "path": "{interfacePath}"
    },
    {
      "type": "value",
      "import": "{ LoginShared }",
      "path": "/_102009_/l2/pizzaria/web/shared/login.js"
    }
  ],
  "render": {
    "conditions": [
      {
        "if": "this.loading",
        "return": "loading"
      },
      {
        "if": "this.error",
        "return": "error"
      }
    ],
    "blocks": {
      "default": {
        "element": "main",
        "class": "login-form",
        "children": [
          {
            "element": "section",
            "class": "login-form",
            "children": [
              {
                "element": "form",
                "class": "login-form__form",
                "event": {
                  "on": "submit",
                  "type": "action",
                  "state": "action",
                  "value": "LoginAction.SUBMIT_LOGIN",
                  "prevent": true
                },
                "children": [
                  {
                    "element": "label",
                    "class": "field",
                    "i18n": "email",
                    "children": [
                      {
                        "element": "input",
                        "type": "email",
                        "class": "field__input",
                        "bind": "this.user_email",
                        "autocomplete": "username",
                        "required": true,
                        "event": {
                          "on": "input",
                          "type": "set",
                          "state": "user_email",
                          "cast": "string"
                        }
                      }
                    ]
                  },
                  {
                    "element": "label",
                    "class": "field",
                    "i18n": "password",
                    "children": [
                      {
                        "element": "input",
                        "type": {
                          "condition": "this.login_showPassword",
                          "then": "text",
                          "else": "password"
                        },
                        "class": "field__input",
                        "bind": "this.user_password",
                        "autocomplete": "current-password",
                        "required": true,
                        "event": {
                          "on": "input",
                          "type": "set",
                          "state": "user_password",
                          "cast": "string"
                        }
                      },
                      {
                        "element": "button",
                        "type": "button",
                        "class": "btn btn--icon btn--show-password",
                        "i18n": "showPassword",
                        "event": {
                          "on": "click",
                          "type": "set",
                          "state": "login_showPassword",
                          "value": "!this.login_showPassword"
                        }
                      }
                    ]
                  },
                  {
                    "element": "label",
                    "class": "field field--checkbox",
                    "i18n": "rememberMe",
                    "children": [
                      {
                        "element": "input",
                        "type": "checkbox",
                        "class": "field__checkbox",
                        "bind": "this.login_rememberMe",
                        "event": {
                          "on": "input",
                          "type": "set",
                          "state": "login_rememberMe",
                          "cast": "boolean"
                        }
                      }
                    ]
                  },
                  {
                    "element": "div",
                    "class": "login-form__actions",
                    "children": [
                      {
                        "element": "button",
                        "type": "submit",
                        "class": "btn btn--primary",
                        "i18n": "login",
                        "disabled": {
                          "condition": "!this.isSubmitEnabled"
                        }
                      }
                    ]
                  },
                  {
                    "element": "div",
                    "class": "login-form__links",
                    "children": [
                      {
                        "element": "button",
                        "type": "button",
                        "class": "btn btn--link",
                        "i18n": "forgotPassword",
                        "event": {
                          "on": "click",
                          "type": "method",
                          "method": "goToForgotPassword"
                        }
                      },
                      {
                        "element": "button",
                        "type": "button",
                        "class": "btn btn--link",
                        "i18n": "register",
                        "event": {
                          "on": "click",
                          "type": "method",
                          "method": "goToRegister"
                        }
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      "loading": {
        "element": "div",
        "class": "login-form__loading",
        "children": [
          {
            "element": "span",
            "class": "loading__spinner",
            "i18n": "loading"
          }
        ]
      },
      "error": {
        "element": "div",
        "class": "login-form__error",
        "children": [
          {
            "element": "span",
            "class": "error__message",
            "i18n": "error"
          },
          {
            "element": "button",
            "type": "button",
            "class": "btn btn--secondary",
            "i18n": "retry",
            "event": {
              "on": "click",
              "type": "action",
              "state": "action",
              "value": "LoginAction.SUBMIT_LOGIN"
            }
          }
        ]
      }
    }
  },
  "i18n": {
    "default": "pt",
    "languages": [
      "pt",
      "en"
    ],
    "keys": [
      "email",
      "password",
      "showPassword",
      "rememberMe",
      "login",
      "forgotPassword",
      "register",
      "loading",
      "error",
      "retry"
    ]
  }
}

export const desktopLayoutSpec = `
## Page layout
\`\`\`JSON
{ 
  "interfacePath":"_102009_/l1/pizzaria/layer_2_controller/login.js",
  "definition": [[(_102009_/l2/pizzaria/login.defs.ts).desktopLayout]]  
}
\`\`\`

##Base class
\`\`\`
  [[(_102009_/l2/pizzaria/web/shared/login.ts)]]
\`\`\`
`

export const materializeIndex = [
  {
    "id": "contract",
    "specVar": "contractSpec",
    "outputPath": "/l1/pizzaria/layer_2_controller/login.ts",
    "skillPath": "_102027_/l2/agents/skills/genContract.ts",
    "agent": "agentMaterializeContract",
    "dependsOn": [],
    "specUpdatedAt": "2026-05-06T18:34:55Z"
  },
  {
    "id": "shared",
    "specVar": "sharedSpec",
    "outputPath": "/l2/pizzaria/web/shared/login.ts",
    "skillPath": "_102027_/l2/agents/skills/genPageShared.ts",
    "agent": "agentMaterializeSharedPage",
    "dependsOn": [
      "contract"
    ],
    "specUpdatedAt": "2026-05-06T18:34:55Z"
  },
  {
    "id": "desktop",
    "specVar": "desktopLayoutSpec",
    "outputPath": "/l2/pizzaria/web/desktop/login.ts",
    "skillPath": "_102027_/l2/agents/skills/genPageRender.ts",
    "agent": "agentMaterializePageLit",
    "dependsOn": [
      "contract",
      "shared"
    ],
    "specUpdatedAt": "2026-05-06T18:34:55Z"
  }
]
