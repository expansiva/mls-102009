/// <mls shortName="layer2GetByIdServiceOrder" project="102009" enhancement="_blank" />

import * as layer3 from "./_102009_layer3GetByIdServiceOrder";
import { Ctx } from "./_102009_commonLocal";
import { ResponseBase } from "./_102009_commonGlobal";

export async function getByIdServiceOrder(ctx: Ctx, data: Record<string, any> | undefined): Promise<ResponseBase> {

    const ret: ResponseBase = {
        statusCode: 200,
        ok: true,
        data: undefined,
        error: undefined
    }

    try {

        if (!data || !data.id) throw new Error('[layer2GetByIdServiceOrder]:Into the data');
        ret.data = await layer3.getByIdServiceOrder(ctx, data.id);
        return ret;

    } catch (e: any) {
        
        ret.statusCode = 400;
        ret.ok = false;
        ret.error = e.message;
        return ret;
    }

}