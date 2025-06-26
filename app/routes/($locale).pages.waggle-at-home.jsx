import React from 'react'
import {useLoaderData} from 'react-router';
import WaggleHome from '~/components/waggleHomeContent';
import { PAGE_DATA_QUERY } from '~/utils/metaobject-query';
import PageFAQ from '~/components/PageFAQ';


export async function loader({ context }) {
    const pageDataByHandle = await getPageData({ context,pageHandle:"waggle-at-home" })
   
    return {
      pageDataByHandle,        
    };
}

async function getPageData({ context, pageHandle } = {}) {
  if (!context?.storefront) {
      throw new Error("Missing storefront context.");
  }

  const { storefront } = context;

  const pageData = await storefront.query(
    PAGE_DATA_QUERY,
      {
          variables: { handle: pageHandle },
      },
  );

  return { pageDatas: pageData };
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
