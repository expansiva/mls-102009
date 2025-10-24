/// <mls shortName="layer3UpdScheduling" project="102009" enhancement="_blank" />

import { SchedulingRecord } from "./_102009_layer4Scheduling";
import { Ctx } from "./_102009_commonLocal";

export async function updScheduling(ctx:Ctx, data: SchedulingRecord): Promise<SchedulingRecord> {

    return await ctx.io.petshopDB.scheduling.upd(data);

}