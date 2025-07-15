import React from 'react'
import { useLoaderData } from 'react-router';
import PageFAQ from '~/components/PageFAQ';
import WaggleHome from '~/components/waggleHomeContent';
import WaggleAppLanding from '~/components/WaggleAppLanding';
import FeaturesSection from '~/components/FeaturesSection';
import { getPageData } from '~/utils/common-functions';
import { useInView } from 'react-intersection-observer';
import OfferBanner from '~/components/OfferBanner';
import ImageCarousel from '~/components/ImageCarousel';
import VideoBanner from '~/components/VideoBanner';
import ImageMarqueeSlider from '~/components/Galleryslider';
import UltimatePetParent from '~/components/UltimatePetParent';


export async function loader({ context }) {
  const pageDataByHandle = await getPageData({ context, pageHandle: "gift-shopper" })

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
  const HydrogenGallerySliderData = pageData?.pageDataByHandle?.pageDatas?.page?.HydrogenGallerySliderData?.references?.edges || [];
  const [belowFoldRef, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const featuredBlogs = data?.pageDataByHandle?.pageDatas?.page?.featuredBlogs.references?.edges || [];
  return (
    <>
      <div className="gift-shop">
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
              <ImageCarousel />
              <VideoBanner />
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
