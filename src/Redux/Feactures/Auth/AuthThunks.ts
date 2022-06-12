import { UserLogInRequestInterface } from '../../../Models/AuthModels';
import UserSlice, { UserSuccessInterface }  from "./AuthSlice";
import { AnyAction , ThunkAction } from "@reduxjs/toolkit";
import { PostLogin } from '../../../Services/Auth/AuthService'
import { RootState } from '../../Store';



export const UserActions = UserSlice.actions


export const fetchLogInUser = (UserData:UserLogInRequestInterface ):ThunkAction<void , RootState , unknown, AnyAction> => {
    return async(dispatch,getState)=>{
            const response:UserSuccessInterface = await PostLogin(UserData);
            dispatch(UserActions.SetUserSuccess(response))       
    }
}
  


