import { configureStore } from "@reduxjs/toolkit";
import filghSlice from "./filghSlice";

export default configureStore({ reducer: filghSlice });
