import { CartForm, Image } from '@shopify/hydrogen';
import { useVariantUrl } from '~/lib/variants';
import { Link } from 'react-router';
import { ProductPrice } from './ProductPrice';
import { useAside } from './Aside';

/**
 * A single line item in the cart. It displays the product image, title, price.
 * It also provides controls to update the quantity or remove the line item.
 * @param {{
 *   layout: CartLayout;
 *   line: CartLine;
 * }}
 */
export function CartLineItem({ layout, line }) {
  const { id, merchandise } = line;
  const { product, title, image, selectedOptions } = merchandise;
  const lineItemUrl = useVariantUrl(product.handle, selectedOptions);
  const { close } = useAside();

  return (
    <li key={id} className="cart-line md:w-[443px] w-[328px] border-b border-[#80808040] !py-[41px]">
      {image && (
        <Image
          alt={title}
          aspectRatio="1/1"
          data={image}
          height={100}
          loading="lazy"
          width={100}
          className="rounded-[21.67px] border border-[#80808040]"
        />
      )}

      <div>
        <div className="flex gap-[9px] mb-[9px] flex-col md:flex-row">
          <Link
            prefetch="intent"
            to={lineItemUrl}
            onClick={() => {
              if (layout === 'aside') {
                close();
              }
            }}
          >
            <p className="w-[198px]">
              <strong>{product.title}</strong>
            </p>
          </Link>
          <ProductPrice price={line?.cost?.totalAmount} />
        </div>
        {/* <ul>
          {selectedOptions.map((option) => (
            <li key={option.name}>
              <small>
                {option.name}: {option.value}
              </small>
            </li>
          ))}
        </ul> */}
        <CartLineQuantity line={line} />
      </div>
    </li>
  );
}

/**
 * Provides the controls to update the quantity of a line item in the cart.
 * These controls are disabled when the line item is new, and the server
 * hasn't yet responded that it was successfully added to the cart.
 * @param {{line: CartLine}}
 */
function CartLineQuantity({ line }) {
  if (!line || typeof line?.quantity === 'undefined') return null;
  const { id: lineId, quantity, isOptimistic } = line;
  const prevQuantity = Number(Math.max(0, quantity - 1).toFixed(0));
  const nextQuantity = Number((quantity + 1).toFixed(0));

  return (
    <div className="cart-line-quantity justify-end items-center gap-[11px]">
      <div className="flex border border-[#929292] rounded-[64px] p-[10px] cursor-pointer">
        <CartLineUpdateButton lines={[{ id: lineId, quantity: prevQuantity }]}>
          <button
            aria-label="Decrease quantity"
            disabled={quantity <= 1 || !!isOptimistic}
            name="decrease-quantity"
            value={prevQuantity}
            className="flex pt-[10px] cursor-pointer"
          >
            <svg width="30" height="3" viewBox="0 0 15 3" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.1228 2.97998H0.122803V0.97998H14.1228V2.97998Z" fill="#CCCCCC"></path></svg>
          </button>
        </CartLineUpdateButton>
        <small className="text-[16px] mx-[18px] my-0 cursor-pointer">{quantity}</small>
        <CartLineUpdateButton lines={[{ id: lineId, quantity: nextQuantity }]}>
          <button
            aria-label="Increase quantity"
            name="increase-quantity"
            value={nextQuantity}
            disabled={!!isOptimistic}
            className="cursor-pointer"
          >
            <svg width="25" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.48218 8.97607V14.9761H8.48218V8.97607H14.4822V6.97607H8.48218V0.976074H6.48218V6.97607H0.482178V8.97607H6.48218Z" fill="#111111"></path></svg>
          </button>
        </CartLineUpdateButton>
      </div>
      <CartLineRemoveButton lineIds={[lineId]} disabled={!!isOptimistic} />
    </div>
  );
}

/**
 * A button that removes a line item from the cart. It is disabled
 * when the line item is new, and the server hasn't yet responded
 * that it was successfully added to the cart.
 * @param {{
 *   lineIds: string[];
 *   disabled: boolean;
 * }}
 */
function CartLineRemoveButton({ lineIds, disabled }) {
  return (
    <CartForm
      fetcherKey={getUpdateKey(lineIds)}
      route="/cart"
      action={CartForm.ACTIONS.LinesRemove}
      inputs={{ lineIds }}
    >
      <button disabled={disabled} type="submit">
        <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3.79968 18C3.24968 18 2.77885 17.8042 2.38718 17.4125C1.99552 17.0208 1.79968 16.55 1.79968 16V3H0.799683V1H5.79968V0H11.7997V1H16.7997V3H15.7997V16C15.7997 16.55 15.6038 17.0208 15.2122 17.4125C14.8205 17.8042 14.3497 18 13.7997 18H3.79968ZM13.7997 3H3.79968V16H13.7997V3ZM5.79968 14H7.79968V5H5.79968V14ZM9.79968 14H11.7997V5H9.79968V14Z" fill="#1C1B1F" />
        </svg>
      </button>
    </CartForm>
  );
}

/**
 * @param {{
 *   children: React.ReactNode;
 *   lines: CartLineUpdateInput[];
 * }}
 */
function CartLineUpdateButton({ children, lines }) {
  const lineIds = lines.map((line) => line.id);

  return (
    <CartForm
      fetcherKey={getUpdateKey(lineIds)}
      route="/cart"
      action={CartForm.ACTIONS.LinesUpdate}
      inputs={{ lines }}
    >
      {children}
    </CartForm>
  );
}

/**
 * Returns a unique key for the update action. This is used to make sure actions modifying the same line
 * items are not run concurrently, but cancel each other. For example, if the user clicks "Increase quantity"
 * and "Decrease quantity" in rapid succession, the actions will cancel each other and only the last one will run.
 * @returns
 * @param {string[]} lineIds - line ids affected by the update
 */
function getUpdateKey(lineIds) {
  return [CartForm.ACTIONS.LinesUpdate, ...lineIds].join('-');
}

/** @typedef {OptimisticCartLine<CartApiQueryFragment>} CartLine */

/** @typedef {import('@shopify/hydrogen/storefront-api-types').CartLineUpdateInput} CartLineUpdateInput */
/** @typedef {import('~/components/CartMain').CartLayout} CartLayout */
/** @typedef {import('@shopify/hydrogen').OptimisticCartLine} OptimisticCartLine */
/** @typedef {import('storefrontapi.generated').CartApiQueryFragment} CartApiQueryFragment */
