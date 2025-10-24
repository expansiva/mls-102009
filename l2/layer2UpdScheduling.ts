/// <mls shortName="layer2UpdScheduling" project="102009" enhancement="_blank" />

import * as layer3 from "./_102009_layer3UpdScheduling";
import { Ctx } from "./_102009_commonLocal";
import { ResponseBase } from "./_102009_commonGlobal";
import { SchedulingRecord } from "./_102009_layer4Scheduling";

export async function updScheduling(ctx: Ctx, data: Record<string, any> | undefined): Promise<ResponseBase> {

    const ret: ResponseBase = {
        statusCode: 200,
        ok: true,
        data: undefined,
        error: undefined
    }

    try {

        if (!data) throw new Error('[layer2UpdScheduling]:Into the data');
        ret.data = await layer3.updScheduling(ctx, data as SchedulingRecord);
        return ret;

    } catch (e: any) {
        
        ret.statusCode = 400;
        ret.ok = false;
        ret.error = e.message;
        return ret;
    }

}