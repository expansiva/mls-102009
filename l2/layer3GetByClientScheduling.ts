/// <mls shortName="layer3GetByClientScheduling" project="102009" enhancement="_blank" />

import { SchedulingRecord } from "./_102009_layer4Scheduling";
import { Ctx } from "./_102009_commonLocal";

export async function getByClientScheduling(ctx:Ctx, clientId: number): Promise<SchedulingRecord[] | null> {

    return await ctx.io.petshopDB.scheduling.listByClient(clientId);

}