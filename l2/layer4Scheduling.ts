/// <mls shortName="layer4Scheduling" project="102009" enhancement="_blank" />

export interface SchedulingRecord {
  id?: number,
  details: SchedulingDetails,
  version?: string,
}

export enum SchedulingStatus {
  'PENDING' = 'PENDING',
  'CONFIRMED' = 'CONFIRMED',
  'COMPLETED' = 'COMPLETED',
  'CANCELED' = 'CANCELED'
};

export interface SchedulingDetails {

  startDateTime: string; // ISO 8601 datetime (ex: "2025-10-10T16:30:00Z")
  endDateTime?: string;   // ISO 8601 datetime
  status: SchedulingStatus,
  serviceOrderId: number | null;
  
  tutor: {
    clientMdmId: number;
    name: string;
    phone: string;
  };
  pet: {
    petMdmId: number;
    name: string;
    species: string;
    breed: string;
    allergies: string[];
  };
  service: {
    serviceMdmId: number;
    name: string;
    serviceCode?: string;
  };
  employee?: {
    
    name: string;
    description: string;
  };
  notes?: string;

}