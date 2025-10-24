/// <mls shortName="layer1Context" project="102009" enhancement="_blank" />

import {schedulingIndexedDB}  from "./_102009_layer1SchedulingIndexedDB";
import { serviceOrderIndexedDB } from "./_102009_layer1ServiceOrderIndexedDB";

import { Ctx } from "./_102009_commonLocal"; 
import { RequestBase } from "./_102009_commonGlobal";


export function createContext(param: RequestBase): Ctx {

    if (!param.inDeveloped) throw new Error('Not implement api production');

    const ctx: Ctx = {

        io: {
            petshopDB: {
                scheduling: schedulingIndexedDB,
                serviceOrder: serviceOrderIndexedDB
            }
        }
    }

    return ctx;

}



