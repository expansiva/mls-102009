/// <mls shortName="layer1ServiceOrderIndexedDB" project="102009" enhancement="_blank" />

import { ServiceOrderBase } from "./_102009_layer4ServiceOrderBase";
import { ServiceOrderRecord } from "./_102009_layer4ServiceOrder";
import {  STORE_NAME_SERVICEORDER, openDB } from "./_102009_layer1IndexedDb";

class ServiceOrder implements ServiceOrderBase {

    //-----------METHODS----------- 


    public async upd(param: ServiceOrderRecord): Promise<ServiceOrderRecord> {
        return await this.saveServiceOrderRecord(param);
    }

    public async add(param: ServiceOrderRecord): Promise<ServiceOrderRecord> {
        return await this.saveServiceOrderRecord(param);
    }

    public async del(id: number): Promise<boolean> {
        return await this.deleteServiceOrderRecord(id);
    }

    public async list(): Promise<ServiceOrderRecord[]> {
        return await this.getAllServiceOrderRecord();
    }

    public async getById(id: number): Promise<ServiceOrderRecord | null> {
        return await this.getServiceOrderRecord(id);
    }

    //-----------IMPLEMENTS------------

    private async saveServiceOrderRecord(data: ServiceOrderRecord): Promise<ServiceOrderRecord> {
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


    private async getServiceOrderRecord(id: number): Promise<ServiceOrderRecord> {
        const db = await openDB();
        const tx = db.transaction(STORE_NAME_SERVICEORDER, "readonly");
        const request = tx.objectStore(STORE_NAME_SERVICEORDER).get(id);

        return new Promise((resolve, reject) => {
            request.onsuccess = () => resolve(request.result || null);
            request.onerror = () => reject(request.error);
        });
    }

    private async getAllServiceOrderRecord(): Promise<ServiceOrderRecord[]> {
        const db = await openDB();
        const tx = db.transaction(STORE_NAME_SERVICEORDER, "readonly");
        const request = tx.objectStore(STORE_NAME_SERVICEORDER).getAll();

        return new Promise((resolve, reject) => {
            request.onsuccess = () => resolve(request.result as ServiceOrderRecord[]);
            request.onerror = () => reject(request.error);
        });
    }

    private async deleteServiceOrderRecord(id: number): Promise<boolean> {
        const db = await openDB();
        const tx = db.transaction(STORE_NAME_SERVICEORDER, "readwrite");
        tx.objectStore(STORE_NAME_SERVICEORDER).delete(id);

        return new Promise((resolve, reject) => {
            tx.oncomplete = () => resolve(true);
            tx.onerror = () => reject(tx.error);
        });
    }


}

export const serviceOrderIndexedDB = new ServiceOrder();