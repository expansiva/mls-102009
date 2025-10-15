/// <mls shortName="layer3GetByClientScheduling" project="102009" enhancement="_blank" />

import { SchedulingData } from "./_102009_layer4Scheduling";
import { Ctx } from "./_102009_layer1Context";

export async function getByClientScheduling(ctx:Ctx, clientId: string): Promise<SchedulingData[] | null> {

    return await ctx.io.scheduling.listByClient(clientId);

}