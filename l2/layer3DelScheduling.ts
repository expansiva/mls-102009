/// <mls shortName="layer3DelScheduling" project="102009" enhancement="_blank" />


import { Ctx } from "./_102009_commonLocal";

export async function delScheduling(ctx:Ctx, id: number): Promise<boolean> {
    return await ctx.io.petshopDB.scheduling.del(id);

}