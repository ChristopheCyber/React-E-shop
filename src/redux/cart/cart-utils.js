export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(
        cartItem => (cartItem.id === cartItemToAdd.id 
            && cartItem.category === cartItemToAdd.category)
    );

    if (existingCartItem) {
        //when found same item, ie same id + category, 
        //=> returning a new Array [] for uptdating the state:
        return cartItems.map(cartItem =>
            (cartItem.id === cartItemToAdd.id 
                && cartItem.category === cartItemToAdd.category)
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        );
    }
    //when not found already existing item=>add a single quantity of new item
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};