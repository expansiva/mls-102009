/// <mls shortName="pageAdminEditProduct" project="102009" enhancement="_100554_enhancementLit" groupName="page" folder="petshop" />

import { CollabPageElement } from '_100554_/l2/collabPageElement';
import { customElement } from 'lit/decorators.js';
import { MdmData, RegistrationDataProduct, ProductRecord} from "./_102019_layer4Mdm";
import { setState, getState, initState } from '_100554_/l2/collabState';

@customElement('petshop--page-admin-edit-product-102009')
export class PageAdminEditProduct102009 extends CollabPageElement {
    
    initPage() {
        setState('ui.petshop.admin.menu.selected', 'product');
        const selected: MdmData = getState('ui.petshop.admin.product.selected');
        const productData: RegistrationDataProduct = selected?.data?.registrationData as RegistrationDataProduct;
        const productDataMore = (selected?.data as ProductRecord)?.productData;

        initState('ui.petshop.admin.organismAdminProductEdit', {
            nameProduct: productData?.name,
            descriptionShort: productData?.descriptionShort,
            sku: productDataMore?.sku,
            barcode: productDataMore?.barcode,
            category: productDataMore?.category,
            subcategory: productDataMore?.subcategory,
            unitOfMeasure: productDataMore?.unitOfMeasure,
            petSuitability: productDataMore?.petSuitability,
            productDetails: productDataMore?.productDetails,
            labelError: '',
            labelOk: '',
            action: ''
        });
    }
}

