import { configureStore } from "@reduxjs/toolkit"
import counterReducer from "../features/counter/counterSlice"
import userReducer from "./userSlice"
import authReducer from "./authSlice"
import adminReducer from "./adminSlice"

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
    auth: authReducer,
    admin: adminReducer
  }
})
