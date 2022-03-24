import { createStore } from "redux";
import rootReducer from "./rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const composeEnhancers = composeWithDevTools({});

const initialStore = {
    cartReducer:{
        cartItems: JSON.parse(localStorage.getItem('cartItems')) || []
    }
};
const store = createStore(rootReducer,initialStore, composeEnhancers());

export default store;