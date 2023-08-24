import { configureStore } from "@reduxjs/toolkit";
// import categorySlice from "./slices/categorySlice";
import categorySlice from "./slices/categorySlice";

export default configureStore({
    reducer:{
        categoryReducer:categorySlice
        
    }
})

