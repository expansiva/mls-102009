/// <mls shortName="layer1Exec" project="102009" enhancement="_blank" />

import {  Ctx, createContext } from "./_102009_layer1Context";
import { RequestBase, ResponseBase } from "./_102009_layer4ResReqBase";

import { addScheduling } from "./_102009_layer2AddScheduling";
import { updScheduling } from "./_102009_layer2UpdScheduling";
import { delScheduling } from "./_102009_layer2DelScheduling";
import { listScheduling } from "./_102009_layer2ListScheduling";
import { getByIdScheduling } from "./_102009_layer2GetByIdScheduling";
import { getByClientScheduling } from "./_102009_layer2GetByClientScheduling";

import { addServiceOrder } from "./_102009_layer2AddServiceOrder";
import { updServiceOrder } from "./_102009_layer2UpdServiceOrder";
import { delServiceOrder } from "./_102009_layer2DelServiceOrder";
import { listServiceOrder } from "./_102009_layer2ListServiceOrder";
import { getByIdServiceOrder } from "./_102009_layer2GetByIdServiceOrder";

export async function petshopExec(param: RequestBase): Promise<ResponseBase> { 

    if (!param || !param.action) {
        return {
            statusCode: 400,
            ok: false,
            error: "Uninformed action"
        } 
    }

    const ctx = createContext(param);
    const args = param.params || undefined; 

    switch (param.action) { 

        case ('SchedulingAdd'): return await addScheduling(ctx, args);
        case ('SchedulingUpd'): return await updScheduling(ctx, args); 
        case ('SchedulingDel'): return await delScheduling(ctx, args);
        case ('SchedulingList'): return await listScheduling(ctx, args);
        case ('SchedulingGetById'): return await getByIdScheduling(ctx, args);
        case ('SchedulingGetByClient'): return await getByClientScheduling(ctx, args);

        case ('ServiceOrderAdd'): return await addServiceOrder(ctx, args);
        case ('ServiceOrderUpd'): return await updServiceOrder(ctx, args); 
        case ('ServiceOrderDel'): return await delServiceOrder(ctx, args);
        case ('ServiceOrderList'): return await listServiceOrder(ctx, args);
        case ('ServiceOrderGetById'): return await getByIdServiceOrder(ctx, args);


        default: return {
            statusCode: 400,
            ok: false,
            error: "Uninformed action"
        }
    }

    
}