/// <mls shortName="layer4Scheduling" project="102009" enhancement="_blank" />

export interface SchedulingData{
    id?: number,
    data: SchedulingRecord,
    version?:string,
}

export enum SchedulingStatus {
    'PENDING' = 'PENDING',
    'CONFIRMED' = 'CONFIRMED',
    'COMPLETED' = 'COMPLETED',
    'CANCELED' = 'CANCELED'};

export interface SchedulingRecord {
  clientMdmId: number;
  petMdmId: number;
  serviceMdmId: number;
  startDateTime: string; // ISO 8601 datetime (ex: "2025-10-10T16:30:00Z")
  endDateTime?: string;   // ISO 8601 datetime
  status: SchedulingStatus,
  serviceOrderId: string | null; 
  jsonBin: {
    tutor: {
      name: string;
      phone: string;
    };
    pet: {
      name: string;
      species: string;
      breed: string;
      allergies: string[];
    };
    service: {
      name: string;
      serviceCode?: string;
    };
    employee?: {
      name: string;
      description: string;
    };
    notes?: string;
  };
}