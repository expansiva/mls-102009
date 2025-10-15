/// <mls shortName="layer2UpdServiceOrder" project="102009" enhancement="_blank" />

import * as layer3 from "./_102009_layer3UpdServiceOrder";
import { ServiceOrderData } from "./_102009_layer4ServiceOrder";
import { Ctx } from "./_102009_layer1Context";
import { ResponseBase } from "./_102009_layer4ResReqBase";

export async function updServiceOrder(ctx: Ctx, data: Record<string, any> | undefined): Promise<ResponseBase> {

    const ret: ResponseBase = {
        statusCode: 200,
        ok: true,
        data: undefined,
        error: undefined
    }

    try {

        if (!data) throw new Error('[layer2UpdServiceOrder]:Into the data');
        ret.data = await layer3.updServiceOrder(ctx, data as ServiceOrderData);
        return ret;

    } catch (e: any) {
        
        ret.statusCode = 400;
        ret.ok = false;
        ret.error = e.message;
        return ret;
    }

}