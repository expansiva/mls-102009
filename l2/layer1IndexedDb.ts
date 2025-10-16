/// <mls shortName="layer1IndexedDb" project="102009" enhancement="_blank" />

export const DB_NAME = "PetshopDB";
export const VERSION = 4;
export const STORE_NAME_SCHEDULING = "scheduling_data";
export const STORE_NAME_SERVICEORDER = "service_order_data";

export async function openDB(): Promise<IDBDatabase> {
    return new Promise((resolve, reject) => {

        const request = indexedDB.open(DB_NAME, VERSION);

        request.onupgradeneeded = () => {
            const db = request.result;

            if (!db.objectStoreNames.contains(STORE_NAME_SCHEDULING)) {
                db.createObjectStore(STORE_NAME_SCHEDULING, { keyPath: "id", autoIncrement: true  });
            }

            if (!db.objectStoreNames.contains(STORE_NAME_SERVICEORDER)) {
                db.createObjectStore(STORE_NAME_SERVICEORDER, { keyPath: "id", autoIncrement: true  });
            }

        };

        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject(request.error);
    });
}