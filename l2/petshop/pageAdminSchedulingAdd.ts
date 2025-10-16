/// <mls shortName="pageAdminSchedulingAdd" project="102009" enhancement="_100554_enhancementLit" groupName="page" folder="petshop" />

import { CollabPageElement } from '_100554_/l2/collabPageElement';
import { customElement } from 'lit/decorators.js';
import { globalState, initState, setState } from '_100554_/l2/collabState';

@customElement('petshop--page-admin-scheduling-add-102009')
export class PageAdminSchedulingAdd102009 extends CollabPageElement {
    initPage() {
        setState('ui.petshop.admin.menu.selected', 'scheduling');

    }
}

