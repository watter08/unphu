import axios from "axios";
const  Enviroment = {RutaApi : "" } ;


const GetFullRoute = (ruta : string) =>  String(`${Enviroment.RutaApi}${ruta}`);


axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';
// For GET requests
axios.interceptors.request.use(
  (req) => {
     // Add configurations here
     return req;
  },
  (err) => {
    console.log(err);
     return Promise.reject(err);
  }
);

// For POST requests
axios.interceptors.response.use(
  (res) => {
     // Add configurations here
     if (res.status === 201) {
        // console.log('Posted Successfully');
     }
     return res;
  },
  (err) => {
    console.log(err);
     return Promise.reject(err);
  }
);


axios.create({
  baseURL: String(Enviroment.RutaApi),
  headers: {
    "Content-type": "application/json",
    "Access-Control-Allow-Origin": "*"
  }
});



const SetCsrfToken = async () => {
  try {
    const data = await axios.get(GetFullRoute('GetUniqueCsrfTokensWith_Banana_Pantera'));
    localStorage.setItem("CSRF_TOKEN" ,  data.data.Data.csrf_token ? data.data.Data.csrf_token : 'Invalid_Token');
} catch (error) {
    console.log(error);
}
  }

  
// SetCsrfToken();

const MethodPost = async (url : string , data : any) =>  await( axios.post(url ,
  {...data , 
} , {
  headers: await GetHeadersConfig(),
}));

const GetHeadersConfig = async () => {
  return await {
    "Access-Control-Allow-Origin": "*",
    'Access-Control-Allow-Methods': 'DELETE, PUT, GET, POST',
    "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
    
  }
}



export default { 
  get : axios.get,
  post : MethodPost,
  put : axios.put,
  delete : axios.delete
};


