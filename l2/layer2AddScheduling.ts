/// <mls shortName="layer2AddScheduling" project="102009" enhancement="_blank" />

import * as layer3 from "./_102009_layer3AddScheduling";
import { SchedulingRecord, ResponseBase } from "./_102009_commonGlobal";
import { Ctx } from "./_102009_commonLocal";

export async function addScheduling(ctx: Ctx, data: Record<string, any> | undefined): Promise<ResponseBase> {

    const ret: ResponseBase = {
        statusCode: 200,
        ok: true,
        data: undefined,
        error: undefined
    }

    try {

        if (!data) throw new Error('[layer2AddScheduling]:Into the data');
        ret.data = await layer3.addScheduling(ctx, data as SchedulingRecord);
        return ret;

    } catch (e: any) {
        
        ret.statusCode = 400;
        ret.ok = false;
        ret.error = e.message;
        return ret;
    }

}