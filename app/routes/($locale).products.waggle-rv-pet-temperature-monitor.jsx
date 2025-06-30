import PetSafetyGrid from '~/components/PetSafetyGrid';
import PotionControl from '~/components/PotionControl';
import SmartPetBowlShowcase from '~/components/SmartPetBowlShowcase';
import FrequentlyBoughtTogether from '~/components/FrequentlyBoughtTogether';
import WaggleSteps from '~/components/WaggleSteps';
import TestimonialsSection from '~/components/TestimonialsSection';
import FAQsection from '~/components/FAQsection';
import {useLoaderData} from 'react-router';
import {getAvarageProductRating,getProductsReview,fetchProductByHandle} from '~/utils/common-functions';
import { getInstructionMetaobjectData } from '~/utils/common-functions';

export async function loader({context}) {
  const ALI_REVIEWS_API_KEY = context.env.ALI_REVIEWS_API_KEY;
  const ALI_REVIEW_URL = context.env.ALI_REVIEW_URL;
  const product = await fetchProductByHandle({ context, handle: "waggle-rv-pet-temperature-monitor" });
  const productId = product?.data?.product?.id?.split('/').pop();
  const instructionMetaobjectData = await getInstructionMetaobjectData({ context,type: 'product_instruction' })
  const averageProductRating = await getAvarageProductRating(ALI_REVIEWS_API_KEY,ALI_REVIEW_URL,productId)
  const productReviews = await getProductsReview(ALI_REVIEWS_API_KEY,ALI_REVIEW_URL)

  return {
    productId,
    averageProductRating,
    product,
    instructionMetaobjectData,
    productReviews,
  };
}

export default function CustomPage() {
  const ProductData = useLoaderData();
  const bundleProduct = ProductData?.product?.product?.product?.bundleProduct?.references?.edges || [];
  const petsNeeds = ProductData?.product?.product?.product?.petsNeeds?.reference?.fields || [];
  const waggleGuide = ProductData?.product?.product?.product?.petGuideSteps?.references?.edges  || [];
  const productFAQS= ProductData?.product?.product?.product?.questionAnswer?.references?.edges || [];
  const productReviews = ProductData?.productReviews?.data?.reviews || []; 
  const productIdValue = ProductData?.productId || null;
  const productAvarageRating = ProductData?.averageProductRating?.data?.[productIdValue]?.average_rating || 5;
    // console.log(ProductData);  
  
  return (
    <div>
      <PotionControl ProductData={ProductData} productAvarageRating={productAvarageRating}/>
      {petsNeeds.length > 0 && (
        <SmartPetBowlShowcase petsNeeds={petsNeeds} />
      )}
       {bundleProduct.length > 0 && (
      <FrequentlyBoughtTogether bundleProduct={bundleProduct} />
      )}
       {waggleGuide.length > 0 && (
              <WaggleSteps waggleGuide={waggleGuide} />
        )}
      {productReviews.length > 0 && (
        <TestimonialsSection productReviews={productReviews} productAvarageRating={productAvarageRating} />
      )}
      {productFAQS.length > 0 && (
        <FAQsection productFAQS={productFAQS} />
      )}
       <PetSafetyGrid />
    </div>
  );
}
