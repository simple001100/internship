export const isInCart = (cartItems, item) => {
   return !!cartItems.find((el) => el.id === item.id)
};