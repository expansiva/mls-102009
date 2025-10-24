/// <mls shortName="commonLocal" project="102009" enhancement="_blank" />

import { SchedulingBase } from "./_102009_layer4SchedulingBase";
import { ServiceOrderBase } from "./_102009_layer4ServiceOrderBase";

export interface Ctx {

    io: {
        petshopDB: {
            scheduling: SchedulingBase
            serviceOrder: ServiceOrderBase
        }
    }

}