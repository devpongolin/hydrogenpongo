import React, {useState, useEffect, useRef} from 'react';
import {Star} from 'lucide-react';
import { CustomAddToCartButton } from './CustomAddToCartButton';
import {useAside} from './Aside';

import mainImage from '../assets/main-product.webp';
import bowlDetail from '../assets/bowl-detail.webp';
import appInterface from '../assets/app-interface.webp';
import feedingDemo from '../assets/feeding-demo.webp';
import petUsingBowl from '../assets/pet-using-bowl.webp';
import smartFeederSide from '../assets/smartFeederSide.webp';
import petEating from '../assets/petEating.webp';
import appSettings from '../assets/appSettings.webp';
import productPackaging from '../assets/productPackaging.webp';

import chevronLeftIcon from '../assets/chevronLeftIcon.webp';
import chevronRightIcon from '../assets/chevronRightIcon.webp';
import wifiIcon from '../assets/wifi.webp';
import shieldIcon from '../assets/shield.webp';
import batteryIcon from '../assets/battery.webp';
import truckIcon from '../assets/truck.webp';
import rotateCcwIcon from '../assets/rotate-ccw.webp';
import awardIcon from '../assets/award.webp';
import lockIcon from '../assets/lock.webp';
import secureCheckoutIcon from '../assets/secureCheckoutIcon.webp';
import starIcon from '../assets/star.webp';
import promoBoxImage from '../assets/promo-box.webp';
import waggleLogo from '../assets/waggle-logo.webp';
import shoppingCartIcon from '../assets/shopping-cart.webp';
import menuIcon from '../assets/menu.webp';

export default function PotionControl(ProductData) {
  const {open} = useAside();
  const productDetails = ProductData?.ProductData?.product?.data?.product || {}; 
  
  const PolicyData =
    ProductData?.ProductData?.instructionMetaobjectData
      ?.instructionMetaobjectDatas?.metaobjects || [];
  const ProductImages = productDetails?.images?.edges || [];
  const iconWithDiscriptionLabel =
    productDetails?.iconWithDiscriptionLabel?.value;

  const productPrice = productDetails?.variants?.edges[0]?.node?.price?.amount;
  const productComparePrice = productDetails?.variants?.edges[0]?.node?.compareAtPrice?.amount;
  const productVariantID = productDetails?.variants?.edges[0]?.node?.id; 
  const availableQuantity = productDetails?.variants?.edges[0]?.node?.quantityAvailable;
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
  const thumbnailContainerRef = useRef(null);

  let features = [];

  try {
    const parsedData = JSON.parse(
      productDetails?.iconWithDiscription?.value || '[]',
    );
    features = parsedData.map((item) => ({
      icon: item.icon,
      text: item.text,
    }));
  } catch (error) {
    console.error('Error parsing IconWithDiscription:', error);
  }

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
    rating: {
      score: 4.3,
      stars: 4,
      text: '4.3 out of 5',
    },
    badge: {
      text: 'Limited time deal',
      color: 'bg-amber-600',
    },
    pricing: {
      originalPrice: `$ ${productComparePrice}`,
      currentPrice: `$ ${productPrice}`,
      discount: '-50%',
      description: 'One-time device cost',
      subscription: {
        text: '+ Monthly subscription through our app @',
        price: '$0.49/day',
        note: '(Required for alerts)',
      },
    },
    sectionTitle: iconWithDiscriptionLabel || 'Waggle RV 4G Camera',
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

  return (
    <div className="mx-auto px-4 py-4 md:px-[112px] md:py-[56px] flex justify-center items-center">
      <div className="block md:hidden mb-4">
        <header className="flex items-center justify-between bg-white mx-auto px-4 py-3 h-13 rounded-3xl shadow-sm">
          <div className="flex items-center">
            <img src={waggleLogo} alt="Waggle Logo" loading="lazy" />
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <img src={shoppingCartIcon} alt="Shopping Cart" loading="lazy" />
            </div>
            <img src={menuIcon} alt="Menu" loading="lazy" />
          </div>
        </header>
      </div>

      {/* <div className="block md:hidden">
        <div className="mb-4">
          <h1 className="lexend font-medium text-xl leading-[1.24] tracking-[-0.07px] text-dark-gray">
            {productData.title}
          </h1>
          <div className="flex items-center gap-2 mt-3">
            <div className="flex">
              {[1, 2, 3, 4].map((star) => (
                <Star
                  key={star}
                  className="w-3 h-3 fill-yellow-400 text-yellow-400"
                />
              ))}
              <Star className="w-3 h-3 gray-400" />
            </div>
            <span className="dark-slate lato font-normal text-sm leading-4 tracking-normal align-middle">
              {productData.rating.text}
            </span>
          </div>
        </div>
        <div className="mb-4">
          <div className="relative">
            <img
              src={productImages[currentImage].src}
              alt={productImages[currentImage].alt}
              loading="lazy"
              className="light-black-transparent border-[1px] rounded-[13px] w-full h-auto"
            />
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
            >
              <img src={chevronLeftIcon} alt="Previous" className="w-6 h-6" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
            >
              <img src={chevronRightIcon} alt="Next" className="w-6 h-6" />
            </button>
          </div>
          <div className="flex gap-2 mt-3 overflow-x-auto">
            {thumbnailImages.map((thumb, index) => {
              const actualIndex = thumbnailStartIndex + index;
              return (
                <button
                  key={actualIndex}
                  onClick={() => setCurrentImage(actualIndex)}
                  className={`w-16 h-16 rounded-[8px] border-[1px] border-solid flex-shrink-0 overflow-hidden transition-all ${
                    currentImage === actualIndex ? 'color-dark' : 'border-soft'
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
        <div className="mb-4">
          <div
            className={`inline-block brand-brown rounded-[4px] white-text-element pt-[4px] pr-[8px] pb-[4px] pl-[8px] lato font-semibold text-sm leading-4 tracking-normal mb-4`}
          >
            {productData.badge.text}
          </div>
          <div className="flex items-end mb-2">
            <span className="lexend font-light text-xs leading-[1.24] tracking-normal dark-slate line-through">
              {productData.pricing.originalPrice}
            </span>
            <span className="lexend font-medium text-xl leading-[20px] tracking-normal text-dark-gray ml-2">
              {productData.pricing.currentPrice}
            </span>
            <span className="primary-red lexend font-light text-lg leading-[20px] tracking-normal ml-1">
              {productData.pricing.discount}
            </span>
          </div>
          <p className="bg-dark-translucent lato font-normal text-sm leading-4 tracking-normal mb-2">
            {productData.pricing.description}
          </p>
          <p className="lato font-medium text-sm leading-5 tracking-normal bg-dark-translucent mb-4">
            {productData.pricing.subscription.text}{' '}
            <span className="lato font-bold text-sm leading-5 tracking-normal bg-dark-translucent">
              {productData.pricing.subscription.price}
            </span>{' '}
            {productData.pricing.subscription.note}
          </p>
          <h3 className="lexend font-medium text-lg leading-5 tracking-[-0.07px] text-dark-gray mb-3">
            {productData.sectionTitle}
          </h3>
          <div>
            {productData.features.map((feature, index) => (
              <div key={index} className="flex items-start gap-2 mb-2">
                <div className="rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                  <img src={feature.icon} alt="Feature" className="w-4 h-4" />
                </div>
                <span className="text-dark-gray NotoSans font-normal text-sm leading-5 tracking-normal">
                  {feature.text}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="mb-4">
          <div className="flex flex-wrap items-center gap-1">
            <span className="primary-yellow dark-slate rounded-[4px] py-1 px-2 lato font-semibold text-sm leading-4 tracking-normal">
              {productData.coupon.label}
            </span>
            <img src={promoBoxImage} alt="Promo Box" className="w-4 h-4" />
            <span className="NotoSans font-normal text-sm leading-6 tracking-normal">
              {productData.coupon.text}{' '}
              <span className="NotoSans font-bold text-sm leading-6 tracking-normal">
                {productData.coupon.code}
              </span>{' '}
              {productData.coupon.offer}
            </span>
            <button className="primary-blue font-normal text-sm leading-6 tracking-normal underline">
              {productData.coupon.termsText}
            </button>
          </div>
        </div>
        <div className="mb-4">
          <div className="flex border gray-medium rounded-[32px] w-fit">
            <button
              onClick={decreaseQuantity}
              className="px-3 py-2 cursor-pointer text-lg"
            >
              −
            </button>
            <span className="px-3 py-2 black-dark font-bold text-sm leading-4 tracking-normal NotoSans">
              {quantity}
            </span>
            <button
              onClick={increaseQuantity}
              className="px-3 py-2 black-dark cursor-pointer text-lg"
            >
              +
            </button>
          </div>
        </div>
        <div className="mb-6">
          <button
            onClick={increaseQuantity}
            className="button2 cursor-pointer white-text-element w-full h-12 rounded-[32px] lato font-bold text-sm leading-4 tracking-normal"
          >
            {productData.buttons.addToCart}
          </button>
        </div>
        <div className="w-full h-px bg-gray-300 mb-6"></div>
        <div>
          <div className="grid grid-cols-2 gap-6">
            {productData.trustBadges.slice(0, 2).map((badge, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center mx-auto">
                  <img src={badge.icon} alt={badge.text} className="w-6 h-6" />
                </div>
                <p className="mt-2 lato text-dark-gray font-medium text-xs leading-[100%] tracking-normal">
                  {badge.text}
                </p>
              </div>
            ))}
          </div>
          <div className="w-full h-px bg-gray-300 my-6"></div>

          <div className="grid grid-cols-2 gap-6">
            {productData.trustBadges.slice(2, 4).map((badge, index) => (
              <div key={index + 2} className="text-center">
                <div className="flex items-center justify-center mx-auto">
                  <img src={badge.icon} alt={badge.text} className="w-6 h-6" />
                </div>
                <p className="mt-2 lato text-dark-gray font-medium text-xs leading-[100%] tracking-normal">
                  {badge.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div> */}
      <div className="md:flex flex-row gap-[64px]">
        <div>
          <div className="relative">
            <img
              src={productImages[currentImage].src}
              alt={productImages[currentImage].alt}
              loading="lazy"
              className="light-black-transparent border-[1px] rounded-[13px]"
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
            <div className="flex gap-[23px] mt-[14px]">
              {thumbnailImages.map((thumb, index) => {
                const actualIndex = thumbnailStartIndex + index;
                return (
                  <button
                    key={actualIndex}
                    onClick={() => setCurrentImage(actualIndex)}
                    className={`w-[93.2px] h-[93.2px] rounded-[13.48px] border-[1.08px] border-solid flex-shrink-0 overflow-hidden transition-all ${
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
        <div className="">
          <div>
            <h1 className="lexend font-medium text-[28px] leading-[1.24] tracking-[-0.07px] text-dark-gray">
              {productData.title}
            </h1>
            <div className="flex items-center gap-4 mt-[14px]">
              <div className="flex">
                {[1, 2, 3, 4].map((star) => (
                  <Star
                    key={star}
                    className="w-4 h-7 fill-yellow-400 text-yellow-400"
                  />
                ))}
                <Star className="w-4 h-7 gray-400" />
              </div>
              <span className="dark-slate lato font-normal text-base leading-6 tracking-normal align-middle">
                {productData.rating.text}
              </span>
            </div>
            <div
              className={`inline-block brand-brown rounded-[4px] white-text-element pt-[6px] pr-[12px] pb-[6px] pl-[12px] lato font-semibold text-base leading-6 tracking-normal mt-[42px]`}
            >
              {productData.badge.text}
            </div>
          </div>
          <div className="flex items-end mt-[20px]">
            <span className="lexend font-light text-sm leading-[1.24] tracking-normal dark-slate line-through">
              {productData.pricing.originalPrice}
            </span>
            <span className="lexend font-medium text-[28px] leading-[28px] tracking-normal text-dark-gray">
              {productData.pricing.currentPrice}
            </span>
            <span className="primary-red lexend font-light text-[23px] leading-[28px] tracking-normal">
              {productData.pricing.discount}
            </span>
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
          <h3 className="lexend font-medium text-[20px] leading-[23.2px] tracking-[-0.07px] text-dark-gray mt-[20px]">
            {productData.sectionTitle}
          </h3>
          <div className="mt-[14px]">
            {productData.features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2 mt-[7px]">
                <div className="rounded-full flex items-center justify-center">
                  <img src={feature.icon} alt="Feature" />
                </div>
                <span className="text-dark-gray NotoSans font-normal text-base leading-7 tracking-normal">
                  {feature.text}
                </span>
              </div>
            ))}
          </div>
          <div className="flex mt-[20px] gap-1">
            <span className="primary-yellow dark-slate rounded-[4px] py-1 px-2 lato font-semibold text-base leading-6 tracking-normal">
              {productData.coupon.label}
            </span>
            <img src={promoBoxImage} alt="Promo Box" />
            <span className="NotoSans font-normal text-base leading-[28px] tracking-normal">
              {productData.coupon.text}{' '}
              <span className="NotoSans font-bold text-base leading-[28px] tracking-normal">
                {productData.coupon.code}
              </span>{' '}
              {productData.coupon.offer}
            </span>
            <button className="primary-blue font-normal text-base leading-[28px] tracking-normal underline">
              {productData.coupon.termsText}
            </button>
          </div>
          <div className="flex gap-2 mt-[18px]">
            <div className="flex border gray-medium rounded-[64px]">
              <button
                onClick={decreaseQuantity}
                className="px-4 py-3 cursor-pointer"
              >
                −
              </button>
              <span className="px-4 py-3  black-dark font-bold text-base leading-6 tracking-normal NotoSans">
                {quantity}
              </span>
              <button
                onClick={increaseQuantity}
                className="px-4 py-3 black-dark cursor-pointer"
              >
                +
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
            >
        {productData.buttons.addToCart}
            </CustomAddToCartButton>
            {/* <button
              onClick={increaseQuantity}
              className="button2 cursor-pointer white-text-element w-[376.97px] h-[56px] rounded-[64px] lato font-bold text-base leading-5 tracking-normal"
            >
              {productData.buttons.addToCart}
            </button> */}
          </div>
          <div className="flex gap-[27px] pt-[40px]">
            {productData.trustBadges.map((badge, index) => (
              <React.Fragment key={index}>
                <div className="text-center ">
                  <div className="flex items-center justify-center mx-auto">
                    <img src={badge.icon} alt={badge.text} />
                  </div>
                  <p className="mt-[16px] lato text-dark-gray font-medium text-sm leading-[100%] tracking-normal">
                    {badge.text}
                  </p>
                </div>
                {index < productData.trustBadges.length - 1 && (
                  <div className="w-px h-18 gray-400 mx-2"></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
