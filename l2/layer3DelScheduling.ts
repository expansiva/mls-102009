/// <mls shortName="layer3DelScheduling" project="102009" enhancement="_blank" />

import { Ctx } from "./_102009_layer1Context";

export async function delScheduling(ctx:Ctx, id: string): Promise<boolean> {
    return await ctx.io.scheduling.del(id);

}