export const addToCart = (item) => ({
  type: "CART/ADD_TO_CART",
  payload: {
    item,
  },
});

export const removeFromCart = (id) => ({
  type: "CART/REMOVE_FROM_CART",
  payload: {
    itemId: id,
  },
});
