import { configureStore } from '@reduxjs/toolkit'
import {  AuthenticateSliceThunks } from './Feactures/index';

const reducer = {
  Authenticate : AuthenticateSliceThunks,
}

const Store = configureStore({
  reducer: reducer,
  devTools: true,
})







export default Store;
