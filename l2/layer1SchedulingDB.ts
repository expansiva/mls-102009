/// <mls shortName="layer1SchedulingDB" project="102009" enhancement="_blank" />

import { SchedulingBase } from "./_102009_layer4SchedulingBase";
import { SchedulingData} from "./_102009_layer4Scheduling";

class Scheduling implements SchedulingBase {


    //--------VARIABLES-------------

    private DB_NAME = "PetshopDB";
    private VERSION = 1;
    private STORE_NAME = "scheduling_data";

    //-----------METHODS----------- 


    public async upd(param: SchedulingData): Promise<SchedulingData | null> {
        return await this.saveSchedulingData(param);
    }

    public async add(param: SchedulingData): Promise<SchedulingData | null> {
        return await this.saveSchedulingData(param);
    }

    public async del(id: string): Promise<boolean> {
        return await this.deleteSchedulingData(id);
    }

    public async list(): Promise<SchedulingData[]> {
        return await this.getAllSchedulingData();
    }

    public async getById(id: string): Promise<SchedulingData | null> {
        return await this.getSchedulingData(id);
    }

    public async recordCount(): Promise<number> {
        return await this.getRecordCount();
    }

    public async listByClient(clientId: string): Promise<SchedulingData[]> {
        return await this.getRecordsByClient(clientId);
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

    private async saveSchedulingData(data: SchedulingData): Promise<SchedulingData | null> {
        const db = await this.openDB();
        const tx = db.transaction(this.STORE_NAME, "readwrite");
        data.version = Date.now().toString();
        tx.objectStore(this.STORE_NAME).put(data);

        return new Promise((resolve, reject) => {
            tx.oncomplete = () => resolve(data);
            tx.onerror = () => reject(tx.error);
        });
    }

    private async getRecordCount(): Promise<number> {
        const db = await this.openDB();
        const transaction = db.transaction(this.STORE_NAME, 'readonly');
        const store = transaction.objectStore(this.STORE_NAME);
        const request = store.count();

        return new Promise((resolve, reject) => {
            request.onsuccess = () => resolve(request.result || 0);
            request.onerror = () => reject(request.error);
        });
    }

    private async getSchedulingData(id: string): Promise<SchedulingData | null> {
        const db = await this.openDB();
        const tx = db.transaction(this.STORE_NAME, "readonly");
        const request = tx.objectStore(this.STORE_NAME).get(id);

        return new Promise((resolve, reject) => {
            request.onsuccess = () => resolve(request.result || null);
            request.onerror = () => reject(request.error);
        });
    }

    private async getAllSchedulingData(): Promise<SchedulingData[]> {
        const db = await this.openDB();
        const tx = db.transaction(this.STORE_NAME, "readonly");
        const request = tx.objectStore(this.STORE_NAME).getAll();

        return new Promise((resolve, reject) => {
            request.onsuccess = () => resolve(request.result as SchedulingData[]);
            request.onerror = () => reject(request.error);
        });
    }

    private async deleteSchedulingData(id: string): Promise<boolean> {
        const db = await this.openDB();
        const tx = db.transaction(this.STORE_NAME, "readwrite");
        tx.objectStore(this.STORE_NAME).delete(id);

        return new Promise((resolve, reject) => {
            tx.oncomplete = () => resolve(true);
            tx.onerror = () => reject(tx.error);
        });
    }

    private async getRecordsByClient(clientId: string): Promise<SchedulingData[]> {
        return new Promise((resolve, reject) => {
            const openRequest = indexedDB.open(this.DB_NAME, this.VERSION);

            openRequest.onerror = () => reject(openRequest.error);

            openRequest.onsuccess = () => {
                const db = openRequest.result;
                const tx = db.transaction(this.STORE_NAME, "readonly");
                const store = tx.objectStore(this.STORE_NAME);
                const getAllRequest = store.getAll();

                getAllRequest.onsuccess = () => {
                    const allRecords = getAllRequest.result || [];
                    const filtered = allRecords.filter(
                        (item: SchedulingData) => item?.data.clientMdmId === clientId
                    );
                    resolve(filtered);
                    db.close();
                };

                getAllRequest.onerror = () => reject(getAllRequest.error);
            };
        });
    }

}

export const scheduling = new Scheduling();