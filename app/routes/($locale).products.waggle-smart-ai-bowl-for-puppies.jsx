import PetSafetyGrid from '~/components/PetSafetyGrid';
import PotionControl from '~/components/PotionControl';
import SmartPetBowlShowcase from '~/components/SmartPetBowlShowcase';
import FrequentlyBoughtTogether from '~/components/FrequentlyBoughtTogether';
import WaggleSteps from '~/components/WaggleSteps';
import TestimonialsSection from '~/components/TestimonialsSection';
import FAQsection from '~/components/FAQsection';
import {useLoaderData} from 'react-router';
import {FETCH_PRODUCT_USING_HANDLE,METOBJECT_DATA_QUERY} from '~/utils/product-query';
import {getAvarageProductRating,getProductsReview} from '~/utils/common-functions';

export async function loader({context}) {
  const SHOPIFY_DOMAIN = context.env.PUBLIC_STORE_DOMAIN;
  const STOREFRONT_API_VERSION = context.env.STOREFRONT_API_VERSION;
  const STOREFRONT_ACCESS_TOKEN = context.env.PUBLIC_STOREFRONT_API_TOKEN;
  const ALI_REVIEWS_API_KEY = context.env.ALI_REVIEWS_API_KEY;
  const ALI_REVIEW_URL = context.env.ALI_REVIEW_URL;

  const product = await fetchProductByHandle(
    SHOPIFY_DOMAIN,
    STOREFRONT_API_VERSION,
    STOREFRONT_ACCESS_TOKEN,
  );

  const productId = product?.data?.product?.id?.split('/').pop();

  const instructionMetaobjectData = await getInstructionMetaobjectData({ context })
  const effortlessPetNeed = await geteffortlessPetNeed({ context })  
  const weggelPDPGuide = await getWagglePDPGuide({ context })
  const averageProductRating = await getAvarageProductRating(ALI_REVIEWS_API_KEY,ALI_REVIEW_URL,productId)
  const productReviews = await getProductsReview(ALI_REVIEWS_API_KEY,ALI_REVIEW_URL)

  return {
    productId,
    averageProductRating,
    product,
    instructionMetaobjectData,
    effortlessPetNeed,
    weggelPDPGuide,
    productReviews,
  };
}

async function getWagglePDPGuide({ context } = {}) {
  if (!context?.storefront) {
    throw new Error("Missing storefront context.");
  }

  const { storefront } = context;

  const waggleGuide = await storefront.query(
    METOBJECT_DATA_QUERY,
    {
      variables: { type: 'waggle_pdp_guide' },
    },
  );

  return { waggleGuideData: waggleGuide };
}

async function geteffortlessPetNeed({ context } = {}) {
  if (!context?.storefront) {
    throw new Error("Missing storefront context.");
  }

  const { storefront } = context;

  const petaneedtData = await storefront.query(
    METOBJECT_DATA_QUERY,
    {
      variables: { type: 'pdp_effortless_pet_needs' },
    },
  );

  return { effortlessPetNeeds: petaneedtData };
}
async function getInstructionMetaobjectData({ context } = {}) {
    if (!context?.storefront) {
      throw new Error("Missing storefront context.");
    }
  
    const { storefront } = context;
  
    const instructionMetaobjectData = await storefront.query(
      METOBJECT_DATA_QUERY,
      {
        variables: { type: 'product_instruction' },
      },
    );
  
    return { instructionMetaobjectDatas: instructionMetaobjectData };
  }
  

async function fetchProductByHandle(
  SHOPIFY_DOMAIN,
  STOREFRONT_API_VERSION,
  STOREFRONT_ACCESS_TOKEN,
) {
  const response = await fetch(
    `https://${SHOPIFY_DOMAIN}/api/${STOREFRONT_API_VERSION}/graphql.json`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': STOREFRONT_ACCESS_TOKEN,
      },
      body: JSON.stringify({
        query: FETCH_PRODUCT_USING_HANDLE,
        variables: {
          handle: "waggle-smart-ai-bowl-for-puppies",
        },
      }),
    },
  );

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Shopify API error: ${response.status} ${errorText}`);
  }

  const product = await response.json();
  return product;
}

export default function CustomPage() {
  const ProductData = useLoaderData();
  const bundleProduct = ProductData?.product?.data?.product?.bundleProduct?.references?.edges || [];
  const waggleGuide = ProductData?.weggelPDPGuide?.waggleGuideData?.metaobjects?.edges || [];
  const productFAQ = ProductData?.product?.data?.product?.productFaq?.value || []; 
  const productReviews = ProductData?.productReviews?.data?.reviews || []; 
  const productIdValue = ProductData?.productId || null;
  const productAvarageRating = ProductData?.averageProductRating?.data?.[productIdValue]?.average_rating || 5;
    // console.log(productAvarageRating);  
  
  return (
    <div>
      <PotionControl ProductData={ProductData} productAvarageRating={productAvarageRating}/>
       <SmartPetBowlShowcase ProductData={ProductData} />
       {bundleProduct.length > 0 && (
      <FrequentlyBoughtTogether bundleProduct={bundleProduct} />
      )}
      {waggleGuide.length > 0 && (
        <WaggleSteps waggleGuide={waggleGuide} />
      )}
      {productReviews.length > 0 && (
        <TestimonialsSection productReviews={productReviews} productAvarageRating={productAvarageRating} />
      )}
      {productFAQ.length > 0 && (
        <FAQsection productFAQ={productFAQ} />
      )}
       <PetSafetyGrid />
    </div>
  );
}
