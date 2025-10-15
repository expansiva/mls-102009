/// <mls shortName="pageAdminEditService" project="102009" enhancement="_100554_enhancementLit" groupName="page" folder="petshop" />

import { CollabPageElement } from '_100554_/l2/collabPageElement';
import { customElement } from 'lit/decorators.js';
import { MdmData, RequestMDMUpd, MdmType, RegistrationDataService } from "./_102019_layer4Mdm";
import { setState, getState, initState } from '_100554_/l2/collabState';

@customElement('petshop--page-admin-edit-service-102009')
export class PageAdminEditService102009 extends CollabPageElement {

    initPage() {
        
        setState('ui.petshop.admin.menu.selected', 'service');
        const data: MdmData = getState('ui.petshop.admin.service.selected');
        const serviceData: RegistrationDataService = data?.data?.registrationData as RegistrationDataService;
        const serviceDataMore = data?.data?.serviceData;
        initState('ui.petshop.admin.organismAdminServiceEdit', {
            name: serviceData?.name,
            descriptionShort: serviceData?.descriptionShort,
            serviceCode: serviceData?.serviceCode,
            category: serviceDataMore?.category,
            durationMinutes: serviceDataMore?.durationMinutes,
            employeeCommission: serviceDataMore?.employeeCommission,
            priceRegular: serviceDataMore?.priceRegular,
            priceSubscription: serviceDataMore?.priceSubscription,
            requiredResources: serviceDataMore?.requiredResources,
            sizeSuitability: serviceDataMore?.sizeSuitability,
            speciesSuitability: serviceDataMore?.speciesSuitability,
            labelError: '',
            labelOk: '',
            action: ''
        });

    }
}

