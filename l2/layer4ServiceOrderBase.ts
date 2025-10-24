/// <mls shortName="layer4ServiceOrderBase" project="102009" enhancement="_blank" />

import { ServiceOrderRecord } from "./_102009_layer4ServiceOrder";

export interface ServiceOrderBase {
  upd: (param: ServiceOrderRecord) => Promise<ServiceOrderRecord>;
  add: (param: ServiceOrderRecord) => Promise<ServiceOrderRecord>;
  del: (id: number) => Promise<boolean>;
  list: () => Promise<ServiceOrderRecord[]>;
  getById: (id: number) => Promise<ServiceOrderRecord | null>;
}

