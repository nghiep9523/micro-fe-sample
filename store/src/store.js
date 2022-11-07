import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const initalState = {
  items: [],
};

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case "CART/ADD_TO_CART": {
      const newItems = [...state.items];
      const item = action.payload.item;
      const addedItemIndex = newItems.findIndex((data) => data.id === item.id);
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
      let newItems = [...state.items];
      newItems = newItems.filter((item) => item.id !== action.payload.itemId);

      return {
        ...state,
        items: newItems,
      };
    }
    default:
      return state;
  }
};

const svelteStoreEnhancer = (createStoreApi) => {
  return (reducer, initialState) => {
    const reduxStore = createStoreApi(reducer, initialState);
    return {
      ...reduxStore,
      subscribe(fn) {
        fn(reduxStore.getState());

        return reduxStore.subscribe(() => {
          fn(reduxStore.getState());
        });
      },
    };
  };
};

const composedEnhancer = composeWithDevTools(svelteStoreEnhancer);

const store = createStore(reducer, composedEnhancer);

export default store;
