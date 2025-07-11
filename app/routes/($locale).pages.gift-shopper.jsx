import React from 'react'
import { useLoaderData } from 'react-router';
import PageFAQ from '~/components/PageFAQ';
import WaggleHome from '~/components/waggleHomeContent';
import WaggleAppLanding from '~/components/WaggleAppLanding';
import FeaturesSection from '~/components/FeaturesSection';
import { getPageData } from '~/utils/common-functions';
import { useInView } from 'react-intersection-observer';


export async function loader({ context }) {
  const pageDataByHandle = await getPageData({ context, pageHandle: "gift-shopper" })

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
  const [belowFoldRef, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <>
      <div>
        {mainBannerData.length > 0 && (
          <WaggleHome mainBannerData={mainBannerData} />
        )}
        {hydrogenFeaturesSectionData.length > 0 && (
          <FeaturesSection hydrogenFeaturesSectionData={hydrogenFeaturesSectionData} />
        )}
        <div ref={belowFoldRef}>
          {inView && (
            <>
              {SafetyAtYourFingertipsData.length > 0 && (
                <WaggleAppLanding SafetyAtYourFingertipsData={SafetyAtYourFingertipsData} />
              )}
              {pageFaqData.length > 0 && (
                <PageFAQ pageFaqData={pageFaqData} />
              )}
            </>
          )}
        </div>
      </div>
    </>
  )
}
