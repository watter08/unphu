import { createSlice , PayloadAction } from '@reduxjs/toolkit'



export interface UserSuccessInterface{
  Id:number;
  Token:string;
  Usuario:string;
  TipoUsuario:number;
  NombreCompleto:string;
  CorreoElectronico:string;
}

export interface UserAllInterface{
  UserSuccess : UserSuccessInterface;
}

const InitialTodoState:UserAllInterface = {
    UserSuccess:{
      Id:0,
      Token:'',
      Usuario:'',
      NombreCompleto:'',
      CorreoElectronico:'',
      TipoUsuario:0
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