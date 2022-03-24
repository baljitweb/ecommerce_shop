const initialState = {
    cartItems: [
       
    ]
};


export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'addtocart':
            return {
                ...state,
                cartItems: [...state.cartItems, action.payload]
            }
        case 'removefromcart':
            return {
                ...state,
                cartItems: state.cartItems.filter((item)=>item.id !== action.payload.id)
            }
        default:    
            return state;
    }
}