import { createSlice } from "@reduxjs/toolkit";

import { getFlights } from "./actions";

const initialState = {
  flights: [],
  isLoading: true,
  isError: false,
};

const flightSlice = createSlice({
  name: "fligtSlice",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getFlights.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getFlights.fulfilled, (state, action) => {
        state.flights = action.payload;
        state.isError = false;
        state.isLoading = false;
      })
      .addCase(getFlights.rejected, (state) => {
        state.isLoading = false;
        state.isError = "Uçuş verileri alınırken bir hata oluştu";
      });
  },
});

export default flightSlice.reducer;
