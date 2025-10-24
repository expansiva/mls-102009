/// <mls shortName="layer1SchedulingIndexedDB" project="102009" enhancement="_blank" />
import { SchedulingBase } from "./_102009_layer4SchedulingBase";
import { SchedulingRecord } from "./_102009_layer4Scheduling";
import { STORE_NAME_SCHEDULING, openDB } from "./_102009_layer1IndexedDb";

class Scheduling implements SchedulingBase {


    //-----------METHODS----------- 

    public async upd(param: SchedulingRecord): Promise<SchedulingRecord> {
        return await this.saveSchedulingRecord(param);
    }

    public async add(param: SchedulingRecord): Promise<SchedulingRecord> {
        return await this.saveSchedulingRecord(param);
    }

    public async del(id: number): Promise<boolean> {
        return await this.deleteSchedulingRecord(id);
    }

    public async list(): Promise<SchedulingRecord[]> {
        return await this.getAllSchedulingRecord();
    }

    public async getById(id: number): Promise<SchedulingRecord | null> {
        return await this.getSchedulingRecord(id);
    }

    public async recordCount(): Promise<number> {
        return await this.getRecordCount();
    }

    public async listByClient(clientId: number): Promise<SchedulingRecord[]> {
        return await this.getRecordsByClient(clientId);
    }

    //-----------IMPLEMENTS------------


    private async saveSchedulingRecord(data: SchedulingRecord): Promise<SchedulingRecord> {
        const db = await openDB();
        const tx = db.transaction(STORE_NAME_SCHEDULING, "readwrite");
        const store = tx.objectStore(STORE_NAME_SCHEDULING);

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

    private async getRecordCount(): Promise<number> {
        const db = await openDB();
        const transaction = db.transaction(STORE_NAME_SCHEDULING, 'readonly');
        const store = transaction.objectStore(STORE_NAME_SCHEDULING);
        const request = store.count();

        return new Promise((resolve, reject) => {
            request.onsuccess = () => resolve(request.result || 0);
            request.onerror = () => reject(request.error);
        });
    }

    private async getSchedulingRecord(id: number): Promise<SchedulingRecord | null> {
        const db = await openDB();
        const tx = db.transaction(STORE_NAME_SCHEDULING, "readonly");
        const request = tx.objectStore(STORE_NAME_SCHEDULING).get(id);

        return new Promise((resolve, reject) => {
            request.onsuccess = () => resolve(request.result || null);
            request.onerror = () => reject(request.error);
        });
    }

    private async getAllSchedulingRecord(): Promise<SchedulingRecord[]> {
        const db = await openDB();
        const tx = db.transaction(STORE_NAME_SCHEDULING, "readonly");
        const request = tx.objectStore(STORE_NAME_SCHEDULING).getAll();

        return new Promise((resolve, reject) => {
            request.onsuccess = () => resolve(request.result as SchedulingRecord[]);
            request.onerror = () => reject(request.error);
        });
    }

    private async deleteSchedulingRecord(id: number): Promise<boolean> {
        const db = await openDB();
        const tx = db.transaction(STORE_NAME_SCHEDULING, "readwrite");
        tx.objectStore(STORE_NAME_SCHEDULING).delete(id);

        return new Promise((resolve, reject) => {
            tx.oncomplete = () => resolve(true);
            tx.onerror = () => reject(tx.error);
        });
    }

    private async getRecordsByClient(clientId: number): Promise<SchedulingRecord[]> {
        const db = await openDB();
        const tx = db.transaction(STORE_NAME_SCHEDULING, "readonly");
        const index = tx.objectStore(STORE_NAME_SCHEDULING).index("clientMdmId");
        const request = index.getAll(clientId);

        return new Promise((resolve, reject) => {
            request.onsuccess = () => resolve(request.result || []);
            request.onerror = () => reject(request.error);
        });

    }

}

export const schedulingIndexedDB = new Scheduling();