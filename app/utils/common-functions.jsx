import { PAGE_DATA_QUERY } from "./metaobject-query";
import { FETCH_PRODUCT_USING_HANDLE, METOBJECT_DATA_QUERY } from "./product-query";

export async function fetchProductByHandle({ context,handle } = {}) {
   const { storefront } = context;
  const response = await storefront.query(
    FETCH_PRODUCT_USING_HANDLE,
    {
      variables: { handle },
    },
  );
  return { product: response }
}

export async function getInstructionMetaobjectData({ context,type } = {}) {
    if (!context?.storefront) {
      throw new Error("Missing storefront context.");
    }
  
    const { storefront } = context;
  
    const instructionMetaobjectData = await storefront.query(
      METOBJECT_DATA_QUERY,
      {
        variables: { type },
      },
    );
  
    return { instructionMetaobjectDatas: instructionMetaobjectData };
  }


export async function getAvarageProductRating(ALI_REVIEWS_API_KEY,ALI_REVIEW_URL,productId){
  const myHeaders = new Headers();
  myHeaders.append("Authorization", ALI_REVIEWS_API_KEY);
  
  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow"
  };
  
  const avarageRating = await fetch(`${ALI_REVIEW_URL}/products/rating?product_ids=${productId}`, requestOptions)
  if (!avarageRating.ok) {
    throw new Error(`Failed to fetch average product rating: ${avarageRating.statusText}`);
  }
  const ratingData = await avarageRating.json();
  return ratingData;
}

export async function getProductsReview(ALI_REVIEWS_API_KEY,ALI_REVIEW_URL){
  const myHeaders = new Headers();
myHeaders.append("Authorization", ALI_REVIEWS_API_KEY);

const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow"
};

const prodcutreview = await fetch(`${ALI_REVIEW_URL}/reviews?limit=12&sort=by_date&direction=dec`, requestOptions)
  if (!prodcutreview.ok) {
    throw new Error(`Failed to fetch product reviews: ${prodcutreview.statusText}`);
  }
  
  const reviewData = await prodcutreview.json();
  return reviewData;

}


export async function getPageData({ context, pageHandle } = {}) {
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