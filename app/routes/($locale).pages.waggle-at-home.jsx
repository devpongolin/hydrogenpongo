import React from 'react'
import { useLoaderData } from 'react-router';
import WaggleHome from '~/components/waggleHomeContent';
import PageFAQ from '~/components/PageFAQ';
import WaggleAppLanding from '~/components/WaggleAppLanding';
import FeaturesSection from '~/components/FeaturesSection';
import { getPageData } from '~/utils/common-functions';
import SmartPetHaven from '~/components/SmartPetHaven';
import { useInView } from 'react-intersection-observer';
import OfferBanner from '~/components/OfferBanner';
import ImageCarousel from '~/components/ImageCarousel';
import VideoBanner from '~/components/VideoBanner';
import UltimatePetParent from '~/components/UltimatePetParent';
import ImageMarqueeSlider from '~/components/Galleryslider';
import AtHomeImageCarousel from '~/components/AtHomeImageCaroisel';
import AtHomeVideoBanner from '~/components/AtHomeVideoBanner';

export async function loader({ context }) {
  const pageDataByHandle = await getPageData({ context, pageHandle: "waggle-at-home" })

  return {
    pageDataByHandle,
  };
}

export default function onTheRoad() {
  const data = useLoaderData();
  const pageData = useLoaderData();
  const mainBannerData = pageData?.pageDataByHandle?.pageDatas?.page?.mainBannerData?.reference?.fields || [];
  const pageFaqData = pageData?.pageDataByHandle?.pageDatas?.page?.faqData?.references?.edges || [];
  const SafetyAtYourFingertipsData = pageData?.pageDataByHandle?.pageDatas?.page?.SafetyAtYourFingertipsData?.reference?.fields || [];
  const hydrogenFeaturesSectionData = pageData?.pageDataByHandle?.pageDatas?.page?.hydrogenFeaturesSectionData?.reference?.fields || [];
  const HydrogenSmartPetHavenData = pageData?.pageDataByHandle?.pageDatas?.page?.HydrogenSmartPetHavenData?.reference?.fields || [];
  const HydrogenGallerySliderData = pageData?.pageDataByHandle?.pageDatas?.page?.HydrogenGallerySliderData?.references?.edges || [];
  const [belowFoldRef, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const featuredBlogs = data?.pageDataByHandle?.pageDatas?.page?.featuredBlogs.references?.edges || [];
  // console.log(HydrogenSmartPetHavenData);
  return (
    <>
      <div className="at-home">
        {mainBannerData.length > 0 && (
          <WaggleHome mainBannerData={mainBannerData} />
        )}
        {hydrogenFeaturesSectionData.length > 0 && (
          <FeaturesSection hydrogenFeaturesSectionData={hydrogenFeaturesSectionData} />
        )}
        <div ref={belowFoldRef}>
          {inView && (
            <>
              <OfferBanner />
              <AtHomeImageCarousel />
              <AtHomeVideoBanner />
              {HydrogenSmartPetHavenData.length > 0 && (
                <SmartPetHaven HydrogenSmartPetHavenData={HydrogenSmartPetHavenData} />
              )}
              {HydrogenGallerySliderData.length > 0 && (
                <ImageMarqueeSlider HydrogenGallerySliderData={HydrogenGallerySliderData} />
              )}
              {SafetyAtYourFingertipsData.length > 0 && (
                <WaggleAppLanding SafetyAtYourFingertipsData={SafetyAtYourFingertipsData} />
              )}
              <UltimatePetParent featuredBlogs={featuredBlogs} />
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
