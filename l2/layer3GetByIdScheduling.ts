/// <mls shortName="layer3GetByIdScheduling" project="102009" enhancement="_blank" />

import { SchedulingData } from "./_102009_layer4Scheduling";
import { Ctx } from "./_102009_layer1Context";

export async function getByIdScheduling(ctx:Ctx, id: number): Promise<SchedulingData | null> {

    return await ctx.io.scheduling.getById(id);

}