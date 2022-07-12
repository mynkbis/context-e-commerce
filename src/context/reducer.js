export const CartReducer = (state,action) => {
    switch (action.type) {
        case "addToCart":
            return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };
        case "removeFromCart":
            return {              
                ...state, cart: state.cart.filter((cartItem) => (cartItem.id!== action.payload))
           }
        case "clearAll":
            return { state, cart: [] }
           
    //     case "increment":
    //         let updatedCart = state.cart.map((curElm) => {
    //             if (curElm.id === action.payload) {
    //                 return {
    //                     ...state, qty: curElm.qty + 1
    //                 }
    //             }
    //             return {
    //                 ...state, cart:updatedCart, curElm
    //             };
    // })
           
          break;
        default:
          
    }
}  