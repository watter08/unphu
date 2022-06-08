import { v4 as uuid } from 'uuid';
import { ErrorsInterface } from '../Models/UtiityModels'
import { toast } from 'react-toastify';




/*************************************************************
 * GET UNIQUE ID OF KEY
 * **********************************************************/

    export const GetUuId = () => { return String(uuid()) };


/*************************************************************
 * VALIDAR SI EL INPUT TIENE ERRORES DE VALIDACION
 * **********************************************************/

 export const isInvalidInput = (errors = null, name : string)   => {  return errors && errors[name] ? true : false };

 export const isInvalidInputChild = (errors : ErrorsInterface , name : string)   => {  
     let bole = Object.entries(errors).length <= 0 ? false :  errors && errors?.Formulario[name.split('.')[1]] ? true : false ;
     return bole;
 
 };
