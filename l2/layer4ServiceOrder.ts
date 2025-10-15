/// <mls shortName="layer4ServiceOrder" project="102009" enhancement="_blank" />

export interface ServiceOrderData{
    id: string,
    data: ServiceOrderRecord,
    version:string,
}

export enum ServiceOrderStatus {
    'IN_PROGRESS' = 'IN_PROGRESS',
    'READY_FOR_COLLECTION' = 'READY_FOR_COLLECTION',
    'BILLED' = 'BILLED',
    'CANCELED' = 'CANCELED'
};

interface ServiceOrderRecord {
  schedulingId: string;     
  clientMdmId: string;
  petMdmId: string;
  employeeMdmId: string;

  executionDateTime: string; 
  status: ServiceOrderStatus;

  totalAmount: number;
  saleId: string | null;     

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
  servicesProvided: ServiceProvided[];
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
  serviceMdmId: string;
  name: string;
  priceCharged: number;
  executionEmployeeMdmId: string; 
}





