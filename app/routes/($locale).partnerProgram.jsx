import PartnerwithWaggle from "~/components/PartnerwithWaggle"
import TrustedTopDogs from "~/components/TrustedTopDogs"
import PartnerTypeSection from "~/components/PartnerTypeSection"
import SimpleStepsSection from "~/components/SimpleStepsSection"
import {METOBJECT_DATA_QUERY} from '~/utils/product-query';
import {useLoaderData} from 'react-router';

export async function loader({ context }) {
    const partnerProgramBannersData = await getpartnerProgramDatas({ context, metaobjectType: "partnerprogram_banner" })
    const partnerProgramtrustedByTopDogs = await getpartnerProgramDatas({ context, metaobjectType: "partnerprogram_trusted_by_top_dogs" })
    const partnerProgramFindYourPartnerType = await getpartnerProgramDatas({ context, metaobjectType: "partnerprogram_find_your_partner_type" })
    const partnerProgramSimpleSteps = await getpartnerProgramDatas({ context, metaobjectType: "partnerprogram_simple_steps" })

    return {
        partnerProgramBannersData,
        partnerProgramtrustedByTopDogs,
        partnerProgramFindYourPartnerType,
        partnerProgramSimpleSteps,
    };
}

async function getpartnerProgramDatas({ context, metaobjectType } = {}) {
    if (!context?.storefront) {
        throw new Error("Missing storefront context.");
    }

    const { storefront } = context;

    const partnerProgramMain = await storefront.query(
        METOBJECT_DATA_QUERY,
        {
            variables: { type: metaobjectType },
        },
    );

    return { partnerProgramDatas: partnerProgramMain };
}

export default function PartnerProgram() {
    const metaData = useLoaderData();
    return (
        <div>
            <PartnerwithWaggle metaData = {metaData} />
            <TrustedTopDogs metaData = {metaData} />
            <PartnerTypeSection metaData = {metaData} />
            <SimpleStepsSection metaData = {metaData} />
        </div>
    );
}   