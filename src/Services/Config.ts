import axios, { Axios } from "axios";
const  Enviroment = {RutaApi : "http://getdataforcrud20220612122900.azurewebsites.net/" } ;


// For GET requests
axios.interceptors.request.use(
  (req) => {
     return req;
  }, (err) => {
    console.log(err);
     return Promise.reject(err);
  }
);

// For POST requests
axios.interceptors.response.use(
  (res) => {
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
  baseURL: "https://getdataforcrud20220612122900.azurewebsites.net/",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    'Access-Control-Allow-Methods': 'DELETE, PUT, GET, POST,OPTIONS',
    "Access-Control-Allow-Headers": "Content-Type, Authorization, Content-Length, X-Requested-With, Accept",
  }
});



const MethodPost = async (url : string , data : any) =>  await( axios.post(url , {...data , } , 
{
  headers: await GetHeadersConfig(),
}));

const GetHeadersConfig = async () => {
  return await {
    "Accept": "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    'Access-Control-Allow-Methods': 'DELETE, PUT, GET, POST,OPTIONS',
    "Access-Control-Allow-Headers": "Content-Type, Authorization, Content-Length, X-Requested-With, Accept",
    
  }
}

export default { 
  get : axios.get,
  post : MethodPost,
  put : axios.put,
  delete : axios.delete
};


