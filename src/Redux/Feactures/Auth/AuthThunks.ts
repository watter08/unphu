import {  createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';
import {  PostLoginClient } from "../../../Services/Auth/AuthService";







  


  /************************************************************************************************
 * **********************************************************************************************
 *                                       LOGIN CLIENTE 
 * **********************************************************************************************
 * **********************************************************************************************/





   export const fetchPostLoginClient = createAsyncThunk(
    `Authenticate/fetchPostLoginClient`,
    async (filtro : any) => {
      try {
        const response = await PostLoginClient(filtro);
        if(String(response?.Message).length > 3 && response?.Data?.Success === true ){   
        toast.info(response.Message);
        localStorage.setItem('Token' , response?.Data?.Token);
        localStorage.setItem('CodigoCliente' , response?.Data?.CodigoCliente);
        window.location.replace('/Dashboard');
        }
        else if(String(response?.Message).length > 3 && response?.Data?.Success === false ){
        toast.warn(response.Message);
        }
        return response;
      } catch (error) {
        console.error("Post Login Client", error);
      }
    }
  );






  /************************************************************************************************
 * **********************************************************************************************
 *                                      END LOGIN CLIENTE 
 * **********************************************************************************************
 * **********************************************************************************************/
