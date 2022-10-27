import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const initalState = {
  items: [],
};

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case "CART/ADD_TO_CART": {
      const newItems = [...state.items];
      const addedItemIndex = newItems.findIndex(
        (item) => item.id === payload.item.id
      );
      if (addedItemIndex > -1) {
        newItems[addedItemIndex].amount = newItems[addedItemIndex].amount + 1;
      } else {
        newItems.push({ ...item, amount: 1 });
      }
      return {
        ...state,
        items: newItems,
      };
    }
    case "CART/REMOVE_FROM_CART": {
      const newItems = [...state.items];
      newItems = newItems.filter((item) => item.id !== payload.item.id);
      return {
        ...state,
        items: newItems,
      };
    }
    default:
      return state;
  }
};

const addToCart = (item) => ({
  action: "CART/ADD_TO_CART",
  payload: item,
});

const removeFromCart = (id) => ({
  action: "CART/REMOVE_FROM_CART",
  payload: id,
});

const composedEnhancer = composeWithDevTools();

const cartActions = {
  addToCart,
  removeFromCart,
};

const store = createStore(reducer, composedEnhancer);

export default store;
