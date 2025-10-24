/// <mls shortName="layer3ListScheduling" project="102009" enhancement="_blank" />

import { SchedulingRecord } from "./_102009_layer4Scheduling";
import { Ctx } from "./_102009_commonLocal";

export async function listScheduling(ctx:Ctx): Promise<SchedulingRecord[]> {

    return await ctx.io.petshopDB.scheduling.list();

}