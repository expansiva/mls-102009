/// <mls shortName="layer3AddServiceOrder" project="102009" enhancement="_blank" />

import { ServiceOrderData } from "./_102009_layer4ServiceOrder";
import { Ctx } from "./_102009_layer1Context";

export async function addServiceOrder(ctx:Ctx, data: ServiceOrderData): Promise<ServiceOrderData | null> {

    return await ctx.io.serviceOrder.add(data); 

}