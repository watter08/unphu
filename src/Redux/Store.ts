import { configureStore } from '@reduxjs/toolkit'
import {  UserSlice , UsersListSlice,DashboardSlice } from './Feactures/index';



let reducer = {
  User: UserSlice.reducer,
  UserList : UsersListSlice.reducer,
  UsersChart : DashboardSlice.reducer,
}

const Store = configureStore({
  reducer: reducer,
  devTools: true,

})


export type AppDispatch = typeof Store.dispatch;
export type RootState = ReturnType<typeof Store.getState>;
// export const useSelector: TypedUseSelectorHook<RootState> = rawUseSelector;
export default Store;