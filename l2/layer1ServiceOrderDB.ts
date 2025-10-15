/// <mls shortName="layer1ServiceOrderDB" project="102009" enhancement="_blank" />

import { ServiceOrderBase } from "./_102009_layer4ServiceOrderBase";
import { ServiceOrderData} from "./_102009_layer4ServiceOrder";

class ServiceOrder implements ServiceOrderBase {


    //--------VARIABLES-------------

    private DB_NAME = "PetshopDB";
    private VERSION = 1;
    private STORE_NAME = "service_order_data";

    //-----------METHODS----------- 


    public async upd(param: ServiceOrderData): Promise<ServiceOrderData | null> {
        return await this.saveServiceOrderData(param);
    }

    public async add(param: ServiceOrderData): Promise<ServiceOrderData | null> {
        return await this.saveServiceOrderData(param);
    }

    public async del(id: string): Promise<boolean> {
        return await this.deleteServiceOrderData(id);
    }

    public async list(): Promise<ServiceOrderData[]> {
        return await this.getAllServiceOrderData();
    }

    public async getById(id: string): Promise<ServiceOrderData | null> {
        return await this.getServiceOrderData(id);
    }

    //-----------IMPLEMENTS------------

    private openDB(): Promise<IDBDatabase> {
        return new Promise((resolve, reject) => {
            const request = indexedDB.open(this.DB_NAME, this.VERSION);

            request.onupgradeneeded = () => {
                const db = request.result;

                if (!db.objectStoreNames.contains(this.STORE_NAME)) {
                    db.createObjectStore(this.STORE_NAME, { keyPath: "id" });
                }

            };

            request.onsuccess = () => resolve(request.result);
            request.onerror = () => reject(request.error);
        });
    }

    private async saveServiceOrderData(data: ServiceOrderData): Promise<ServiceOrderData | null> {
        const db = await this.openDB();
        const tx = db.transaction(this.STORE_NAME, "readwrite");
        data.version = Date.now().toString();
        tx.objectStore(this.STORE_NAME).put(data);

        return new Promise((resolve, reject) => {
            tx.oncomplete = () => resolve(data);
            tx.onerror = () => reject(tx.error);
        });
    }


    private async getServiceOrderData(id: string): Promise<ServiceOrderData | null> {
        const db = await this.openDB();
        const tx = db.transaction(this.STORE_NAME, "readonly");
        const request = tx.objectStore(this.STORE_NAME).get(id);

        return new Promise((resolve, reject) => {
            request.onsuccess = () => resolve(request.result || null);
            request.onerror = () => reject(request.error);
        });
    }

    private async getAllServiceOrderData(): Promise<ServiceOrderData[]> {
        const db = await this.openDB();
        const tx = db.transaction(this.STORE_NAME, "readonly");
        const request = tx.objectStore(this.STORE_NAME).getAll();

        return new Promise((resolve, reject) => {
            request.onsuccess = () => resolve(request.result as ServiceOrderData[]);
            request.onerror = () => reject(request.error);
        });
    }

    private async deleteServiceOrderData(id: string): Promise<boolean> {
        const db = await this.openDB();
        const tx = db.transaction(this.STORE_NAME, "readwrite");
        tx.objectStore(this.STORE_NAME).delete(id);

        return new Promise((resolve, reject) => {
            tx.oncomplete = () => resolve(true);
            tx.onerror = () => reject(tx.error);
        });
    }


}

export const serviceOrder = new ServiceOrder();