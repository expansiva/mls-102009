/// <mls shortName="layer4SchedulingBase" project="102009" enhancement="_blank" />

import { SchedulingData } from "./_102009_layer4Scheduling";
import { RequestBase } from "./_102009_layer4ResReqBase";

export interface SchedulingBase { 
    upd: (param: SchedulingData) => Promise<SchedulingData >;
    add: (param: SchedulingData) => Promise<SchedulingData >;
    del: (id: number) => Promise<boolean>;
    list: () => Promise<SchedulingData[]>;
    getById: (id: number) => Promise<SchedulingData | null>;
    listByClient: (clientId: number) => Promise<SchedulingData[]>;
}

//----------REQUEST--------------

export interface RequestSchedulingAdd extends RequestBase {
  action: 'SchedulingAdd',
  params: SchedulingData
}
 
export interface RequestSchedulingUpd extends RequestBase {
  action: 'SchedulingUpd',
  params: SchedulingData
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