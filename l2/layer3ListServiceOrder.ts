/// <mls shortName="layer3ListServiceOrder" project="102009" enhancement="_blank" />

import { ServiceOrderData } from "./_102009_layer4ServiceOrder";
import { Ctx } from "./_102009_layer1Context";

export async function listServiceOrder(ctx:Ctx): Promise<ServiceOrderData[]> {

    return await ctx.io.serviceOrder.list();

}