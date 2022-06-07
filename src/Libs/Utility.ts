import { v4 as uuid } from 'uuid';
import { toast } from 'react-toastify';



/*************************************************************
 * GET UNIQUE ID OF KEY
 * **********************************************************/

    export const GetUuId = () => { return String(uuid()) };


