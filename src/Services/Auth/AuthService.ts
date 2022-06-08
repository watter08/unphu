import http from '../Config';
const  Enviroment = {RutaApiAuth : "" } ;

const GetFullRoute = (ruta : string) =>  String(`${Enviroment.RutaApiAuth}${ruta}`);























/************************************************************************************************
 * **********************************************************************************************
 *                                              LOGIN 
 * **********************************************************************************************
 * **********************************************************************************************/


//////////////////////////////////////
//              LOGIN
//////////////////////////////////////

 export const PostLoginClient= async (filtros : Object | any[]) => {
    try {
       const data = await http.post(GetFullRoute('UserSignIn'), filtros);
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
        localStorage.removeItem('CodigoCliente');
        return window.location.replace('/');
    } catch (error) {
        console.log(error);
    }
}








/************************************************************************************************
 * **********************************************************************************************
 *                                            LOGIN 
 * **********************************************************************************************
 * **********************************************************************************************/







 async function GetData(data : Object | any[])  {
    try {
        return await data ? data : [];
    } catch (error) {
        return []
    }
}


