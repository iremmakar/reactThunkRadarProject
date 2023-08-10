import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { options } from "../helpers/constants";

export const getFlights = createAsyncThunk("flights/getFlight", async () => {
  // const res = await axios.request(options);

  const newData = res.data.aircraft.map((flight) => ({
    id: flight[0],
    code: flight[1],
    lat: flight[2],
    lan: flight[3],
  }));

  return newData;
});
