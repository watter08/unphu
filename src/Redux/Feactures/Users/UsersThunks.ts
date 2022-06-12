import { IUserListDTO  } from '../../../Models/UserListModels';
import UserSlice from "./UsersSlice";
import { AnyAction , ThunkAction } from "@reduxjs/toolkit";
import { GetUserList } from '../../../Services/Users/AuthService'
import { RootState } from '../../Store';



export const UserActions = UserSlice.actions


export const fetchGetUserList = ():ThunkAction<void , RootState , unknown, AnyAction> => {
    return async(dispatch,getState)=>{
            const response:IUserListDTO[] = await GetUserList();            
            dispatch(UserActions.SetUserList(response))       
    }
}
  


