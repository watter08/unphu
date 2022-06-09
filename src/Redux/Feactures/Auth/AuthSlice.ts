import { createSlice , PayloadAction } from '@reduxjs/toolkit'



export interface UserSuccessInterface{
  Token:string;
  Usuario:string;
  CodigoUsuario:string;
  TipoUsuario:string;
}

export interface UserAllInterface{
  UserSuccess : UserSuccessInterface;
}


const InitialTodoState:UserAllInterface = {
    UserSuccess:{
      Token:'',
      Usuario:'',
      CodigoUsuario:'',
      TipoUsuario:''
    }
}

const UserSlice = createSlice({
    name : 'User',
    initialState:InitialTodoState,
    reducers:{
      SetUserSuccess(state , action : PayloadAction<UserSuccessInterface>){
            state.UserSuccess = action.payload;
        },
    }
})

export default UserSlice;