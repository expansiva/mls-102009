/// <mls shortName="layer3GetByIdScheduling" project="102009" enhancement="_blank" />

import { SchedulingRecord } from "./_102009_layer4Scheduling";
import { Ctx } from "./_102009_commonLocal";

export async function getByIdScheduling(ctx:Ctx, id: number): Promise<SchedulingRecord | null> {

    return await ctx.io.petshopDB.scheduling.getById(id);

}