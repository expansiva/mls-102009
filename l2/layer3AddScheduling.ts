/// <mls shortName="layer3AddScheduling" project="102009" enhancement="_blank" />

import { SchedulingData } from "./_102009_layer4Scheduling";
import { Ctx } from "./_102009_layer1Context";

export async function addScheduling(ctx:Ctx, data: SchedulingData): Promise<SchedulingData | null> {
    
    return await ctx.io.scheduling.add(data);

}