import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import productsList from "../data/productsList.json"

export const fetchAllProducts = createAsyncThunk("fetch-all-products", async (apiUrl) => {
  const response = await fetch(apiUrl)
  return response.json()
})

const productSlice = createSlice({
  name: "products",
  initialState: {
    data: [], fetchStatus: ''
  },
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchAllProducts.fulfilled, (state, action) => {
      state.fetchStatus = "success"
      state.data = action.payload
    }).addCase(fetchAllProducts.pending, (state, action) => {
      state.fetchStatus = "loading"
    }).addCase(fetchAllProducts.rejected, (state, action) => {
      state.fetchStatus = "error"
      state.data = productsList.products
    })
  }
})

export default productSlice