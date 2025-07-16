import { Await, useLoaderData, Link } from 'react-router';
import { Suspense } from 'react';
import { Image } from '@shopify/hydrogen';
import { ProductItem } from '~/components/ProductItem';
// import {waggleHomeContent} from '~/components/waggleHomeContent'
import WaggleHome from '~/components/waggleHomeContent';
import ProductShowcase from '~/components/ProductShowcase';
import ImageCarousel from '~/components/ImageCarousel';
import PetSafetyCards from '~/components/PetSafetyCards'
import UltimatePetParent from '~/components/UltimatePetParent'
import WaggleAppLanding from '~/components/WaggleAppLanding'
import HappyTailsSection from '~/components/HappyTailsSection'
import { getPageData } from '~/utils/common-functions';
import { useInView } from 'react-intersection-observer';
import PetSafetyGrid from '~/components/PetSafetyGrid';

/**
 * @type {MetaFunction}
 */
export const meta = () => {
  return [{ title: 'Hydrogen | Home' }];
};

/**
 * @param {LoaderFunctionArgs} args
 */
export async function loader(args) {
  const { context } = args;
  const pageDataByHandle = await getPageData({ context, pageHandle: "hydrogen-home-page" })
  // Start fetching non-critical data without blocking time to first byte
  const deferredData = loadDeferredData(args);

  // Await the critical data required to render initial state of the page
  const criticalData = await loadCriticalData(args);

  return { ...deferredData, ...criticalData, pageDataByHandle };
}

/**
 * Load data necessary for rendering content above the fold. This is the critical data
 * needed to render the page. If it's unavailable, the whole page should 400 or 500 error.
 * @param {LoaderFunctionArgs}
 */
async function loadCriticalData({ context }) {
  const [{ collections }] = await Promise.all([
    context.storefront.query(FEATURED_COLLECTION_QUERY),
    // Add other queries here, so that they are loaded in parallel
  ]);

  return {
    featuredCollection: collections.nodes[0],
  };
}

/**
 * Load data for rendering content below the fold. This data is deferred and will be
 * fetched after the initial page load. If it's unavailable, the page should still 200.
 * Make sure to not throw any errors here, as it will cause the page to 500.
 * @param {LoaderFunctionArgs}
 */
function loadDeferredData({ context }) {
  const recommendedProducts = context.storefront
    .query(RECOMMENDED_PRODUCTS_QUERY)
    .catch((error) => {
      // Log query errors, but don't throw them so the page can still render
      console.error(error);
      return null;
    });

  return {
    recommendedProducts,
  };
}

export default function Homepage() {


  /** @type {LoaderReturnData} */
  const data = useLoaderData();
  const pageData = useLoaderData();
  const mainBannerData = data?.pageDataByHandle?.pageDatas?.page?.mainBannerData?.reference?.fields || [];
  const SafetyAtYourFingertipsData = pageData?.pageDataByHandle?.pageDatas?.page?.SafetyAtYourFingertipsData?.reference?.fields || [];
  const featuredBlogs = data?.pageDataByHandle?.pageDatas?.page?.featuredBlogs.references?.edges || [];
  const happyTails = data?.pageDataByHandle?.pageDatas?.page?.happyTails.references?.edges || [];
  const happyTailsTitle = data?.pageDataByHandle?.pageDatas?.page?.happyTailsTitle?.value || '';
  const [belowFoldRef, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="home">
      {mainBannerData.length > 0 && (
        <WaggleHome mainBannerData={mainBannerData} />
      )}
      <ProductShowcase />
      <div ref={belowFoldRef}>
        {inView && (
          <>
            <ImageCarousel />
            <PetSafetyCards />
            {happyTails?.length > 0 && (
              <HappyTailsSection happyTails={happyTails} title={happyTailsTitle} />
            )}
            {SafetyAtYourFingertipsData.length > 0 && (
              <WaggleAppLanding SafetyAtYourFingertipsData={SafetyAtYourFingertipsData} />
            )}
            <UltimatePetParent featuredBlogs={featuredBlogs} />
          </>
        )}
      </div>
    </div>
  );
}

/**
 * @param {{
 *   collection: FeaturedCollectionFragment;
 * }}
 */
function FeaturedCollection({ collection }) {
  if (!collection) return null;
  const image = collection?.image;
  return (
    <Link
      className="featured-collection"
      to={`/collections/${collection.handle}`}
    >
      {image && (
        <div className="featured-collection-image">
          <Image data={image} sizes="100vw" />
        </div>
      )}
      <h1>{collection.title}</h1>
    </Link>
  );
}

/**
 * @param {{
 *   products: Promise<RecommendedProductsQuery | null>;
 * }}
 */
function RecommendedProducts({ products }) {
  return (
    <div className="recommended-products">
      <h2>Recommended Products</h2>
      <Suspense fallback={<div>Loading...</div>}>
        <Await resolve={products}>
          {(response) => (
            <div className="recommended-products-grid">
              {response
                ? response.products.nodes.map((product) => (
                  <ProductItem key={product.id} product={product} />
                ))
                : null}
            </div>
          )}
        </Await>
      </Suspense>
      <br />
    </div>
  );
}

const FEATURED_COLLECTION_QUERY = `#graphql
  fragment FeaturedCollection on Collection {
    id
    title
    image {
      id
      url
      altText
      width
      height
    }
    handle
  }
  query FeaturedCollection($country: CountryCode, $language: LanguageCode)
    @inContext(country: $country, language: $language) {
    collections(first: 1, sortKey: UPDATED_AT, reverse: true) {
      nodes {
        ...FeaturedCollection
      }
    }
  }
`;

const RECOMMENDED_PRODUCTS_QUERY = `#graphql
  fragment RecommendedProduct on Product {
    id
    title
    handle
    priceRange {
      minVariantPrice {
        amount
        currencyCode
      }
    }
    featuredImage {
      id
      url
      altText
      width
      height
    }
  }
  query RecommendedProducts ($country: CountryCode, $language: LanguageCode)
    @inContext(country: $country, language: $language) {
    products(first: 4, sortKey: UPDATED_AT, reverse: true) {
      nodes {
        ...RecommendedProduct
      }
    }
  }
`;

/** @typedef {import('@shopify/remix-oxygen').LoaderFunctionArgs} LoaderFunctionArgs */
/** @template T @typedef {import('react-router').MetaFunction<T>} MetaFunction */
/** @typedef {import('storefrontapi.generated').FeaturedCollectionFragment} FeaturedCollectionFragment */
/** @typedef {import('storefrontapi.generated').RecommendedProductsQuery} RecommendedProductsQuery */
/** @typedef {import('@shopify/remix-oxygen').SerializeFrom<typeof loader>} LoaderReturnData */
