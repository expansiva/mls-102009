/// <mls shortName="layer3DelServiceOrder" project="102009" enhancement="_blank" />

import { Ctx } from "./_102009_commonLocal";

export async function delServiceOrder(ctx:Ctx, id: number): Promise<boolean> {
    return await ctx.io.petshopDB.serviceOrder.del(id);

}