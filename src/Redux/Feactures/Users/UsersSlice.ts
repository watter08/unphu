import { createSlice , PayloadAction } from '@reduxjs/toolkit'
import { IUserListDTO  } from '../../../Models/UserListModels';




export interface UserAllInterface{
  UserList : IUserListDTO[];
}

const InitialTodoState:UserAllInterface = {
    UserList:[]
}

const UserSlice = createSlice({
    name : 'UserList',
    initialState:InitialTodoState,
    reducers:{
      SetUserList(state , action : PayloadAction<IUserListDTO[]>){
            state.UserList = action.payload;
        },
    }
})

export default UserSlice;