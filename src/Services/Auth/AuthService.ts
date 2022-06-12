import http from '../Config';
import { UserLogInRequestInterface, IUserAuthenticate } from '../../Models/AuthModels';



/************************************************************************************************
 * **********************************************************************************************
 *                                              LOGIN 
 * **********************************************************************************************
 * **********************************************************************************************/



//////////////////////////////////////
//              LOGIN
//////////////////////////////////////

 export const PostLogin = async (filtros : UserLogInRequestInterface) => {
    try {
       let data:IUserAuthenticate | any= await http.post('https://getdataforcrud20220612122900.azurewebsites.net/PostLogIn' , filtros);
       if(String(data.data.token.length > 0))
        SetUserAuthenticate(data.data)
       return await data.data;
    } catch (error) {
        console.log(error);        
    }
} 





///////////////////////////////////////
//                  LOG OUT
//////////////////////////////////////


export const LogOutClient = () => {
    try {
        localStorage.removeItem('Token');
        localStorage.removeItem('Usuario');
        return window.location.replace('/');
    } catch (error) {
        console.log(error);
    }
}

export const SetUserAuthenticate = (User:IUserAuthenticate | any) => {
    try {
        localStorage.setItem('Usuario', JSON.stringify(User));
        localStorage.setItem('Token',User.token);
        return window.location.replace('/Dashboard');
    } catch (error) {
        console.log(error);
    }
}







/************************************************************************************************
 * **********************************************************************************************
 *                                            LOGIN 
 * **********************************************************************************************
 * **********************************************************************************************/






