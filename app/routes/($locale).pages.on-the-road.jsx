import React from 'react'
import { useLoaderData } from 'react-router';
import PageFAQ from '~/components/PageFAQ';
import WaggleHome from '~/components/waggleHomeContent';
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
// console.log(pageData);
  return (
    <>
    {mainBannerData.length > 0 && (
        <WaggleHome mainBannerData={mainBannerData}/>
    )}
    {pageFaqData.length > 0 && (
     <PageFAQ pageFaqData={pageFaqData}/>
    )}
    </>
  )
}
