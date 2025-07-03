import React from 'react'
import {useLoaderData} from 'react-router';
import WaggleHome from '~/components/waggleHomeContent';
import PageFAQ from '~/components/PageFAQ';
import WaggleAppLanding from '~/components/WaggleAppLanding';
import FeaturesSection from '~/components/FeaturesSection';
import { getPageData } from '~/utils/common-functions';
import SmartPetHaven from '~/components/SmartPetHaven';


export async function loader({ context }) {
    const pageDataByHandle = await getPageData({ context,pageHandle:"waggle-at-home" })
   
    return {
      pageDataByHandle,        
    };
}

export default function onTheRoad() {
const pageData = useLoaderData();
const mainBannerData = pageData?.pageDataByHandle?.pageDatas?.page?.mainBannerData?.reference?.fields || [];
const pageFaqData = pageData?.pageDataByHandle?.pageDatas?.page?.faqData?.references?.edges || [];
const SafetyAtYourFingertipsData = pageData?.pageDataByHandle?.pageDatas?.page?.SafetyAtYourFingertipsData?.reference?.fields || [];
const hydrogenFeaturesSectionData = pageData?.pageDataByHandle?.pageDatas?.page?.hydrogenFeaturesSectionData?.reference?.fields || [];
const HydrogenSmartPetHavenData = pageData?.pageDataByHandle?.pageDatas?.page?.HydrogenSmartPetHavenData?.reference?.fields || [];
// console.log(HydrogenSmartPetHavenData);
  return (
    <>
    {mainBannerData.length > 0 && (
      <WaggleHome mainBannerData={mainBannerData}/>
    )}
    {hydrogenFeaturesSectionData.length > 0 && (
      <FeaturesSection hydrogenFeaturesSectionData={hydrogenFeaturesSectionData} />
    )}
    {HydrogenSmartPetHavenData.length > 0 && (
      <SmartPetHaven HydrogenSmartPetHavenData={HydrogenSmartPetHavenData} />
    )}
    {SafetyAtYourFingertipsData.length > 0 && (
      <WaggleAppLanding SafetyAtYourFingertipsData={SafetyAtYourFingertipsData} />
    )}
    {pageFaqData.length > 0 && (
      <PageFAQ pageFaqData={pageFaqData}/>
    )}
    </>
  )
}
