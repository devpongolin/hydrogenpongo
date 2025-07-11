import { Check, X } from "lucide-react";
import mobileDogImage from '../assets/pdp_table_img2.webp';
import mobileDogImage2 from '../assets/pdp_table_img.webp';
import checkImage from '../assets/check.webp';
import crossImage from '../assets/cross.webp';
import { useAside } from './Aside';
import { CustomAddToCartButton } from './CustomAddToCartButton';
import {useSubmit } from "react-router";

export default function specCompare({specCompare, storefront, getCartId}) {
  const submit = useSubmit();
  const { open } = useAside();
  // Function to handle the Buy Now action
  const handleBuyNow = async ({id}) => {
    submit({merchandiseId: id}, {
      method: 'post',
    });
  }
  const metaobjectData = specCompare || {};
  if(!metaobjectData?.length) return null;

  const productComparisonData = {
    title: "Find The Perfect\nWaggle For Your Pet",
    products: metaobjectData?.map((item) => ({
        id: item?.node?.fields?.find(
          field => field.key === "buy_now_item"
        )?.value || "",
        variantAvailable: item?.node?.fields?.find(
          field => field.key === "buy_now_item"
        )?.reference?.quantityAvailable || "",
        name: item?.node?.fields?.find(
          field => field.key === "product_name"
        )?.value || "",
        image: item?.node?.fields?.find(
          field => field.key === "product_image"
        )?.reference?.image?.url || "", // fallback image
        originalPrice: item?.node?.fields?.find(
          field => field.key === "original_price"
        )?.value || "",
        discountedPrice: item?.node?.fields?.find(
          field => field.key === "sale_price"
        )?.value || ""
      })) || [],
    features: [
      {
        name: "Temperature & Humidity Alerts",
        values: metaobjectData.map(item => 
          item?.node?.fields?.find(field => field.key === "temperature_alerts")?.value === "true"
        )
      },
      {
        name: "Power Loss Alerts",
        values: metaobjectData.map(item => 
          item?.node?.fields?.find(field => field.key === "power_loss_alerts")?.value === "true"
        )
      },
      {
        name: "Wi-Fi Connectivity",
        values: metaobjectData.map(item => 
          item?.node?.fields?.find(field => field.key === "wifi_connectivity")?.value === "true"
        )
      },
      {
        name: "Built-in Rechargeable Battery",
        values: metaobjectData.map(item => {
          const batteryValue = item?.node?.fields?.find(field => field.key === "battery_info")?.value;
          if (!batteryValue || batteryValue.toLowerCase() === "x") {
            return false;
          }
          return { available: true, note: batteryValue };
        })
      },
      {
        name: "Cellular Connectivity",
        values: metaobjectData.map(item => {
          const batteryValue = item?.node?.fields?.find(field => field.key === "cellular_connectivity")?.value;
          if (!batteryValue || batteryValue.toLowerCase() === "x") {
            return false;
          }
          return { available: true, note: batteryValue };
        })
      },
      {
        name: "GPS Tracking",
        values: metaobjectData.map(item => 
          item?.node?.fields?.find(field => field.key === "gps_tracking")?.value === "true"
        )
      }
    ],
    buttons: {
      primary: "Buy Now",
      secondary: "Add to Cart"
    }
  };
  return (
    <div className="product !flex flex-col overflow-scroll">
      {/* <div className='flex'>
        <div className="product-image">
        </div>
      </div> */}
      <div>
        <div className="w-full max-w-[1216px] mx-auto md:py-[56px] py-[48px]">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="md:pl-[30px] pl-[12px] text-left">
                  <span className="font-medium text-[20px] leading-[144%] lato md:text-[22.78px] md:leading-[32.8px] md:font-bold tracking-[-0.36px] text-[#202124] ">
                    {productComparisonData?.title?.split('\n')?.map((line, index) => (
                      <div key={index}>{line}</div>
                    ))}
                  </span>
                </th> 
                {productComparisonData?.products?.map((product, idx) => (
                  <th key={idx} className="md:py-[25.05px] md:px-[29.3px] px-[30px] py-[14px] text-center w-[440px]">
                    <div className="flex flex-col items-center">
                      <img className='mb-[20px] w-[92px] md:w-auto' src={product.image} alt={`Product ${idx + 1}`} />
                      <p className="mb-2 lexend font-medium md:text-[20px] text-[18px] md:leading-[23.2px] tracking-[-0.07px] text-center align-middle w-1/2 ">
                        {product.name}
                      </p>
                      <div className="flex items-end gap-2">
                        <span className="lexend font-light text-[11.67px] md:text-[14.22px] leading-[124%] align-middle text-[#202124] line-through">{product.originalPrice}</span>
                        <span className="lexend font-medium text-[23px] md:text-[26.66px] leading-[28px] align-middle text-[#202124]">{product.discountedPrice}</span>
                      </div>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {productComparisonData?.features?.map((feature, index) => (
                <tr key={index} className="border-b border-[rgba(128,128,128,0.25)]">
                  <td className="md:py-[25.05px] p-[12px] md:px-[29.3px]">
                    <p className="lato text-[14px] leading-[124%] font-normal align-middle md:text-[20.25px] md:text-[#202124] text-[#2E3138]">
                      {feature.name}
                    </p>
                  </td>
                  {feature?.values?.map((value, i) => (
                    <td key={i} className="md:py-[25.05px] md:px-[29.3px] text-center">
                      <div className={`flex justify-center ${typeof value === 'object' ? 'items-center relative gap-2' : ''}`}>
                        <img
                          className='max-md:w-4'
                          src={typeof value === 'object' ? checkImage : value ? checkImage : crossImage}
                          alt={value ? 'Check Box' : 'Cross Box'}
                        />
                        {typeof value === 'object' && value.note && (
                          <p className="font-normal text-[16px] leading-[18px] align-middle text-[#202124] absolute lato left-[57%]">
                            {value.note}
                          </p>
                        )}
                      </div>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>

            <tfoot>
              <tr>
                <td></td>
                {productComparisonData?.products?.map((compareItem, idx) => (
                  <td key={idx} className="md:py-[25.05px] md:px-[29.3px] p-[10px] text-center">
                    <div className="flex flex-col gap-3 items-center">
                      <button 
                      onClick={() => handleBuyNow({id: compareItem.id})}
                      className={`w-[123px] h-[33px]  md:w-auto md:h-auto items-center justify-center lato button2 text-[#FCF8F1] rounded-full flex md:px-[64.49px] md:py-[14px] font-bold text-[14px] md:text-[18px] leading-[100%] align-middle ${compareItem.variantAvailable ? 'cursor-pointer button-hover2' : 'opacity-50 !cursor-not-allowed'}`}>
                        {productComparisonData.buttons.primary}
                      </button>
                      <CustomAddToCartButton
                        disabled={compareItem.variantAvailable ? false : true}
                        onClick={() => open('cart')}
                        lines={[{
                          merchandiseId: compareItem.id,
                          quantity: 1,
                        }]}
                        className={`w-[123px] h-[36px]  md:w-auto md:h-auto items-center justify-center border lato border-gray-300 rounded-full font-bold text-[14px] md:text-[18px] leading-[20px] text-center align-middle text-[#202124] md:px-[55px] md:py-[14px] flex ${compareItem.variantAvailable ? 'cursor-pointer button-hover1' : 'opacity-50 !cursor-not-allowed'}`}
                      >
                        {compareItem.variantAvailable ? productComparisonData.buttons.secondary : 'Sold Out'}
                      </CustomAddToCartButton>
                    </div>
                  </td>
                ))}
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
}