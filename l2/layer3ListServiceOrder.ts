/// <mls shortName="layer3ListServiceOrder" project="102009" enhancement="_blank" />

import { ServiceOrderRecord } from "./_102009_layer4ServiceOrder";
import { Ctx } from "./_102009_commonLocal";

export async function listServiceOrder(ctx:Ctx): Promise<ServiceOrderRecord[]> {

    return await ctx.io.petshopDB.serviceOrder.list();

}