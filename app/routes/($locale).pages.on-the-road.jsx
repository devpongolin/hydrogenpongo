import React from 'react'
import { useLoaderData } from 'react-router';
import PageFAQ from '~/components/PageFAQ';
import WaggleHome from '~/components/waggleHomeContent';
import WaggleAppLanding from '~/components/WaggleAppLanding';
import FeaturesSection from '~/components/FeaturesSection';
import ImageMarqueeSlider from '~/components/Galleryslider';
import { getPageData } from '~/utils/common-functions';




export async function loader({ context }) {
    const pageDataByHandle = await getPageData({ context,pageHandle:"on-the-road" })
   
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
    <div className='bg-[#F7EEE9]'>
      {mainBannerData.length > 0 && (
        <WaggleHome mainBannerData={mainBannerData}/>
      )}
      <FeaturesSection />
      <ImageMarqueeSlider />
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
