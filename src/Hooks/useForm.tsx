import { data } from "jquery";
import { useState } from "react";
import { Interface } from "readline";


function useForm<T>(initialState: T ,  validations = {}, onSubmit = (state : any) => { })  {



    /////////////////////////////////////////////////////////////////////////////
    //                               INITIAL STATE                             //
    /////////////////////////////////////////////////////////////////////////////
    const [state, setState] = useState(initialState);
    const [errors, setStateErrors] = useState({});
    /////////////////////////////////////////////////////////////////////////////
    //                              UTILITY FUNCTIONS                          //
    /////////////////////////////////////////////////////////////////////////////



    const getInputValue = (input:any) => (input ? input.type === "checkbox" ? input.checked ? 1 : 0 : input.type === "date" ? input.value.toString() : input.type === "file" ? handleFileInput({ input }) : input.value : '');



    /****************************************************************************************************
     *                                UTILITY FUNCTION FOR NORMAL FORM
     * **************************************************************************************************/



    const getFormErrorMessages = (data : any , validations: any ) => {
        const validationErrors:any = {};
        for (let validationName in validations) {
            let errorMessage = validations[validationName](data[validationName]);
            if (errorMessage) {
                validationErrors[validationName] = errorMessage;
            }
        }
        return validationErrors;
    };




    const handleChangeInput = ({ currentTarget: input }:any) => {
        const value = getInputValue(input);
        const { name } = input;
        const errorMessage = getInputErrorMessage(name ,value, validations);
        
        const newErrors:any = { ...errors };
        if (errorMessage) {
            setStateErrors((errors) => ({ ...newErrors, [name]: errorMessage }));
        } else {
            delete newErrors[name];
            setStateErrors((errors) => ({ ...newErrors, [name]: errorMessage }));
        }
        setState((data: T | any ) => ({ ...data, ...[data.Formulario[name] = value] }));
    };

    const getInputErrorMessage = (name :string , value :string | number | boolean, validations : Object | any) => {
        if (!validations?.Formulario[name]) return {};
        const errorsMessage = validations.Formulario[name](value);
        return errorsMessage;
    };



    const handleSubmit = () => {
        const formErrorMessages = getFormErrorMessages(state, validations);
        const errorMessagesCount = Object.entries(formErrorMessages).length;
        if (errorMessagesCount > 0) {
            return setStateErrors(formErrorMessages);
        }
        setStateErrors({});
        onSubmit(state);
    };




    /****************************************************************************************************
     *                                END TILITY FUNCTION FOR NORMAL FORM
     * **************************************************************************************************/


     const handleFileInput = (input : any) => {
        let data:any = { ...state };
        const nombre =  input.name;
        let reader = new FileReader();
        reader.readAsDataURL(input.files[0]);
        reader.onload = function () {
         data[nombre] = reader.result;
            setState(data);
        };
        reader.onerror = function (error) {
            console.log('Error: ', error);
        };
    };

    return {
        handleChangeInput,
        handleSubmit,
        errors,
        state,
        setState,
        setStateErrors,
    };
};

export default useForm;