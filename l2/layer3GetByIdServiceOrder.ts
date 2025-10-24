/// <mls shortName="layer3GetByIdServiceOrder" project="102009" enhancement="_blank" />

import { ServiceOrderRecord } from "./_102009_layer4ServiceOrder";
import { Ctx } from "./_102009_commonLocal";

export async function getByIdServiceOrder(ctx:Ctx, id: number): Promise<ServiceOrderRecord | null> {

    const record = await ctx.io.petshopDB.serviceOrder.getById(id);
    if ((record as any).data) {
        
    }
    return record

}