/// <mls shortName="commonGlobal" project="102009" enhancement="_blank" />

import { SchedulingRecord, SchedulingStatus } from "./_102009_layer4Scheduling";
import { ServiceOrderRecord , ServiceOrderStatus } from "./_102009_layer4ServiceOrder";

//------------------BASE-----------------------

export * from "./_102009_layer4Scheduling";
export * from "./_102009_layer4ServiceOrder";

// export type { SchedulingRecord } from "./_102009_layer4Scheduling";
// export type { ServiceOrderRecord, ServiceOrderDetails, ServiceOrderHistoryEntry } from "./_102009_layer4ServiceOrder";
// export { ServiceOrderStatus, SchedulingStatus };

export interface RequestBase{
    action: ActionTypes,
    params?: Record<string, any>,
    version: string,
    inDeveloped: boolean,
    
}

export interface ResponseBase{
    statusCode: number,
    ok: boolean,
    data?: any,
    error?:string
}

type ActionTypes = 'SchedulingAdd' | 'SchedulingUpd' | 'SchedulingDel' | 'SchedulingList' | 'SchedulingGetById' | 'SchedulingGetByClient' |
    'ServiceOrderAdd' | 'ServiceOrderUpd' | 'ServiceOrderDel' | 'ServiceOrderList' | 'ServiceOrderGetById';


//----------REQUEST SERVICE ORDER--------------

export interface RequestServiceOrderAdd extends RequestBase {
  action: 'ServiceOrderAdd',
  params: ServiceOrderRecord
}

export interface RequestServiceOrderUpd extends RequestBase {
  action: 'ServiceOrderUpd',
  params: ServiceOrderRecord
}

export interface RequestServiceOrderDel extends RequestBase {
  action: 'ServiceOrderDel',
  params: { id: number }
}

export interface RequestServiceOrderList extends RequestBase {
  action: 'ServiceOrderList',
}

export interface RequestServiceOrderGetById extends RequestBase {
  action: 'ServiceOrderGetById',
  params: { id: number }
}

//----------REQUEST SCHEDULING--------------

export interface RequestSchedulingAdd extends RequestBase {
  action: 'SchedulingAdd',
  params: SchedulingRecord
}
 
export interface RequestSchedulingUpd extends RequestBase {
  action: 'SchedulingUpd',
  params: SchedulingRecord
}

export interface RequestSchedulingDel extends RequestBase {
  action: 'SchedulingDel',
  params: {id:number}
}

export interface RequestSchedulingList extends RequestBase {
  action: 'SchedulingList',
}

export interface RequestSchedulingGetById extends RequestBase {
  action: 'SchedulingGetById',
  params: {id:number}
}

export interface RequestSchedulingGetByClient extends RequestBase {
  action: 'SchedulingGetByClient',
  params: {clientId:number}
}