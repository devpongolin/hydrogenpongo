import React, {useState, useEffect, useRef} from 'react';
import {Star} from 'lucide-react';
import { CustomAddToCartButton } from './CustomAddToCartButton';
import {useAside} from './Aside';

import chevronLeftIcon from '../assets/chevronLeftIcon.webp';
import chevronRightIcon from '../assets/chevronRightIcon.webp';
import promoBoxImage from '../assets/promo-box.webp';
import { StarRating } from './Starratting';


export default function PotionControl({ProductData,productAvarageRating}) {
  const {open} = useAside();
  const productDetails = ProductData?.product?.product?.product || {}; 
  const productVariantsData = productDetails?.variants?.edges || []; 
  const productFeatureTitle = productDetails?.productFeatureTitle?.value || '';
  const productFeatureDescription = productDetails?.productFeatureDescription?.references?.edges || [];

  const features = productFeatureDescription.map(({ node }) => {
    const iconField = node.fields.find(f => f.key === 'feature_icon');
    const textField = node.fields.find(f => f.key === 'feature_text');
  
    return {
      icon: iconField?.reference?.image?.url || '',
      text: textField?.value || ''
    };
  }).reverse(); // reverse to match the desired order
  
  
  const PolicyData =
    ProductData?.instructionMetaobjectData
      ?.instructionMetaobjectDatas?.metaobjects || [];
  const ProductImages = productDetails?.images?.edges || [];

  const [productPrice,setProductPrice] = useState(
    productDetails?.variants?.edges[0]?.node?.price?.amount || 'N/A',
  );
  const [productComparePrice, setproductComparePrice] = useState(
    productDetails?.variants?.edges[0]?.node?.compareAtPrice?.amount || 'N/A',
  );
  const [productVariantID,setproductVariantID] = useState(
    productDetails?.variants?.edges[0]?.node?.id || 'N/A',
  );
  const [availableQuantity, setAvailableQuantity] = useState(
    productDetails?.variants?.edges[0]?.node?.quantityAvailable || 0,
  );
  // const availableQuantity = productDetails?.variants?.edges[0]?.node?.quantityAvailable;
  const [selectedVariantId, setSelectedVariantId] = useState(null);
  const [addTocartbuttonText,setaddTocartbuttonText] = useState('Add to cart');
  const [isAddTocartDisable,setisAddTocartDisable] = useState(false);
  useEffect(() => {
    if (availableQuantity === 0) {
      setaddTocartbuttonText('Out of Stock');
      setisAddTocartDisable(true);
    } else {
      setaddTocartbuttonText('Add to cart');
      setisAddTocartDisable(false);
    }
  }, [availableQuantity]);


  const [currentImage, setCurrentImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const mappedPolicyData = PolicyData?.edges.map((item) => {
    const fields = item.node.fields;

    const labelField = fields.find(
      (field) => field.key === 'instruction_label',
    );
    const urlField = fields.find((field) => field.key === 'instruction_url');

    return {
      icon: urlField?.value || '', // Or use a placeholder icon if value is missing
      text: labelField?.value || '',
    };
  });

  const productData = {
    title: productDetails?.title || 'Waggle Smart AI Bowl for Puppies',
    badge: {
      text: 'Limited time deal',
      color: 'bg-amber-600',
    },
    pricing: {
      originalPrice: `${productComparePrice}`,
      currentPrice: `${productPrice}`,
      description: 'One-time device cost',
      subscription: {
        text: '+ Monthly subscription through our app @',
        price: '$0.49/day',
        note: '(Required for alerts)',
      },
    },
    sectionTitle: productFeatureTitle,
    features,
    coupon: {
      label: 'Coupon',
      code: 'PUP50',
      text: 'Use Code',
      offer: 'to get 50% off!',
      termsText: 'Terms',
    },
    buttons: {
      addToCart: addTocartbuttonText,
    },
    trustBadges: mappedPolicyData,
  };

  const productImages = [
    {id: 1, alt: 'Smart Pet Feeder', src: ProductImages[0]?.node?.url},
    {id: 2, alt: 'Bowl Detail', src: ProductImages[1]?.node?.url},
    {id: 3, alt: 'App Interface', src: ProductImages[2]?.node?.url},
    {id: 4, alt: 'Feeding Demo', src: ProductImages[3]?.node?.url},
    {id: 5, alt: 'Pet Using Bowl', src: ProductImages[4]?.node?.url},
    {id: 6, alt: 'Smart Feeder Side View', src: ProductImages[5]?.node?.url},
    {id: 7, alt: 'Pet Eating', src: ProductImages[6]?.node?.url},
    {id: 8, alt: 'App Settings', src: ProductImages[7]?.node?.url},
  ];

  const getThumbnailImages = () => {
    const startIndex = Math.max(
      0,
      Math.min(currentImage - 2, productImages.length - 5),
    );
    return productImages.slice(startIndex, startIndex + 5);
  };

  const thumbnailImages = getThumbnailImages();
  const thumbnailStartIndex = Math.max(
    0,
    Math.min(currentImage - 2, productImages.length - 5),
  );

  useEffect(() => {}, [currentImage]);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % productImages.length);
  };

  const prevImage = () => {
    setCurrentImage(
      (prev) => (prev - 1 + productImages.length) % productImages.length,
    );
  };

  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleVariantClick = (id,productPrice,productComparePrice,quantityAvailable) => {
    setproductVariantID(id);
    setProductPrice(productPrice)
    setproductComparePrice(productComparePrice);;
    setSelectedVariantId(id);
    setAvailableQuantity(quantityAvailable)
    setQuantity(1);
  };

  return (
    <div className="px-[20px] md:px-[0] md:py-[55px] py-[26px] mx-auto max-w-[1210px] gap-[55px] w-full md:flex md:items-start md:justify-between test">
        <div className='flex flex-col items-start justify-start w-full md:w-[50%]'>
            <span className="lexend font-medium text-[22px] md:text-[28px] leading-[1.24] tracking-[-0.07px] text-dark-gray md:hidden block">
              {productData.title}
            </span>
            <div className="pb-[11px] w-full border-b border-[#DFDFDF] mb-[27px] mt-[14px] md:hidden flex flex-col gap-[13px] items-start">
              <StarRating  rating={productAvarageRating}/>
              <span className="dark-slate lato font-normal text-base leading-6 tracking-normal align-middle">
                {productAvarageRating} out of 5
              </span>
            </div>
          <div className="relative mx-auto md:mx-0">
            <img
              src={productImages[currentImage].src}
              alt={productImages[currentImage].alt}
              loading="lazy"
              className="light-black-transparent border-[1px] rounded-[13px] w-full max-w-[556px]"
            />
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
            >
              <img src={chevronLeftIcon} alt="Previous" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
            >
              <img src={chevronRightIcon} alt="Next" />
            </button>
          </div>
          <div className="w-full">
            <div className="flex gap-[17px] md:gap-[23px] mt-[14px] overflow-auto hide-scrollbar justify-center">
              {thumbnailImages.map((thumb, index) => {
                const actualIndex = thumbnailStartIndex + index;
                return (
                  <button
                    key={actualIndex}
                    onClick={() => setCurrentImage(actualIndex)}
                    className={`w-[72px] h-[72px] md:w-[93.2px] md:h-[93.2px] rounded-[13.48px] border-[1.08px] border-solid flex-shrink-0 overflow-hidden transition-all ${
                      currentImage === actualIndex
                        ? 'color-dark'
                        : 'border-soft'
                    }`}
                  >
                    <img
                      src={thumb.src}
                      alt={thumb.alt}
                      className="w-full h-full object-cover"
                    />
                  </button>
                );
              })}
            </div>
          </div>
        </div>
        <div className="mt-[26px] border-t border-[#DFDFDF] md:mt-0 md:border-0">
          <div>
            <span className="lexend font-medium text-[28px] leading-[1.24] tracking-[-0.07px] text-dark-gray md:block hidden mt-[2px]">
              {productData.title}
            </span>
            <div className="items-center gap-4 mt-[14px] md:flex hidden border-b border-[#DFDFDF] pb-[14px]">
              <StarRating  rating={productAvarageRating}/>
              <span className="dark-slate lato font-normal text-base leading-6 tracking-normal align-middle">
                {productAvarageRating} out of 5
              </span>
            </div>
            <div
              className={`inline-block brand-brown rounded-[4px] white-text-element pt-[6px] pr-[12px] pb-[6px] pl-[12px] lato font-semibold text-base leading-6 tracking-normal mt-[27px]`}
            >
              {productData.badge.text}
            </div>
            { productVariantsData.length > 1 && (
              <div className="mt-5">
                <span>Select options</span>
                <div className="flex flex-wrap gap-[16px]">
                  {productVariantsData.map((variant, index) => {
                    const { title, image, id,price,compareAtPrice,quantityAvailable  } = variant.node;
                    const productPrice = price?.amount || 'N/A';
                    const productComparePrice = compareAtPrice?.amount || 'N/A';
                    // console.log(price.amount);
                    
                    const isActive = selectedVariantId === id;

                    return (
                      <button
                        key={index}
                        onClick={() => handleVariantClick(id,productPrice,productComparePrice,quantityAvailable)}
                        className={`px-[10px] py-[11px] w-[126px] h-[144px] border rounded-[8px] mt-1 cursor-pointer ${
                          isActive ? "border-black bg-[#D8EDFF]" : "border-[#80808040]"
                        }`}
                      >
                        <img src={image?.url} alt={image?.altText || title} />
                        <span className="text-[14px] truncate">{title}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
          <div className="flex items-end mt-[20px] gap-[8px]">
            {parseFloat(productData.pricing.originalPrice) > parseFloat(productData.pricing.currentPrice) && (
              <span className="lexend font-light text-sm leading-[1.24] tracking-normal dark-slate line-through">
                ${productData.pricing.originalPrice}
              </span>
            )}
            <span className="lexend font-medium text-[28px] leading-[28px] tracking-normal text-dark-gray">
              ${productData.pricing.currentPrice}
            </span>
            {(() => {
              const original = parseFloat(productData.pricing.originalPrice);
              const current = parseFloat(productData.pricing.currentPrice);
              const discount = Math.round(((original - current) / original) * 100);

              return discount > 0 ? (
                <>
                        <span className="primary-red lexend font-light text-[23px] leading-[28px] tracking-normal">
                        -{discount}%
                        </span>
                        </>
              ) : null;
            })()}
          </div>
          <p className="bg-dark-translucent lato font-normal text-base leading-[18px] tracking-normal mt-[8px]">
            {productData.pricing.description}
          </p>
          <p className="mt-[8px] lato font-medium text-base leading-[23.2px] tracking-normal bg-dark-translucent">
            {productData.pricing.subscription.text}{' '}
            <span className="lato font-bold text-base leading-[23.2px] tracking-normal bg-dark-translucent">
              {productData.pricing.subscription.price}
            </span>{' '}
            {productData.pricing.subscription.note}
          </p>
          <h3 className="lexend font-medium text-[14px] md:text-[20px] leading-[23.2px] tracking-[-0.07px] text-dark-gray mt-[20px]">
            {productData.sectionTitle}
          </h3>
          <div className="mt-[14px]">
            {productData.features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2 mt-[7px]">
                <div className="rounded-full flex items-center justify-center">
                  <img src={feature.icon} alt="Feature" className="w-[33px] h-[33px] object-cover" />
                </div>
                <span className="text-dark-gray NotoSans font-normal text-base leading-7 tracking-normal text-[14px] md:text-[16px]">
                  {feature.text}
                </span>
              </div>
            ))}
          </div>
          <div className="flex mt-[20px] gap-[10px] flex-col md:flex-row">
            <span className="md:w-auto w-fit primary-yellow dark-slate rounded-[4px] py-1 px-2 lato font-semibold text-base leading-6 tracking-normal h-fit">
              {productData.coupon.label}
            </span>
            <span className="NotoSans font-normal text-base leading-[28px] tracking-normal flex items-center gap-[3px]">
            <img src={promoBoxImage} alt="Promo Box" className="mr-[5px]" />
              {productData.coupon.text}{' '}
              <span className="NotoSans font-bold text-base leading-[28px] tracking-normal">
                {productData.coupon.code}
              </span>{' '}
              {productData.coupon.offer}
              <button className="primary-blue font-normal text-base leading-[28px] tracking-normal underline">
              {productData.coupon.termsText}
            </button>
            </span>
            
          </div>
          <div className="flex gap-2 mt-[18px] flex-col md:flex-row pb-[20px] border-b border-[#2E313847]">
            <div className="flex border gray-medium rounded-[64px] w-fit">
              <button
                onClick={decreaseQuantity}
                className="px-[9px] py-4 cursor-pointer"
              >
                <svg width="30" height="3" viewBox="0 0 15 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M14.1228 2.97998H0.122803V0.97998H14.1228V2.97998Z" fill="#CCCCCC"/>
                </svg>
              </button>
              <span className="px-[9px] py-4 black-dark font-bold text-base leading-6 tracking-normal NotoSans flex items-center">
                {quantity}
              </span>
              <button
                onClick={increaseQuantity}
                className="px-[9px] py-4 black-dark cursor-pointer"
                disabled={availableQuantity <= quantity}
              >
                <svg width="25" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.48218 8.97607V14.9761H8.48218V8.97607H14.4822V6.97607H8.48218V0.976074H6.48218V6.97607H0.482178V8.97607H6.48218Z" fill="#111111"/>
                </svg>
              </button>
            </div>
            <CustomAddToCartButton
                disabled={isAddTocartDisable}
                  onClick={() => {
                    open('cart');
                  }}
                  lines={
                    productData
                      ? [
                          {
                            merchandiseId: productVariantID,
                            quantity,
                          },
                        ]
                      : []
                  }
                  className="button2 button-hover2"
            > 
        {productData.buttons.addToCart}
            </CustomAddToCartButton>
          </div>
          <div className="flex gap-[0px] pt-[20px] flex-wrap">
            {productData.trustBadges.map((badge, index) => (
              <React.Fragment key={index}>
                <div className="pdp-benifits-text-center md:w-[25%] w-[50%]">
                  <div className="flex items-center justify-center mx-auto">
                    <img src={badge.icon} alt={badge.text} />
                  </div>
                  <p className="mt-[16px] lato text-dark-gray font-medium text-sm leading-[100%] tracking-normal">
                    {badge.text}
                  </p>
                </div>
                {/* {index < productData.trustBadges.length - 1 && (
                  <div className="w-px h-18 gray-400 mx-2"></div>
                )} */}
              </React.Fragment>
            ))}
          </div>
        </div>
    </div>
  );
}
