/// <mls shortName="layer3ListScheduling" project="102009" enhancement="_blank" />

import { SchedulingData } from "./_102009_layer4Scheduling";
import { Ctx } from "./_102009_layer1Context";

export async function listScheduling(ctx:Ctx): Promise<SchedulingData[]> {

    return await ctx.io.scheduling.list();

}