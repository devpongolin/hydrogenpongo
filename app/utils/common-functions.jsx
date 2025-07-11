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