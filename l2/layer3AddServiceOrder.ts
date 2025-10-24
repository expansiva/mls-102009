/// <mls shortName="layer3AddServiceOrder" project="102009" enhancement="_blank" />

import { ServiceOrderRecord } from "./_102009_layer4ServiceOrder";
import { Ctx } from "./_102009_commonLocal";

export async function addServiceOrder(ctx:Ctx, data: ServiceOrderRecord): Promise<ServiceOrderRecord > {

    return await ctx.io.petshopDB.serviceOrder.add(data); 

}