/// <mls shortName="organismBanner" project="102009" enhancement="_100554_enhancementLit" groupName="petshop" />

import { customElement } from 'lit/decorators.js';
import { IcaOrganismWireframeBase } from './_100554_icaOrganismWireframeBase';

@customElement('organism-banner-102009')
export class _102009_organismBanner extends IcaOrganismWireframeBase {
    
    generalDescription: string | undefined = 'Banner visual de destaque na home.';
    goal: string | undefined = 'Apresentar mensagem de boas-vindas e reforçar identidade visual.';

}