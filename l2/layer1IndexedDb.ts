/// <mls shortName="layer1IndexedDb" project="102009" enhancement="_blank" />

export const DB_NAME = "PetshopDB";
export const VERSION = 5;
export const STORE_NAME_SCHEDULING = "scheduling_data";
export const STORE_NAME_SERVICEORDER = "service_order_data";

export async function openDB(): Promise<IDBDatabase> {
    return new Promise((resolve, reject) => {

        const request = indexedDB.open(DB_NAME, VERSION);

        request.onupgradeneeded = (event) => {
            migrationScheduling(event, request);
            migrationServiceOrder(event, request);
        };

        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject(request.error);
    });
}

function migrationScheduling(event: IDBVersionChangeEvent, request: IDBOpenDBRequest) {

    const oldVersion = event.oldVersion;
    const newVersion = event.newVersion;
    const db = request.result;

    let store: IDBObjectStore;

    if (!db.objectStoreNames.contains(STORE_NAME_SCHEDULING)) {
        store = db.createObjectStore(STORE_NAME_SCHEDULING, { keyPath: "id", autoIncrement: true });
    } else {
        store = request.transaction!.objectStore(STORE_NAME_SCHEDULING);
    }

    // Garante índices
    if (!store.indexNames.contains("clientMdmId")) {
        store.createIndex("clientMdmId", "data.clientMdmId", { unique: false });
    }

    if (!store.indexNames.contains("startDateTime")) {
        store.createIndex("startDateTime", "data.startDateTime", { unique: false });
    }

    // Migração de dados (se necessário)
    if (oldVersion != newVersion) {
        // exemplo: corrigir estrutura ou adicionar campos novos nos registros existentes

    }

}

function migrationServiceOrder(event: IDBVersionChangeEvent, request: IDBOpenDBRequest) {

    const oldVersion = event.oldVersion;
    const newVersion = event.newVersion;
    const db = request.result;

    let store: IDBObjectStore;

    if (!db.objectStoreNames.contains(STORE_NAME_SERVICEORDER)) {
        store = db.createObjectStore(STORE_NAME_SERVICEORDER, { keyPath: "id", autoIncrement: true });
    }else {
        store = request.transaction!.objectStore(STORE_NAME_SERVICEORDER);
    }

    // Migração de dados (se necessário)
    if (oldVersion != newVersion) {
        // exemplo: corrigir estrutura ou adicionar campos novos nos registros existentes

    }

}
