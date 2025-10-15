/// <mls shortName="layer3DelServiceOrder" project="102009" enhancement="_blank" />

import { Ctx } from "./_102009_layer1Context";

export async function delServiceOrder(ctx:Ctx, id: string): Promise<boolean> {
    return await ctx.io.serviceOrder.del(id);

}