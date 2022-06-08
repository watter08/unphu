import {    createSlice,    PayloadAction  } from "@reduxjs/toolkit";  
import { useSelector } from "react-redux";
import * as AuthenticateThunks from "./AuthThunks";
import { LoginInitialState ,LoginInitialStateInterface  } from '../../../Models/AuthModels';



  //Thunks
  
  const {
    fetchPostLoginClient,
  } = AuthenticateThunks;
  
  //Initial State
  const initialState  : LoginInitialStateInterface = new LoginInitialState({}); 

  
  // Slice Reducer
  
  const AuthenticateSlice = createSlice({
    name: "Authenticate",
    initialState,
    reducers: {
      ClearedLogin(state, action){
        state.Login = initialState.Login;
      },
    },
    extraReducers: {   

       ////////////////////////////////////////
      //              LOGIN
     /////////////////////////////////////////


      [fetchPostLoginClient.pending.toString()]: (state , action ) => {
        state.Login.MessageStatus = initialState.Loading;
      },
      [fetchPostLoginClient.fulfilled.type]: (state , action) => {
        state.Login.Data = action.payload;
        state.Login.MessageStatus = initialState.Loaded;
      },



        ////////////////////////////////////////
       //          END LOGIN
      ////////////////////////////////////////



    },
  });















///////////////////////////////////////////////////////////////////////////////////////////////////
//                                          TB NEWLETTER
//////////////////////////////////////////////////////////////////////////////////////////////////



export const SelectorPostLoginClient = (state : any ) =>  state.Authenticate.Login.Data;
export const SelectorPostLoginClientStatus = (state : any ) => state.Authenticate.Login.MessageStatus;



///////////////////////////////////////////////////////////////////////////////////////////////////
//                                          END TB NEWLETTER
//////////////////////////////////////////////////////////////////////////////////////////////////










  
  export default AuthenticateSlice.reducer;
  
  export const {
    ClearedLogin,
  } = AuthenticateSlice.actions;
  
  //thunk functions
  export { AuthenticateThunks  };
  export { AuthenticateSlice };
  

