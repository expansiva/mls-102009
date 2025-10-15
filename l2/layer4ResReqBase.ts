/// <mls shortName="layer4ResReqBase" project="102009" enhancement="_blank" />

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

export type ActionTypes = 'SchedulingAdd' | 'SchedulingUpd' | 'SchedulingDel' | 'SchedulingList' | 'SchedulingGetById' | 'SchedulingGetByClient' |
    'ServiceOrderAdd' | 'ServiceOrderUpd' | 'ServiceOrderDel' | 'ServiceOrderList' | 'ServiceOrderGetById';