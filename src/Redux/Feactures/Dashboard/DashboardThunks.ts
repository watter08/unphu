import { IUserChart   } from '../../../Models/UtiityModels';
import { UserListToDash , IUserListToDash } from '../../../Models/UserListModels'
import DashboardSlice from "./DashboardSlice";
import { AnyAction , ThunkAction } from "@reduxjs/toolkit";
import { GetByDay , GetByMonth , GetByYear,GetUserList } from '../../../Services/Dashboard/DashboardService'
import { RootState } from '../../Store';



export const UserActions = DashboardSlice.actions


export const fetchGetChartByMonth = ():ThunkAction<void , RootState , unknown, AnyAction> => {
    return async(dispatch,getState)=>{
            const response:IUserChart[] = await GetByMonth();            
            dispatch(UserActions.SetUserChartMonth(response))       
    }
}
  
export const fetchGetChartByyear = ():ThunkAction<void , RootState , unknown, AnyAction> => {
    return async(dispatch,getState)=>{
            const response:IUserChart[] = await GetByYear();            
            dispatch(UserActions.SetUserChartYar(response))       
    }
}

export const fetchGetChartByday = ():ThunkAction<void , RootState , unknown, AnyAction> => {
    return async(dispatch,getState)=>{
            const response:IUserChart[] = await GetByDay();            
            dispatch(UserActions.SetUserChartDay(response))       
    }
}

export const fetchGetAllUsers = ():ThunkAction<void , RootState , unknown, AnyAction> => {
    return async(dispatch,getState)=>{
            const response:UserListToDash[] = await GetUserList();            
            dispatch(UserActions.SetUserChartList(response))       
    }
}


