/// <mls shortName="layer1ServiceOrderDB" project="102009" enhancement="_blank" />

import { ServiceOrderBase } from "./_102009_layer4ServiceOrderBase";
import { ServiceOrderData } from "./_102009_layer4ServiceOrder";
import {  STORE_NAME_SERVICEORDER, openDB } from "./_102009_layer1IndexedDb";

class ServiceOrder implements ServiceOrderBase {

    //-----------METHODS----------- 


    public async upd(param: ServiceOrderData): Promise<ServiceOrderData | null> {
        return await this.saveServiceOrderData(param);
    }

    public async add(param: ServiceOrderData): Promise<ServiceOrderData | null> {
        return await this.saveServiceOrderData(param);
    }

    public async del(id: number): Promise<boolean> {
        return await this.deleteServiceOrderData(id);
    }

    public async list(): Promise<ServiceOrderData[]> {
        return await this.getAllServiceOrderData();
    }

    public async getById(id: number): Promise<ServiceOrderData | null> {
        return await this.getServiceOrderData(id);
    }

    //-----------IMPLEMENTS------------

    private async saveServiceOrderData(data: ServiceOrderData): Promise<ServiceOrderData | null> {
        const db = await openDB();
        const tx = db.transaction(STORE_NAME_SERVICEORDER, "readwrite");
        const store = tx.objectStore(STORE_NAME_SERVICEORDER);

        data.version = Date.now().toString();

        return new Promise((resolve, reject) => {
            let request: IDBRequest<IDBValidKey>;

            if (!data.id) {
                request = store.add(data);
            } else {
                request = store.put(data);
            }

            request.onsuccess = (event) => {
                const newId = (event.target as IDBRequest<IDBValidKey>).result;
                if (!data.id) {
                    data.id = newId as any;
                }
            };

            tx.oncomplete = () => resolve(data);
            tx.onerror = () => reject(tx.error);
        });
    }


    private async getServiceOrderData(id: number): Promise<ServiceOrderData | null> {
        const db = await openDB();
        const tx = db.transaction(STORE_NAME_SERVICEORDER, "readonly");
        const request = tx.objectStore(STORE_NAME_SERVICEORDER).get(id);

        return new Promise((resolve, reject) => {
            request.onsuccess = () => resolve(request.result || null);
            request.onerror = () => reject(request.error);
        });
    }

    private async getAllServiceOrderData(): Promise<ServiceOrderData[]> {
        const db = await openDB();
        const tx = db.transaction(STORE_NAME_SERVICEORDER, "readonly");
        const request = tx.objectStore(STORE_NAME_SERVICEORDER).getAll();

        return new Promise((resolve, reject) => {
            request.onsuccess = () => resolve(request.result as ServiceOrderData[]);
            request.onerror = () => reject(request.error);
        });
    }

    private async deleteServiceOrderData(id: number): Promise<boolean> {
        const db = await openDB();
        const tx = db.transaction(STORE_NAME_SERVICEORDER, "readwrite");
        tx.objectStore(STORE_NAME_SERVICEORDER).delete(id);

        return new Promise((resolve, reject) => {
            tx.oncomplete = () => resolve(true);
            tx.onerror = () => reject(tx.error);
        });
    }


}

export const serviceOrder = new ServiceOrder();