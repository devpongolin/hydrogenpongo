import React from 'react'
import {useLoaderData} from 'react-router';
import WaggleHome from '~/components/waggleHomeContent';
import PageFAQ from '~/components/PageFAQ';
import { getPageData } from '~/utils/common-functions';


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
// console.log(mainBannerData);
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
