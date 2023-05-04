import { configureStore } from "@reduxjs/toolkit";
import transactionReducer from "../features/Transactions/transanctionsSlice"

export const store = configureStore({
    reducer:{
    Transactions :transactionReducer,
}
})