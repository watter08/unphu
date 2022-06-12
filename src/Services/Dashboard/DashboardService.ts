import http from '../Config';
import { IUserChart } from '../../Models/UtiityModels';
import { IUserListToDash,UserListToDash } from '../../Models/UserListModels';




export const GetByMonth = async () => {
    try {
        let datos: any = await http.get('https://getdataforcrud20220612122900.azurewebsites.net/api/userform/statisticdata/month');
        let Response: IUserChart[] | any =[{...datos.data}];
        return await Response;
    } catch (error) {
        console.log(error);
        return []
    }
}



export const GetByYear = async () => {
    try {
        let datos: any = await http.get('https://getdataforcrud20220612122900.azurewebsites.net/api/userform/stadisticdata/year');
        let Response: IUserChart[] | any =[{...datos.data}];
        return await Response;
    } catch (error) {
        console.log(error);
        return []
    }
}

export const GetByDay = async () => {
    try {
        let datos: any = await http.get('https://getdataforcrud20220612122900.azurewebsites.net/api/userform/stadisticdata/day');
        let Response: IUserChart[] | any =[{...datos.data}];
        return await Response;
    } catch (error) {
        console.log(error);
        return []
    }
}

export const GetUserList = async () => {
    try {
       let datos :any  = await http.get('https://getdataforcrud20220612122900.azurewebsites.net/api/userform/getformdata');
        let Response:IUserListToDash[] | any = datos?.data.length > 0 ? datos.data.map((val:any) => (new UserListToDash({...val}))) : [];
       return await Response;
    } catch (error) {
        console.log(error);       
        return [] 
    }
} 