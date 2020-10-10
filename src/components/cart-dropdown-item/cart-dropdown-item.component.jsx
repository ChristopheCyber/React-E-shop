import React from 'react';

import './cart-dropdown-item.styles.scss';

const CartDropdownItem = ({ item: { id, category, price, name, quantity } }) => (
  <div className='cart-dropdown-item'>
    {/*<img src={imageUrl} alt='item' />*/}
    <img src={require(`../../pages/MenuHeaderPages/components/card/img/${category}/img${id}.jpg`)}
                alt={`Pic ${id}`}
            /* title={`Image ${id}`} */
            /* className={`${cardProp3}`} */
            />
    <div className='item-details'>
      <span className='name'>{name}</span>
      <span className='price'>
        {quantity} x ${price}
      </span>
    </div>
  </div>
);

export default CartDropdownItem;