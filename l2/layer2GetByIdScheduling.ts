/// <mls shortName="layer2GetByIdScheduling" project="102009" enhancement="_blank" />

import * as layer3 from "./_102009_layer3GetByIdScheduling";
import { SchedulingData } from "./_102009_layer4Scheduling";
import { Ctx } from "./_102009_layer1Context";
import { ResponseBase } from "./_102009_layer4ResReqBase";

export async function getByIdScheduling(ctx: Ctx, data: Record<string, any> | undefined): Promise<ResponseBase> {

    const ret: ResponseBase = {
        statusCode: 200,
        ok: true,
        data: undefined,
        error: undefined
    }

    try {

        if (!data || !data.id) throw new Error('[layer2GetByIdScheduling]:Into the data');
        ret.data = await layer3.getByIdScheduling(ctx, data.id);
        return ret;

    } catch (e: any) {
        
        ret.statusCode = 400;
        ret.ok = false;
        ret.error = e.message;
        return ret;
    }

}