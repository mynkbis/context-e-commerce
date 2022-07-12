export const CartReducer = (state,action) => {
    switch (action.type) {
        case "addToCart":
            return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };
        case "removeFromCart":
            return {
                
                ...state, cart: state.cart.filter((cartItem) => (cartItem.id!== action.payload.id))
           }
         case "clearAll":
            return{state, cart:[] }
        default:
            break;
    }
}  