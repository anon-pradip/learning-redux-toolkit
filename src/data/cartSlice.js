import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartProductIds: []
  },
  reducers: {
    addToCart: (state, action) => {
      state.cartProductIds = [...state.cartProductIds, action.payload]
    },
    removeFromCart: (state, action) => {
      const indexOfId = state.cartProductIds.indexOf(action.payload)
      state.cartProductIds.splice(indexOfId, 1)
    },
    clearAllItems: (state) => {
      state.cartProductIds = []
    }
  }
})

export default cartSlice