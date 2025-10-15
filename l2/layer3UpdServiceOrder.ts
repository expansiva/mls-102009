/// <mls shortName="layer3UpdServiceOrder" project="102009" enhancement="_blank" />

import { ServiceOrderData } from "./_102009_layer4ServiceOrder";
import { Ctx } from "./_102009_layer1Context";

export async function updServiceOrder(ctx:Ctx, data: ServiceOrderData): Promise<ServiceOrderData | null> {

    return await ctx.io.serviceOrder.upd(data);

}