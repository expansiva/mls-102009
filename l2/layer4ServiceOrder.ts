/// <mls shortName="layer4ServiceOrder" project="102009" enhancement="_blank" />

export interface ServiceOrderData {
  id?: number,
  data: ServiceOrderRecord,
  version?: string,
}

export enum ServiceOrderStatus {
  'WAITING' = 'WAITING',
  'IN_PROGRESS' = 'IN_PROGRESS',
  'READY_FOR_COLLECTION' = 'READY_FOR_COLLECTION',
  'BILLED' = 'BILLED',
  'CANCELED' = 'CANCELED'
};

interface ServiceOrderRecord {
  schedulingId: number;
  clientMdmId: number;
  petMdmId: number;
  employeeMdmId: number;
  serviceMdmId: number;
  executionDateTime: string;
  status: ServiceOrderStatus;
  totalAmount: number;
  jsonBin: ServiceOrderJsonBin;
}

interface ServiceOrderJsonBin {
  client: {
    name: string;
    phone: string;
  };
  pet: {
    name: string;
    breed: string;
  };
  employee: {
    name: string;
  };
  serviceProvided: ServiceProvided;
  notes: string;
  isExternalAuthorization: boolean;
  history: ServiceOrderHistoryEntry[];
}


interface ServiceOrderHistoryEntry {
  date: string;
  description: string;
  login: string;
}


interface ServiceProvided {
  name: string;
  priceCharged: number;
}
