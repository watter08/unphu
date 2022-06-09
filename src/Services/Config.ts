import axios from "axios";
const  Enviroment = {RutaApi : "" } ;

axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';
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
  baseURL: String(Enviroment.RutaApi),
  headers: {
    "Content-type": "application/json",
    "Access-Control-Allow-Origin": "*"
  }
});



const MethodPost = async (url : string , data : any) =>  await( axios.post(url , {...data , } , 
{
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


