import React from 'react'
import {useLoaderData} from 'react-router';
import WaggleHome from '~/components/waggleHomeContent';
import { PAGE_DATA_QUERY } from '~/utils/metaobject-query';


export async function loader({ context }) {
    const pageDataByHandle = await getPageData({ context,pageHandle:"on-the-road" })
   
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
// console.log(mainBannerData);
  return (
    <>
    {mainBannerData.length > 0 && (
        <WaggleHome mainBannerData={mainBannerData}/>
    )}
    </>
  )
}
