/// <mls shortName="layer3GetByIdServiceOrder" project="102009" enhancement="_blank" />

import { ServiceOrderData } from "./_102009_layer4ServiceOrder";
import { Ctx } from "./_102009_layer1Context";

export async function getByIdServiceOrder(ctx:Ctx, id: string): Promise<ServiceOrderData | null> {

    return await ctx.io.serviceOrder.getById(id);

}