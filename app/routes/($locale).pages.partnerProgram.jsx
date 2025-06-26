import PartnerwithWaggle from "~/components/PartnerwithWaggle"
import TrustedTopDogs from "~/components/TrustedTopDogs"
import PartnerTypeSection from "~/components/PartnerTypeSection"
import SimpleStepsSection from "~/components/SimpleStepsSection"
import {useLoaderData} from 'react-router';
import { getPageData } from '~/utils/common-functions';

export async function loader({ context }) {
    const pageDataByHandle = await getPageData({ context,pageHandle:"hydrogen-partner-program" })

    return {
        pageDataByHandle,
    };
}

export default function PartnerProgram() {
    const metaData = useLoaderData();
    const BannerData = metaData?.pageDataByHandle?.pageDatas?.page?.partnerProgramBanner?.reference?.fields || [];
    const TrustByDog = metaData?.pageDataByHandle?.pageDatas?.page?.partnerProgramTrustByDog?.reference?.fields || [];
    const FindYourPartner = metaData?.pageDataByHandle?.pageDatas?.page?.partnerProgramFindYourPartner?.reference?.fields || [];
    const SimpleSteps = metaData?.pageDataByHandle?.pageDatas?.page?.partnerProgramSimpleStep?.reference?.fields || [];
    
    return (
        <div>
            { BannerData.length > 0 && (
                <PartnerwithWaggle BannerData = {BannerData} />
            )}
            { TrustByDog.length > 0 && (
                <TrustedTopDogs TrustByDog = {TrustByDog} />
            )}
            { FindYourPartner.length > 0 && (
                <PartnerTypeSection FindYourPartner = {FindYourPartner} />
            )}
            { SimpleSteps.length > 0 && (
                <SimpleStepsSection SimpleSteps = {SimpleSteps} />
            )}
        </div>
    );
}   