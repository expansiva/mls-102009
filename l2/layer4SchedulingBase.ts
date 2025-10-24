/// <mls shortName="layer4SchedulingBase" project="102009" enhancement="_blank" />

import { SchedulingRecord } from "./_102009_layer4Scheduling";

export interface SchedulingBase { 
    upd: (param: SchedulingRecord) => Promise<SchedulingRecord >;
    add: (param: SchedulingRecord) => Promise<SchedulingRecord >;
    del: (id: number) => Promise<boolean>;
    list: () => Promise<SchedulingRecord[]>;
    getById: (id: number) => Promise<SchedulingRecord | null>;
    listByClient: (clientId: number) => Promise<SchedulingRecord[]>;
}

