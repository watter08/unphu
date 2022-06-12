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


  /*************************************************************
 * IS VALID PASSWORD
 * **********************************************************/

   export const isValidPassword = (pass : string)  => {
    const regEx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    return (pass && pass.match(regEx)) ? true : false;
  }


/*************************************************************
 * IS VALID DNI
 * **********************************************************/
  export const IsValidDni = (str : string) => {
    var regex = new RegExp("^[0-9]{3}-?[0-9]{7}-?[0-9]{1}$");
    if (!regex.test(str)) 
        return false;    
    str = str.replace(/-/g, '');
    return CheckDigit(str);
}

function CheckDigit(str:string) {
    var sum = 0;
    for (var i = 0; i < 10; ++i) {
        var n = ((i + 1) % 2 != 0 ? 1 : 2) * parseInt(str.charAt(i));
        sum += (n <= 9 ? n : n % 10 + 1);
    }
    var dig = ((10 - sum % 10) % 10);
    return dig == parseInt(str.charAt(10));
}


/*************************************************************
 * IF VALID PHONE
 * **********************************************************/
  
 export function isValidPhone(str : string) {
  const regEx = /^(\()?\d{3}-?(\))?\d{3}-?\d{4}$/;
  return (str && str.match(regEx)) ? true : false;
}


 /*************************************************************
 * IS VALID EMAIL
 * **********************************************************/

  export const isValidEmail = (str:string)   => {
    const regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    return (str && str.match(regEx)) ? true : false;
  }


/*************************************************************
 * IS VALID AGE
 * **********************************************************/

    export const IsAnAdult = (Fecha:Date , MinAge : number)   => {
      let hoy = new Date();
      let cumpleanos = new Date(Fecha);
      let edad = hoy.getFullYear() - cumpleanos.getFullYear();
      let m = hoy.getMonth() - cumpleanos.getMonth();
      if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) 
          edad--;
      return (edad > MinAge);
    }
  