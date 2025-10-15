/// <mls shortName="layer1Context" project="102009" enhancement="_blank" />

import { scheduling } from "./_102009_layer1SchedulingDB";
import { serviceOrder } from "./_102009_layer1ServiceOrderDB";
import { SchedulingBase } from "./_102009_layer4SchedulingBase";
import { ServiceOrderBase } from "./_102009_layer4ServiceOrderBase";
import { RequestBase } from "./_102009_layer4ResReqBase";


export function createContext(param: RequestBase): Ctx {

    if (!param.inDeveloped) throw new Error('Not implement api production');

    const ctx: Ctx = {

        io: {
            scheduling,
            serviceOrder
        }
    }

    return ctx;

}

export interface Ctx {

    io: {
        scheduling: SchedulingBase
        serviceOrder: ServiceOrderBase
    }

} 

