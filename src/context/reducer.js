export const CartReducer = (state,action) => {
    switch (action.type) {
        case "addToCart":
        return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };
        case "removeFromCart":
            const nextCartItems = state.cart.filter((cartItem) =>
                cartItem.id !== action.payload)
            state.cart = nextCartItems;
            localStorage.setItem('cart', JSON.stringify(state.cart))
        
          
            //             return {     
                
            //                 ...state, cart: state.cart.filter((cartItem) => (cartItem.id !== action.payload),
            //                 localStorage.setItem('cart',JSON.stringify(state.cart))
            // )
            //            }
            break;

        case "decreaseCart":
            const itemIndex = state.cart.findIndex((cartItem) => cartItem.id === action.payload.id)
            if (state.cart[itemIndex].cartQuantity > 1) {
                state.cart[itemIndex].qty-=1
            } else if (state.cart[itemIndex].qty === 1) {
                const nextCartItems = state.cart.filter((cartItem) => cartItem.id !== action.payload.id)
                state.cart = nextCartItems;
            }
             localStorage.setItem('cart',JSON.stringify(state.cart))
         








            break;
        case "clearAll":
            return { state, cart: [] }
        
        default:
          
    }





    
}  