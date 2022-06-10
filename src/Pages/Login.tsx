import { LoaderPacmanComponent, InputComponent } from "../Components";
import { useForm } from "../Hooks";
import { GetUuId } from "../Libs/Utility";
import { UserLogInRequestInterface } from "../Models/AuthModels";


const LoginPageComponent = () => {
  interface InitialLoginState {
    Formulario:UserLogInRequestInterface,
    Ids:UserLogInRequestInterface
  }

  const InitialState:InitialLoginState = {
    Formulario : {
      Usuario:'',
      Password:''
    },
    Ids:{
      Usuario:GetUuId(),
      Password:GetUuId()
    }
  }
  


  const Validations = Object.freeze({
    Formulario:{
    Usuario: (user : string) => String(user).length < 4 ? 'Usuario Con Caracteres Insuficientes' : '',
    Password: (clave:string) => String(clave).length < 6 ? 'Contraseña Con Caracteres Insuficientes' : ''
}})

  const handleSubmitResquest = () => {}

  const { handleChangeInput,  handleSubmit,  errors, state, setState, setStateErrors } = useForm<InitialLoginState>(InitialState, Validations, handleSubmitResquest);


  
    return(
        <>
        <LoaderPacmanComponent />
        
<section className="LoginSection background-radial-gradient overflow-hidden">
  <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
    <div className="row gx-lg-5 align-items-center mb-5">
      <div className="col-lg-6 mb-5 mb-lg-0" style={{zIndex: 10}}>
        <h1 className="my-5 display-5 fw-bold ls-tight" style={{color: "hsl(218, 81%, 95%)"}}>
          Inicio De Sesion <br />
          <span style={{color: "hsl(218, 81%, 75%)"}}> Administrativo</span>
        </h1>
        <p className="mb-4 opacity-70" style={{color: "hsl(218, 81%, 85%)"}}>
          Si deseas ingresar a tus dashboard administrativo, <br />
          Primero tendras que Loguearte al sistema....
        </p>
      </div>

      <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
        <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
        <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

        <div className="card bg-glass">
          <div className="card-body px-4 py-5 px-md-5">
            <form>
              <div className="row">
                <div className="col-md-6 mb-4">
                  <InputComponent
                    Label="Usuario"
                    Name="Usuario"
                    Value={state.Formulario.Usuario}
                    ControlId={state.Ids.Usuario}
                    TextId={state.Ids.Usuario}
                    OnChange={handleChangeInput}
                    Type="text"
                    key={state.Ids.Usuario}
                    Errors={errors}
                  />
                </div>

                <div className="col-md-6 mb-4">
                  <InputComponent
                    Label="Contraseña"
                    Name="Password"
                    Value={state.Formulario.Password}
                    ControlId={state.Ids.Password}
                    TextId={state.Ids.Password}
                    OnChange={handleChangeInput}
                    Type="password"
                    key={state.Ids.Password}
                    Errors={errors}
                  />
                </div>

              <button type="submit" className="btn btn-primary btn-block mb-4">
                Ingresar
              </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
        </>
    )
}




export default LoginPageComponent;