import React from 'react'
import { useLoaderData } from 'react-router';
import PageFAQ from '~/components/PageFAQ';
import WaggleHome from '~/components/waggleHomeContent';
import WaggleAppLanding from '~/components/WaggleAppLanding';
import { getPageData } from '~/utils/common-functions';


export async function loader({ context }) {
    const pageDataByHandle = await getPageData({ context,pageHandle:"gift-shopper" })
   
    return {
      pageDataByHandle,        
    };
}

export default function onTheRoad() {
const pageData = useLoaderData();
const mainBannerData = pageData?.pageDataByHandle?.pageDatas?.page?.mainBannerData?.reference?.fields || [];
const pageFaqData = pageData?.pageDataByHandle?.pageDatas?.page?.faqData?.references?.edges || [];
const SafetyAtYourFingertipsData = pageData?.pageDataByHandle?.pageDatas?.page?.SafetyAtYourFingertipsData?.reference?.fields || [];
  return (
    <>
    <div>
      {mainBannerData.length > 0 && (
        <WaggleHome mainBannerData={mainBannerData}/>
      )}
      {SafetyAtYourFingertipsData.length > 0 && (
        <WaggleAppLanding SafetyAtYourFingertipsData={SafetyAtYourFingertipsData} />
      )}
      {pageFaqData.length > 0 && (
      <PageFAQ pageFaqData={pageFaqData}/>
      )}
    </div>
    </>
  )
}
