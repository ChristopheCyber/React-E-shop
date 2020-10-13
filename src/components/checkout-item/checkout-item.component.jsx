import React from 'react';

import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem: { id, category, name, price, quantity } }) => (
  <div className='checkout-item'>
    <div className='image-container'>
      <img src={require(`../../pages/MenuHeaderPages/components/card/img/${category}/img${id}.jpg`)}
      alt={`Pic ${id}`}  
      /* title={`Image ${id}`} */
      /* className={`${cardProp3}`} */
      />
    </div>
    <span className='name'>{name}</span>
    <span className='quantity'>{quantity}</span>
    <span className='price'>{price}</span>
    <div className='remove-button'>&#10005;</div>
  </div>
);

export default CheckoutItem;