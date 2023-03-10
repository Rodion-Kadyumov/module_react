import { createSlice } from "@reduxjs/toolkit";

const basketSlice = createSlice({
  name: 'basket',
  initialState: {
    basket: [],
    finalPrice: 0,
    SumCount: 0,
  },
  reducers: {
    addProduct (state, action) {
      state.basket.push(action.payload)
      state.finalPrice = state.basket.reduce((sum, current) => {
        return sum += +current.price
      }, 0)
      state.SumCount = state.basket.length;
    },
    deleteProduct (state, action) {
      state.basket = state.basket.filter((item) => item.id !== action.payload.id
        );
          state.finalPrice = state.basket.reduce((sum, current) => {
            return sum += +current.price
        }, 0)
        state.SumCount = state.basket.length
      },
    }
})

export const { addProduct, deleteProduct } = basketSlice.actions
export default basketSlice.reducer