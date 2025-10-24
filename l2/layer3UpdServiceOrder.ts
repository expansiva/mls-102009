/// <mls shortName="layer3UpdServiceOrder" project="102009" enhancement="_blank" />

import { ServiceOrderRecord } from "./_102009_layer4ServiceOrder";
import { Ctx } from "./_102009_commonLocal";

export async function updServiceOrder(ctx:Ctx, data: ServiceOrderRecord): Promise<ServiceOrderRecord | null> {

    return await ctx.io.petshopDB.serviceOrder.upd(data);

}