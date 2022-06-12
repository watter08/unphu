import { createSlice , PayloadAction } from '@reduxjs/toolkit'
import { IUserChart  } from '../../../Models/UtiityModels';
import {  IUserListToDash } from '../../../Models/UserListModels'




export interface UserAllInterface{
  UsersChartMonth : IUserChart[];
  UsersChartYear : IUserChart[];
  UsersChartDay : IUserChart[];
  UsersChartList:IUserListToDash[];
}

const InitialTodoState:UserAllInterface = {
  UsersChartMonth:[],
  UsersChartYear :[],
  UsersChartDay :[],
  UsersChartList:[],
}

const UserSlice = createSlice({
    name : 'UsersChart',
    initialState:InitialTodoState,
    reducers:{
      SetUserChartMonth(state , action : PayloadAction<IUserChart[]>){
            state.UsersChartMonth = action.payload;
        },
        SetUserChartYar(state , action : PayloadAction<IUserChart[]>){
            state.UsersChartYear = action.payload;
        },
        SetUserChartDay(state , action : PayloadAction<IUserChart[]>){
          state.UsersChartDay = action.payload;
      },
      SetUserChartList(state , action : PayloadAction<IUserListToDash[]>){
        state.UsersChartList = action.payload;
    },
    }
})

export default UserSlice;