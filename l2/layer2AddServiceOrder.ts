/// <mls shortName="layer2AddServiceOrder" project="102009" enhancement="_blank" />

import * as layer3 from "./_102009_layer3AddServiceOrder";
import { ServiceOrderRecord } from "./_102009_layer4ServiceOrder";
import { Ctx } from "./_102009_commonLocal";
import { ResponseBase } from "./_102009_commonGlobal"; 

export async function addServiceOrder(ctx: Ctx, data: Record<string, any> | undefined): Promise<ResponseBase> {

    const ret: ResponseBase = {
        statusCode: 200,
        ok: true,
        data: undefined,
        error: undefined
    }

    try {

        if (!data) throw new Error('[layer2AddServiceOrder]:Into the data');
        ret.data = await layer3.addServiceOrder(ctx, data as ServiceOrderRecord);
        return ret;

    } catch (e: any) {
        
        ret.statusCode = 400;
        ret.ok = false;
        ret.error = e.message;
        return ret;
    }

}