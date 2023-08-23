import { createSlice } from "@reduxjs/toolkit";


const productSlice2 = createSlice({
    name: 'cartproducts',
    initialState: {
        cart: [],
    },
    reducers: {
        addToMyCart: function (state2, action2) {
            // console.log(action.payload)

            state2.cart.push(action2.payload)

        },
        removeFromMyCart: (state2, action2) => {
            state2.cart.splice(action2.payload, 1);
        }
    }
})

export const {addToMyCart, removeFromMyCart } = productSlice2.actions;
export default productSlice2.reducer;