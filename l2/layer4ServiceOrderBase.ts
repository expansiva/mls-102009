/// <mls shortName="layer4ServiceOrderBase" project="102009" enhancement="_blank" />

import { ServiceOrderData } from "./_102009_layer4ServiceOrder";
import { RequestBase } from "./_102009_layer4ResReqBase";

export interface ServiceOrderBase { 
    upd: (param: ServiceOrderData) => Promise<ServiceOrderData | null>;
    add: (param: ServiceOrderData) => Promise<ServiceOrderData | null>;
    del: (id: string) => Promise<boolean>;
    list: () => Promise<ServiceOrderData[]>;
    getById: (id: string) => Promise<ServiceOrderData | null>;
}

//----------REQUEST--------------

export interface RequestServiceOrderAdd extends RequestBase {
  action: 'ServiceOrderAdd',
  params: ServiceOrderData
}
 
export interface RequestServiceOrderUpd extends RequestBase {
  action: 'ServiceOrderUpd',
  params: ServiceOrderData
} 

export interface RequestServiceOrderDel extends RequestBase {
  action: 'ServiceOrderDel',
  params: {id:string}
}

export interface RequestServiceOrderList extends RequestBase {
  action: 'ServiceOrderList',
}

export interface RequestServiceOrderGetById extends RequestBase {
  action: 'ServiceOrderGetById',
  params: {id:string}
}