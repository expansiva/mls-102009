/// <mls shortName="organismSimulateLogin" project="102009" folder="petshop" enhancement="_100554_enhancementLit" groupName="petshop" />
import { html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { IcaOrganismBase } from './_100554_icaOrganismBase';
import { setState } from '_100554_/l2/collabState';
import { exec } from "./_102019_layer1Exec";
import { RequestMDMGetListByType } from "./_102019_layer4ResReq";
import { MdmData, MdmType } from "./_102019_layer4Mdm";
import { mdm } from "./_102019_layer1MDMDb";

@customElement('petshop--organism-simulate-login-102009')
export class organismSimulateLogin extends IcaOrganismBase {

    @state() users: MdmData[] = [];
    @state() enterprise: MdmData[] = [];

    firstUpdated() {
        this.init();
    }

    render() {
        return html`
        <div class="form-container">
            <h2>Simular Login</h2>
            <div class="form-group">
                <label for="user-select">Selecionar Usuário</label>
                <select id="user-select">
                    ${this.users.map((user, index) => html`<option value="${index}">${(user.data.registrationData as any).name}</option>`)}
                </select>
            </div>
            <div class="form-group">
                <label for="company-select"">Selecionar Empresa</label>
                <select id="company-select"">
                ${this.enterprise.map((ent, index) => html`<option value="${index}" id="petshop--organism-simulate-login-102009-enterprise-${index}">${(ent.data.registrationData as any).corporateName}</option>`)}
                </select>
            </div>
            <div class="form-group-check">
                <input type="checkbox" id="db-check">
                <label for="db-check">Gerar DB Mdm</label>

            </div>
            <div class="form-group radio">
                <label>Tipo de Perfil</label>
                <div>
                    <input type="radio" id="admin-radio" name="profile" value="admin">
                    <label for="admin-radio">Admin</label>
                    <input type="radio" id="client-radio" name="profile" value="client">
                    <label for="client-radio">Cliente</label>
                </div>
            </div>
            <button id="petshop--organism-simulate-login-102009-22" @click="${this.handleSimulateClick}">Simular</button>
            <a id="hidden-link" style="display: none;"></a>
        </div>
`
    }
    private async init() {
        const req: RequestMDMGetListByType = {
            action: 'MDMGetListByType',
            inDeveloped: true,
            version: '1',
            params: { type: MdmType.PessoaFisica },
        };
        const responseUser = await exec(req);
        req.params.type = MdmType.PessoaJuridica;
        const responseEnterprise = await exec(req);
        if (responseUser.ok) this.users = responseUser.data;
        if (responseEnterprise.ok) this.enterprise = responseEnterprise.data;
    }

    private async handleSimulateClick() {
        const userSelect = this.querySelector('#user-select') as HTMLSelectElement;
        const dbGenerate = this.querySelector('#db-check') as HTMLInputElement;
        const companySelect = this.querySelector('#company-select') as HTMLSelectElement;
        const profileRadios = this.querySelectorAll('input[name="profile"]:checked') as NodeListOf<HTMLInputElement>;
        const selectedProfile = profileRadios.length > 0 ? profileRadios[0].value : null;
        const hiddenLink = this.querySelector('#hidden-link') as HTMLAnchorElement;

        if (dbGenerate.checked) {
            await this.importIndexedDB('MdmDatabase')
        }

        if (this.users[+userSelect.value]) setState('ui.petshop.login', this.users[+userSelect.value]);
        if (this.enterprise[+companySelect.value]) setState('ui.petshop.enterprise', this.enterprise[+companySelect.value]);


        if (selectedProfile === 'client') {
            hiddenLink.href = '/pageHome';
            hiddenLink.click();
        } else if (selectedProfile === 'admin') {
            hiddenLink.href = '/pageAdminDashboard';
            hiddenLink.click();
        }

    }

    private async importIndexedDB(dbName: string) {

        try {
            await this.clearIndexedDB(dbName);
            await mdm.openDB();
            const importData: any = database;

            const db: any = await new Promise((resolve, reject) => {
                const request = indexedDB.open(dbName);
                request.onsuccess = () => resolve(request.result);
                request.onerror = () => reject(request.error);
            });

            const storeNames = Object.keys(importData);

            for (const storeName of storeNames) {
                if (!db.objectStoreNames.contains(storeName)) {
                    console.warn(`Store "${storeName}" não existe neste banco. Pulei a importação.`);
                    continue;
                }

                const tx = db.transaction(storeName, "readwrite");
                const store = tx.objectStore(storeName);

                for (const item of importData[storeName]) {
                    store.put(item);
                }

                await new Promise((resolve, reject) => {
                    tx.oncomplete = resolve;
                    tx.onerror = reject;
                });
            }

            db.close();
        } catch (err) {
            console.info(err)
        }


    }

    private async clearIndexedDB(databaseName: string) {
        return new Promise<void>((resolve, reject) => {
            // Tenta abrir o banco
            const request = indexedDB.open(databaseName);

            let db: IDBDatabase;

            request.onsuccess = (event) => {
                db = (event.target as IDBOpenDBRequest).result;

                // Limpa todas as object stores
                const tx = db.transaction(db.objectStoreNames, 'readwrite');

                let cleared = 0;
                const totalStores = db.objectStoreNames.length;

                if (totalStores === 0) {
                    db.close();
                    resolve();
                    return;
                }

                for (const storeName of db.objectStoreNames) {
                    const store = tx.objectStore(storeName);
                    const clearRequest = store.clear();

                    clearRequest.onsuccess = () => {
                        cleared++;
                        if (cleared === totalStores) {
                            db.close();
                            resolve();
                        }
                    };

                    clearRequest.onerror = (err) => {
                        console.error(`Erro ao limpar store ${storeName}`, err);
                        reject(err);
                    };
                }
            };

            // Caso o banco não exista
            request.onerror = () => {
                console.warn(`Banco ${databaseName} não existe ou não pôde ser aberto.`);
                reject(request.error);
            };

            // Se o banco não existir, o evento onupgradeneeded será chamado
            request.onupgradeneeded = () => {
                // Isso significa que o banco não existia antes
                console.warn(`Banco ${databaseName} não existia.`);
                request.transaction?.abort();
                resolve();
            };
        });
    }
}


let database = {
    "mdm_data": [
        {
            "data": {
                "registrationData": {
                    "cpf": "43265194876",
                    "name": "Guilherme Pereira",
                    "rg": "45.663.683",
                    "birthDate": "1995-05-09",
                    "gender": "M"
                },
                "type": 10,
                "status": "A",
                "relationships": [
                    {
                        "type": "R_PF_OWNER_OF_PET",
                        "relatedMdmId": 9,
                        "details": "",
                        "additionalRelationshipData": ""
                    },
                    {
                        "type": "R_PF_OWNER_OF_PET",
                        "relatedMdmId": 10,
                        "details": "",
                        "additionalRelationshipData": ""
                    }
                ],
                "attachments": [
                    {
                        "type": 1,
                        "uploadDate": "2025-10-16T19:42:11.364Z",
                        "url": "https://lh3.googleusercontent.com/a-/AOh14GjhEPN7UazL97l6qFIRIYUoLY-PNNPC93Zw4EVT=s96-c",
                        "description": ""
                    }
                ],
                "contactData": {
                    "phone": [
                        {
                            "number": "16994532339",
                            "type": "Celular"
                        }
                    ],
                    "email": "guipereiraa0905@gmail.com"
                },
                "addresses": [
                    {
                        "type": 2,
                        "description": "",
                        "street": "Avenida Geralda Rocha Silva",
                        "number": "2600",
                        "neighborhood": "Parque Vicente Leporace I",
                        "complement": "",
                        "city": "Franca",
                        "stateProvince": "SP",
                        "zipCode": "14407-032",
                        "country": "BR",
                        "latitude": "",
                        "longitude": ""
                    }
                ]
            },
            "version": "1760643775068",
            "id": 1
        },
        {
            "data": {
                "registrationData": {
                    "cpf": "58208533009",
                    "name": "Guilherme Santiago",
                    "birthDate": "1994-01-09",
                    "gender": "M"
                },
                "type": 10,
                "status": "A",
                "relationships": [
                    {
                        "type": "R_PF_OWNER_OF_PET",
                        "relatedMdmId": 11,
                        "details": "",
                        "additionalRelationshipData": ""
                    },
                    {
                        "type": "R_PF_OWNER_OF_PET",
                        "relatedMdmId": 12,
                        "details": "",
                        "additionalRelationshipData": ""
                    }
                ],
                "attachments": [
                    {
                        "type": 1,
                        "uploadDate": "2025-10-16T19:43:18.467Z",
                        "url": "https://images.unsplash.com/photo-1651684215020-f7a5b6610f23?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1169",
                        "description": ""
                    }
                ],
                "addresses": [
                    {
                        "type": 2,
                        "description": "",
                        "street": "Rua Couto Magalhães",
                        "number": "234",
                        "neighborhood": "Centro",
                        "complement": "até 2749/2750",
                        "city": "Franca",
                        "stateProvince": "SP",
                        "zipCode": "14400-020",
                        "country": "BR",
                        "latitude": "",
                        "longitude": ""
                    }
                ]
            },
            "version": "1760644675644",
            "id": 2
        },
        {
            "data": {
                "registrationData": {
                    "cpf": "42214306056",
                    "name": "Lucas Mafra",
                    "birthDate": "1989-12-23",
                    "gender": "M"
                },
                "type": 10,
                "status": "A",
                "relationships": [
                    {
                        "type": "R_PF_OWNER_OF_PET",
                        "relatedMdmId": 13,
                        "details": "",
                        "additionalRelationshipData": ""
                    },
                    {
                        "type": "R_PF_OWNER_OF_PET",
                        "relatedMdmId": 14,
                        "details": "",
                        "additionalRelationshipData": ""
                    }
                ],
                "attachments": [
                    {
                        "type": 1,
                        "uploadDate": "2025-10-16T19:43:32.131Z",
                        "url": "https://images.unsplash.com/photo-1584999734482-0361aecad844?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=880",
                        "description": ""
                    }
                ],
                "addresses": [
                    {
                        "type": 2,
                        "description": "",
                        "street": "Rua Paraguai",
                        "number": "2345",
                        "neighborhood": "Jardim Consolação",
                        "complement": "",
                        "city": "Franca",
                        "stateProvince": "SP",
                        "zipCode": "14400-030",
                        "country": "BR",
                        "latitude": "",
                        "longitude": ""
                    }
                ]
            },
            "version": "1760644709107",
            "id": 3
        },
        {
            "data": {
                "registrationData": {
                    "cpf": "80196597064",
                    "name": "Gilberto Pereira",
                    "birthDate": "1998-09-12",
                    "gender": "M"
                },
                "type": 10,
                "status": "A",
                "relationships": [
                    {
                        "type": "R_PF_OWNER_OF_PET",
                        "relatedMdmId": 15,
                        "details": "",
                        "additionalRelationshipData": ""
                    },
                    {
                        "type": "R_PF_OWNER_OF_PET",
                        "relatedMdmId": 16,
                        "details": "",
                        "additionalRelationshipData": ""
                    }
                ],
                "attachments": [
                    {
                        "type": 1,
                        "uploadDate": "2025-10-16T19:43:46.669Z",
                        "url": "https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
                        "description": ""
                    }
                ],
                "addresses": [
                    {
                        "type": 2,
                        "description": "",
                        "street": "Rua Chile",
                        "number": "135",
                        "neighborhood": "Jardim Consolação",
                        "complement": "",
                        "city": "Franca",
                        "stateProvince": "SP",
                        "zipCode": "14400-110",
                        "country": "BR",
                        "latitude": "",
                        "longitude": ""
                    }
                ]
            },
            "version": "1760644745470",
            "id": 4
        },
        {
            "data": {
                "registrationData": {
                    "cpf": "89375309029",
                    "name": "Roberius",
                    "birthDate": "1967-09-11",
                    "gender": "M"
                },
                "type": 10,
                "status": "A",
                "relationships": [
                    {
                        "type": "R_PF_OWNER_OF_PET",
                        "relatedMdmId": 17,
                        "details": "",
                        "additionalRelationshipData": ""
                    },
                    {
                        "type": "R_PF_EMPLOYEE",
                        "relatedMdmId": 7,
                        "details": "",
                        "additionalRelationshipData": ""
                    },
                    {
                        "type": "R_PF_PROVIDES_SERVICE",
                        "relatedMdmId": 29,
                        "details": "",
                        "additionalRelationshipData": ""
                    },
                    {
                        "type": "R_PF_PROVIDES_SERVICE",
                        "relatedMdmId": 30,
                        "details": "",
                        "additionalRelationshipData": ""
                    },
                    {
                        "type": "R_PF_PROVIDES_SERVICE",
                        "relatedMdmId": 31,
                        "details": "",
                        "additionalRelationshipData": ""
                    },
                    {
                        "type": "R_PF_PROVIDES_SERVICE",
                        "relatedMdmId": 32,
                        "details": "",
                        "additionalRelationshipData": ""
                    },
                    {
                        "type": "R_PF_PROVIDES_SERVICE",
                        "relatedMdmId": 33,
                        "details": "",
                        "additionalRelationshipData": ""
                    }
                ],
                "attachments": [
                    {
                        "type": 1,
                        "uploadDate": "2025-10-16T19:44:08.355Z",
                        "url": "https://images.unsplash.com/photo-1513152697235-fe74c283646a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1248",
                        "description": ""
                    }
                ],
                "addresses": [
                    {
                        "type": 2,
                        "description": "",
                        "street": "Vila Peixe",
                        "number": "143",
                        "neighborhood": "Centro",
                        "complement": "",
                        "city": "Franca",
                        "stateProvince": "SP",
                        "zipCode": "14400-029",
                        "country": "BR",
                        "latitude": "",
                        "longitude": ""
                    }
                ]
            },
            "version": "1760644781384",
            "id": 5
        },
        {
            "data": {
                "registrationData": {
                    "cpf": "14116399019",
                    "name": "Maria Beatriz",
                    "birthDate": "1999-06-09",
                    "gender": "F"
                },
                "type": 10,
                "status": "A",
                "relationships": [
                    {
                        "type": "R_PF_OWNER_OF_PET",
                        "relatedMdmId": 18,
                        "details": "",
                        "additionalRelationshipData": ""
                    },
                    {
                        "type": "R_PF_EMPLOYEE",
                        "relatedMdmId": 7,
                        "details": "",
                        "additionalRelationshipData": ""
                    },
                    {
                        "type": "R_PF_PROVIDES_SERVICE",
                        "relatedMdmId": 34,
                        "details": "",
                        "additionalRelationshipData": ""
                    },
                    {
                        "type": "R_PF_PROVIDES_SERVICE",
                        "relatedMdmId": 35,
                        "details": "",
                        "additionalRelationshipData": ""
                    },
                    {
                        "type": "R_PF_PROVIDES_SERVICE",
                        "relatedMdmId": 36,
                        "details": "",
                        "additionalRelationshipData": ""
                    },
                    {
                        "type": "R_PF_PROVIDES_SERVICE",
                        "relatedMdmId": 37,
                        "details": "",
                        "additionalRelationshipData": ""
                    },
                    {
                        "type": "R_PF_PROVIDES_SERVICE",
                        "relatedMdmId": 38,
                        "details": "",
                        "additionalRelationshipData": ""
                    }
                ],
                "attachments": [
                    {
                        "type": 1,
                        "uploadDate": "2025-10-16T19:44:28.345Z",
                        "url": "https://plus.unsplash.com/premium_photo-1690407617686-d449aa2aad3c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
                        "description": ""
                    }
                ],
                "addresses": [
                    {
                        "type": 2,
                        "description": "",
                        "street": "Rua Franklin Martins",
                        "number": "1223",
                        "neighborhood": "Vila Champagnat",
                        "complement": "",
                        "city": "Franca",
                        "stateProvince": "SP",
                        "zipCode": "14400-210",
                        "country": "BR",
                        "latitude": "",
                        "longitude": ""
                    }
                ]
            },
            "version": "1760644821816",
            "id": 6
        },
        {
            "data": {
                "registrationData": {
                    "cnpj": "31649763000191",
                    "corporateName": "PetLove LTDA",
                    "fantasyName": "PetLove Comércio de Produtos para Animais LTDA"
                },
                "type": 11,
                "status": "A",
                "relationships": [
                    {
                        "type": "R_PJ_EMPLOYER",
                        "relatedMdmId": 5,
                        "details": "",
                        "additionalRelationshipData": ""
                    },
                    {
                        "type": "R_PJ_EMPLOYER",
                        "relatedMdmId": 6,
                        "details": "",
                        "additionalRelationshipData": ""
                    }
                ],
                "addresses": [
                    {
                        "type": 2,
                        "description": "",
                        "street": "Rua Canadá",
                        "number": "",
                        "neighborhood": "Jardim São Vicente",
                        "complement": "até 1358/1359",
                        "city": "Franca",
                        "stateProvince": "SP",
                        "zipCode": "14400-265",
                        "country": "BR",
                        "latitude": "",
                        "longitude": ""
                    }
                ],
                "socialMedia": {
                    "instagram": "instagram.com/petlove",
                    "site": "www.petlove.com.br"
                },
                "contactData": {
                    "phone": [
                        {
                            "number": "16997653423",
                            "type": "Comercial"
                        }
                    ],
                    "email": "petlove@gmail.com"
                },
                "attachments": [
                    {
                        "type": 1,
                        "uploadDate": "2025-10-16T20:03:26.877Z",
                        "url": "https://e3ba6e8732e83984.cdn.gocache.net/uploads/image/file/514623/regular_12079039-1009545759108616-5272982253262459455-n.png",
                        "description": ""
                    }
                ]
            },
            "version": "1760645006887",
            "id": 7
        },
        {
            "data": {
                "registrationData": {
                    "cnpj": "75095916000171",
                    "corporateName": "Bicho Feliz Comércio de Animais e Acessórios LTDA",
                    "fantasyName": "Bicho Feliz Pet Shop"
                },
                "type": 11,
                "status": "A",
                "addresses": [
                    {
                        "type": 2,
                        "description": "",
                        "street": "Rua Franklin Martins",
                        "number": "23",
                        "neighborhood": "Vila Champagnat",
                        "complement": "",
                        "city": "Franca",
                        "stateProvince": "SP",
                        "zipCode": "14400-210",
                        "country": "BR",
                        "latitude": "",
                        "longitude": ""
                    }
                ],
                "socialMedia": {
                    "site": "www.bichofeliz.com"
                },
                "contactData": {
                    "phone": [
                        {
                            "number": "16998764532",
                            "type": "Comercial"
                        }
                    ],
                    "email": "bichofeliz@gmail.com"
                },
                "attachments": [
                    {
                        "type": 1,
                        "uploadDate": "2025-10-16T20:02:57.580Z",
                        "url": "https://crasc.org.br/wp-content/uploads/2021/06/PET-STYLEPETSHOP.JPG.jpg",
                        "description": ""
                    }
                ]
            },
            "version": "1760644977593",
            "id": 8
        },
        {
            "data": {
                "registrationData": {
                    "name": "Rex",
                    "species": "Cão",
                    "breed": "Labrador Retriever"
                },
                "type": 12,
                "status": "A",
                "relationships": [
                    {
                        "type": "R_PET_OWNED_BY",
                        "relatedMdmId": 1,
                        "details": "",
                        "additionalRelationshipData": ""
                    }
                ],
                "attachments": [
                    {
                        "type": 1,
                        "uploadDate": "2025-10-16T19:45:12.321Z",
                        "url": "https://plus.unsplash.com/premium_photo-1683134036144-82b0a3d50f11?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
                        "description": ""
                    }
                ]
            },
            "version": "1760643912338",
            "id": 9
        },
        {
            "data": {
                "registrationData": {
                    "name": "Mimi",
                    "species": "Gato",
                    "breed": "Persa"
                },
                "type": 12,
                "status": "A",
                "relationships": [
                    {
                        "type": "R_PET_OWNED_BY",
                        "relatedMdmId": 1,
                        "details": "",
                        "additionalRelationshipData": ""
                    }
                ],
                "attachments": [
                    {
                        "type": 1,
                        "uploadDate": "2025-10-16T19:45:34.005Z",
                        "url": "https://images.unsplash.com/photo-1585137173132-cf49e10ad27d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=686",
                        "description": ""
                    }
                ]
            },
            "version": "1760643934013",
            "id": 10
        },
        {
            "data": {
                "registrationData": {
                    "name": "Thor",
                    "species": "Cão",
                    "breed": "Husky Siberiano"
                },
                "type": 12,
                "status": "A",
                "relationships": [
                    {
                        "type": "R_PET_OWNED_BY",
                        "relatedMdmId": 2,
                        "details": "",
                        "additionalRelationshipData": ""
                    }
                ],
                "attachments": [
                    {
                        "type": 1,
                        "uploadDate": "2025-10-16T19:45:52.880Z",
                        "url": "https://plus.unsplash.com/premium_photo-1668208363137-7ebc4ce6b7b7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
                        "description": ""
                    }
                ]
            },
            "version": "1760643952887",
            "id": 11
        },
        {
            "data": {
                "registrationData": {
                    "name": "Luna",
                    "species": "Gato",
                    "breed": "Siamês"
                },
                "type": 12,
                "status": "A",
                "relationships": [
                    {
                        "type": "R_PET_OWNED_BY",
                        "relatedMdmId": 2,
                        "details": "",
                        "additionalRelationshipData": ""
                    }
                ],
                "attachments": [
                    {
                        "type": 1,
                        "uploadDate": "2025-10-16T19:46:11.588Z",
                        "url": "https://images.unsplash.com/photo-1568152950566-c1bf43f4ab28?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=765",
                        "description": ""
                    }
                ]
            },
            "version": "1760643971594",
            "id": 12
        },
        {
            "data": {
                "registrationData": {
                    "name": "Nina",
                    "species": "Cão",
                    "breed": "Shih Tzu"
                },
                "type": 12,
                "status": "A",
                "relationships": [
                    {
                        "type": "R_PET_OWNED_BY",
                        "relatedMdmId": 3,
                        "details": "",
                        "additionalRelationshipData": ""
                    }
                ],
                "attachments": [
                    {
                        "type": 1,
                        "uploadDate": "2025-10-16T19:46:30.127Z",
                        "url": "https://images.unsplash.com/photo-1534628526458-a8de087b1123?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
                        "description": ""
                    }
                ]
            },
            "version": "1760643990134",
            "id": 13
        },
        {
            "data": {
                "registrationData": {
                    "name": "Toby",
                    "species": "Cão",
                    "breed": "Golden Retriever"
                },
                "type": 12,
                "status": "A",
                "relationships": [
                    {
                        "type": "R_PET_OWNED_BY",
                        "relatedMdmId": 3,
                        "details": "",
                        "additionalRelationshipData": ""
                    }
                ],
                "attachments": [
                    {
                        "type": 1,
                        "uploadDate": "2025-10-16T19:46:53.893Z",
                        "url": "https://plus.unsplash.com/premium_photo-1694819488591-a43907d1c5cc?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=714",
                        "description": ""
                    }
                ]
            },
            "version": "1760644013897",
            "id": 14
        },
        {
            "data": {
                "registrationData": {
                    "name": "Mel",
                    "species": "Gato",
                    "breed": "SRD"
                },
                "type": 12,
                "status": "A",
                "relationships": [
                    {
                        "type": "R_PET_OWNED_BY",
                        "relatedMdmId": 4,
                        "details": "",
                        "additionalRelationshipData": ""
                    }
                ],
                "attachments": [
                    {
                        "type": 1,
                        "uploadDate": "2025-10-16T19:47:14.773Z",
                        "url": "https://plus.unsplash.com/premium_photo-1667030474693-6d0632f97029?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
                        "description": ""
                    }
                ]
            },
            "version": "1760644034785",
            "id": 15
        },
        {
            "data": {
                "registrationData": {
                    "name": "Zeca",
                    "species": "Ave",
                    "breed": "Calopsita"
                },
                "type": 12,
                "status": "A",
                "relationships": [
                    {
                        "type": "R_PET_OWNED_BY",
                        "relatedMdmId": 4,
                        "details": "",
                        "additionalRelationshipData": ""
                    }
                ],
                "attachments": [
                    {
                        "type": 1,
                        "uploadDate": "2025-10-16T19:47:33.217Z",
                        "url": "https://images.unsplash.com/photo-1517101724602-c257fe568157?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1112",
                        "description": ""
                    }
                ]
            },
            "version": "1760644053225",
            "id": 16
        },
        {
            "data": {
                "registrationData": {
                    "name": "Bob",
                    "species": "Cão",
                    "breed": "Bulldog Francês"
                },
                "type": 12,
                "status": "A",
                "relationships": [
                    {
                        "type": "R_PET_OWNED_BY",
                        "relatedMdmId": 5,
                        "details": "",
                        "additionalRelationshipData": ""
                    }
                ],
                "attachments": [
                    {
                        "type": 1,
                        "uploadDate": "2025-10-16T19:47:52.235Z",
                        "url": "https://plus.unsplash.com/premium_photo-1661962699932-1948aa1dde16?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1169",
                        "description": ""
                    }
                ]
            },
            "version": "1760644072249",
            "id": 17
        },
        {
            "data": {
                "registrationData": {
                    "name": "Pipoca",
                    "species": "Roedor",
                    "breed": "Hamster Sírio"
                },
                "type": 12,
                "status": "A",
                "relationships": [
                    {
                        "type": "R_PET_OWNED_BY",
                        "relatedMdmId": 6,
                        "details": "",
                        "additionalRelationshipData": ""
                    }
                ],
                "attachments": [
                    {
                        "type": 1,
                        "uploadDate": "2025-10-16T19:48:29.463Z",
                        "url": "https://plus.unsplash.com/premium_photo-1723541849364-fd6ce91ff283?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1112",
                        "description": ""
                    }
                ]
            },
            "version": "1760644109480",
            "id": 18
        },
        {
            "data": {
                "registrationData": {
                    "name": "Ração Premium Cães Adultos 15kg",
                    "descriptionShort": "Ração balanceada para cães adultos de médio e grande porte."
                },
                "type": 17,
                "status": "A",
                "attachments": [
                    {
                        "type": 1,
                        "uploadDate": "2025-10-16T19:49:02.323Z",
                        "url": "https://m.media-amazon.com/images/I/81Hwul2dlTL._AC_SY300_SX300_QL70_ML2_.jpg",
                        "description": ""
                    }
                ]
            },
            "version": "1760644142326",
            "id": 19
        },
        {
            "data": {
                "registrationData": {
                    "name": "Areia Sanitária Granulada 4kg",
                    "descriptionShort": "Areia higiênica com alta absorção e controle de odor para gatos."
                },
                "type": 17,
                "status": "A",
                "attachments": [
                    {
                        "type": 1,
                        "uploadDate": "2025-10-16T19:49:33.088Z",
                        "url": "https://m.media-amazon.com/images/I/81YZeTZ0iyS._AC_SY300_SX300_QL70_ML2_.jpg",
                        "description": ""
                    }
                ]
            },
            "version": "1760644173104",
            "id": 20
        },
        {
            "data": {
                "registrationData": {
                    "name": "Coleira Antipulgas e Carrapatos",
                    "descriptionShort": "Proteção de até 8 meses contra pulgas e carrapatos."
                },
                "type": 17,
                "status": "A",
                "attachments": [
                    {
                        "type": 1,
                        "uploadDate": "2025-10-16T19:49:55.767Z",
                        "url": "https://m.media-amazon.com/images/I/61MjDg-SK1L._AC_SX300_SY300_QL70_ML2_.jpg",
                        "description": ""
                    }
                ]
            },
            "version": "1760644195779",
            "id": 21
        },
        {
            "data": {
                "registrationData": {
                    "name": "Brinquedo Mordedor de Borracha",
                    "descriptionShort": "Mordedor resistente e atóxico para cães de todos os portes."
                },
                "type": 17,
                "status": "A",
                "attachments": [
                    {
                        "type": 1,
                        "uploadDate": "2025-10-16T19:50:14.597Z",
                        "url": "https://m.media-amazon.com/images/I/41eieSCU53L._AC_SY300_SX300_QL70_ML2_.jpg",
                        "description": ""
                    }
                ]
            },
            "version": "1760644214603",
            "id": 22
        },
        {
            "data": {
                "registrationData": {
                    "name": "Shampoo Neutro para Cães e Gatos 500ml",
                    "descriptionShort": "Limpeza suave e fragrância agradável para pelagens sensíveis."
                },
                "type": 17,
                "status": "A",
                "attachments": [
                    {
                        "type": 1,
                        "uploadDate": "2025-10-16T19:50:36.540Z",
                        "url": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSLSoR00cXmT-3fSfTZyUShb3N5XlvH90dPvUhus9uEZQ9KEGLfzNWqm5eKW86r7fJy0Cg5kuvnAP1bvUPn7S5YFDsBzcXEFW8-6P433Pr4YoeehM4a8OnE96s",
                        "description": ""
                    }
                ]
            },
            "version": "1760644236544",
            "id": 23
        },
        {
            "data": {
                "registrationData": {
                    "name": "Caminha Acolchoada Pet Média",
                    "descriptionShort": "Cama macia e lavável, ideal para cães e gatos de porte médio."
                },
                "type": 17,
                "status": "A",
                "attachments": [
                    {
                        "type": 1,
                        "uploadDate": "2025-10-16T19:50:57.293Z",
                        "url": "https://m.media-amazon.com/images/I/61-N38IRFYL._AC_SY300_SX300_QL70_ML2_.jpg",
                        "description": ""
                    }
                ]
            },
            "version": "1760644257303",
            "id": 24
        },
        {
            "data": {
                "registrationData": {
                    "name": "Coleira com Guia Refletiva",
                    "descriptionShort": "Coleira ajustável com guia resistente e fita refletiva para passeios noturnos."
                },
                "type": 17,
                "status": "A",
                "attachments": [
                    {
                        "type": 1,
                        "uploadDate": "2025-10-16T19:51:23.918Z",
                        "url": "https://cdn.dooca.store/2372/products/ray-2025-101_620x620+fill_ffffff.jpg?v=1746555621",
                        "description": ""
                    }
                ]
            },
            "version": "1760644283929",
            "id": 25
        },
        {
            "data": {
                "registrationData": {
                    "name": "Comedouro e Bebedouro Duplo Inox",
                    "descriptionShort": "Tigela dupla em aço inoxidável com suporte antiderrapante."
                },
                "type": 17,
                "status": "A",
                "attachments": [
                    {
                        "type": 1,
                        "uploadDate": "2025-10-16T19:51:46.812Z",
                        "url": "https://m.media-amazon.com/images/I/51PZo+WN+SL._AC_SY300_SX300_QL70_ML2_.jpg",
                        "description": ""
                    }
                ]
            },
            "version": "1760644306821",
            "id": 26
        },
        {
            "data": {
                "registrationData": {
                    "name": "Petisco Natural de Frango 80g",
                    "descriptionShort": "Snack saudável e sem corantes artificiais, feito com frango desidratado."
                },
                "type": 17,
                "status": "A",
                "attachments": [
                    {
                        "type": 1,
                        "uploadDate": "2025-10-16T19:52:06.701Z",
                        "url": "https://m.media-amazon.com/images/I/71vl+YF63pL._AC_SY300_SX300_QL70_ML2_.jpg",
                        "description": ""
                    }
                ]
            },
            "version": "1760644326712",
            "id": 27
        },
        {
            "data": {
                "registrationData": {
                    "name": "Casa Plástica Pet Pequena",
                    "descriptionShort": "Abrigo leve, ventilado e fácil de limpar para cães e gatos de pequeno porte."
                },
                "type": 17,
                "status": "A",
                "attachments": [
                    {
                        "type": 1,
                        "uploadDate": "2025-10-16T19:52:37.511Z",
                        "url": "https://m.media-amazon.com/images/I/51D8pWresaL._AC_SY300_SX300_QL70_ML2_.jpg",
                        "description": ""
                    }
                ]
            },
            "version": "1760644357524",
            "id": 28
        },
        {
            "data": {
                "registrationData": {
                    "name": "Banho Completo",
                    "descriptionShort": "Banho com shampoo neutro, secagem e perfume suave.",
                    "serviceCode": "SRV001"
                },
                "type": 18,
                "status": "A",
                "relationships": [
                    {
                        "type": "R_SERV_PF_PROVIDED_BY",
                        "relatedMdmId": 5,
                        "details": "",
                        "additionalRelationshipData": ""
                    }
                ],
                "attachments": [
                    {
                        "type": 1,
                        "uploadDate": "2025-10-16T19:53:10.137Z",
                        "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK9-OE8vh7feOVDRE1g9YqzLIZqmXV1jejiA&s",
                        "description": ""
                    }
                ]
            },
            "version": "1760644390153",
            "id": 29
        },
        {
            "data": {
                "registrationData": {
                    "name": "Tosa Higiênica",
                    "descriptionShort": "Tosa leve em regiões íntimas e patas, mantendo o conforto do pet.",
                    "serviceCode": "SRV002"
                },
                "type": 18,
                "status": "A",
                "relationships": [
                    {
                        "type": "R_SERV_PF_PROVIDED_BY",
                        "relatedMdmId": 5,
                        "details": "",
                        "additionalRelationshipData": ""
                    }
                ],
                "attachments": [
                    {
                        "type": 1,
                        "uploadDate": "2025-10-16T19:53:33.277Z",
                        "url": "https://jpimg.com.br/uploads/2024/01/veja-a-importancia-da-tosa-higienica-para-cachorros.jpg",
                        "description": ""
                    }
                ]
            },
            "version": "1760644413280",
            "id": 30
        },
        {
            "data": {
                "registrationData": {
                    "name": "Tosa Completa",
                    "descriptionShort": "Tosa completa conforme o padrão da raça ou preferência do tutor.",
                    "serviceCode": "SRV003"
                },
                "type": 18,
                "status": "A",
                "relationships": [
                    {
                        "type": "R_SERV_PF_PROVIDED_BY",
                        "relatedMdmId": 5,
                        "details": "",
                        "additionalRelationshipData": ""
                    }
                ],
                "attachments": [
                    {
                        "type": 1,
                        "uploadDate": "2025-10-16T19:53:55.760Z",
                        "url": "https://blog.ciclic.com.br/wp-content/uploads/2022/11/yorkshire-terrier-getting-procedure-groomer-salon-young-woman-white-tshirt-trimming-little-dog-yorkshire-terrier-puppy-getting-haircut-with-shaving-machine-scaled.jpg",
                        "description": ""
                    }
                ]
            },
            "version": "1760644435770",
            "id": 31
        },
        {
            "data": {
                "registrationData": {
                    "name": "Hidratação de Pelagem",
                    "descriptionShort": "Tratamento com produtos específicos para brilho e maciez dos pelos.",
                    "serviceCode": "SRV004"
                },
                "type": 18,
                "status": "A",
                "relationships": [
                    {
                        "type": "R_SERV_PF_PROVIDED_BY",
                        "relatedMdmId": 5,
                        "details": "",
                        "additionalRelationshipData": ""
                    }
                ],
                "attachments": [
                    {
                        "type": 1,
                        "uploadDate": "2025-10-16T19:54:20.473Z",
                        "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYnkQ2JDQ0ryHIsDO0khOinnGWLYW7UG946Q&s",
                        "description": ""
                    }
                ]
            },
            "version": "1760644460480",
            "id": 32
        },
        {
            "data": {
                "registrationData": {
                    "name": "Corte de Unhas",
                    "descriptionShort": "Corte seguro de unhas para cães e gatos, com ferramentas esterilizadas.",
                    "serviceCode": "SRV005"
                },
                "type": 18,
                "status": "A",
                "relationships": [
                    {
                        "type": "R_SERV_PF_PROVIDED_BY",
                        "relatedMdmId": 5,
                        "details": "",
                        "additionalRelationshipData": ""
                    }
                ],
                "attachments": [
                    {
                        "type": 1,
                        "uploadDate": "2025-10-16T19:54:40.479Z",
                        "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ_sJVKqT-GEwh0Ea695NDTAUP2icDNSkIbA&s",
                        "description": ""
                    }
                ]
            },
            "version": "1760644480487",
            "id": 33
        },
        {
            "data": {
                "registrationData": {
                    "name": "Limpeza de Ouvidos",
                    "descriptionShort": "Higienização com produtos específicos para evitar infecções auriculares.",
                    "serviceCode": "SRV006"
                },
                "type": 18,
                "status": "A",
                "relationships": [
                    {
                        "type": "R_SERV_PF_PROVIDED_BY",
                        "relatedMdmId": 6,
                        "details": "",
                        "additionalRelationshipData": ""
                    }
                ],
                "attachments": [
                    {
                        "type": 1,
                        "uploadDate": "2025-10-16T19:55:04.344Z",
                        "url": "https://www.patasdacasa.com.br/sites/default/files/noticias/2020/07/como-funciona-o-produto-para-limpar-ouvido-de-cachorro.jpg",
                        "description": ""
                    }
                ]
            },
            "version": "1760644504347",
            "id": 34
        },
        {
            "data": {
                "registrationData": {
                    "name": "Consulta Veterinária",
                    "descriptionShort": "Atendimento clínico completo com veterinário parceiro do petshop.",
                    "serviceCode": "SRV007"
                },
                "type": 18,
                "status": "A",
                "relationships": [
                    {
                        "type": "R_SERV_PF_PROVIDED_BY",
                        "relatedMdmId": 6,
                        "details": "",
                        "additionalRelationshipData": ""
                    }
                ],
                "attachments": [
                    {
                        "type": 1,
                        "uploadDate": "2025-10-16T19:55:25.969Z",
                        "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjioBj54zQTScBgfb2Qj_RJh5sjkV2Gqm1Tg&s",
                        "description": ""
                    }
                ]
            },
            "version": "1760644525972",
            "id": 35
        },
        {
            "data": {
                "registrationData": {
                    "name": "Banho Medicamentoso",
                    "descriptionShort": "Banho terapêutico com produtos prescritos pelo veterinário.",
                    "serviceCode": "SRV008"
                },
                "type": 18,
                "status": "A",
                "relationships": [
                    {
                        "type": "R_SERV_PF_PROVIDED_BY",
                        "relatedMdmId": 6,
                        "details": "",
                        "additionalRelationshipData": ""
                    }
                ],
                "attachments": [
                    {
                        "type": 1,
                        "uploadDate": "2025-10-16T19:55:50.630Z",
                        "url": "https://www.reabilitacaoveterinaria.com.br/imagens/categorias/banho-terapeutico-06.webp",
                        "description": ""
                    }
                ]
            },
            "version": "1760644550648",
            "id": 36
        },
        {
            "data": {
                "registrationData": {
                    "name": "Hospedagem Pet",
                    "descriptionShort": "Serviço de hotelzinho com monitoramento e alimentação incluída.",
                    "serviceCode": "SRV009"
                },
                "type": 18,
                "status": "A",
                "relationships": [
                    {
                        "type": "R_SERV_PF_PROVIDED_BY",
                        "relatedMdmId": 6,
                        "details": "",
                        "additionalRelationshipData": ""
                    }
                ],
                "attachments": [
                    {
                        "type": 1,
                        "uploadDate": "2025-10-16T19:56:16.912Z",
                        "url": "https://s2-oglobo.glbimg.com/5_pGvFu0fNt7RWKRjwQOe5jA_Yk=/0x0:3600x2400/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_da025474c0c44edd99332dddb09cabe8/internal_photos/bs/2023/s/B/hzPjArR5mwNuNAnfBaOQ/pet-friendly-hotels-4-0.jpg",
                        "description": ""
                    }
                ]
            },
            "version": "1760644576924",
            "id": 37
        },
        {
            "data": {
                "registrationData": {
                    "name": "Adestramento Básico",
                    "descriptionShort": "Treinamento comportamental inicial com reforço positivo.",
                    "serviceCode": "SRV010"
                },
                "type": 18,
                "status": "A",
                "relationships": [
                    {
                        "type": "R_SERV_PF_PROVIDED_BY",
                        "relatedMdmId": 6,
                        "details": "",
                        "additionalRelationshipData": ""
                    }
                ],
                "attachments": [
                    {
                        "type": 1,
                        "uploadDate": "2025-10-16T19:56:39.849Z",
                        "url": "https://www.petz.com.br/blog/wp-content/uploads/2021/05/tipos-de-adestramento-2.jpg",
                        "description": ""
                    }
                ]
            },
            "version": "1760644599866",
            "id": 38
        }
    ]
}