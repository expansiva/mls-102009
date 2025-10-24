/// <mls shortName="layer4ServiceOrder" project="102009" enhancement="_blank" />

export interface ServiceOrderRecord {
  id?: number,
  details: ServiceOrderDetails,
  version?: string,
}

export enum ServiceOrderStatus {
  WAITING = 'WAITING',
  IN_PROGRESS = 'IN_PROGRESS',
  READY_FOR_COLLECTION = 'READY_FOR_COLLECTION',
  BILLED = 'BILLED',
  CANCELED = 'CANCELED'
};

export interface ServiceOrderDetails {
  schedulingId: number;
  executionDateTime: string;
  status: ServiceOrderStatus;
  totalAmount: number;
  client: {
    clientMdmId: number;
    name: string;
    phone: string;
  };
  pet: {
    petMdmId: number;
    name: string;
    breed: string;
  };
  employee: {
    employeeMdmId: number;
    name: string;
  };
  serviceProvided: {
    serviceMdmId: number;
    name: string;
    priceCharged: number;
  };
  notes: string;
  isExternalAuthorization: boolean;
  history: ServiceOrderHistoryEntry[];

}

export interface ServiceOrderHistoryEntry {
  date: string;
  description: string;
  login: string;
}