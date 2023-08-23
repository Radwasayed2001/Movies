import { createSlice } from "@reduxjs/toolkit";


const productSlice = createSlice({
    name: 'products',
    initialState: {
        Fav: [],
        cart: [],
    },
    reducers: {
        addToCart: function (state, action) {
            // console.log(action.payload)

            state.Fav.push(action.payload)

        },
        removeFromCart: (state, action) => {
            state.Fav.splice(action.payload, 1);
        },
        addToMyCart: function (state, action) {
            // console.log(action.payload)

            state.cart.push(action.payload)

        },
        removeFromMyCart: (state2, action2) => {
            state2.cart.splice(action2.payload, 1);
        }
    }
})

export const { addToCart, removeFromCart,addToMyCart, removeFromMyCart } = productSlice.actions;
export default productSlice.reducer;