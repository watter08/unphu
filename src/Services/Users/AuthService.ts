import http from '../Config';
import { IUserListDTO , UserListDto } from '../../Models/UserListModels';




 export const GetUserList = async () => {
    try {
       let datos :any  = await http.get('https://getdataforcrud20220612122900.azurewebsites.net/api/userform/getformdata');
        let Response:IUserListDTO[] | any = datos?.data.length > 0 ? datos.data.map((val:any) => (new UserListDto({...val , nombreCompleto : String(val.nombre + " " + val.primerApellido + " " + val.segundoApellido)}))) : [];
       return await Response;
    } catch (error) {
        console.log(error);    
        return []    
    }
} 










