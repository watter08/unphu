import { Form } from 'react-bootstrap';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { isInvalidInput } from '../../Libs/Utility';
import { InputComponentInterface } from '../../Models/UtiityModels';



const InputComponent = ({
    Label = '',
    Name = '',
    LabelMuted = '',
    Value = '',
    PlaceHolder = '',
    HtmlFor = '',
    Type = 'text',
    ControlId = '',
    TextId = '',
    OnClick = () => { },
    OnChange = () => { },
    OnEnter = () => { },
    Errors = {},
    IsDisable = false,
    Min = Number.MIN_VALUE,
    Max = Number.MAX_VALUE,
    InPutClassName = ''
}: InputComponentInterface) => {

    

    return (
        <div className={"form-group text-center p-1"}>
            {String(Label).length > 0 && (<Form.Label className={`${InPutClassName}`} htmlFor={HtmlFor ? HtmlFor : Name}>{Label}</Form.Label>)}
            <Form.Control
                className={`form-control ${isInvalidInput(Errors, Name) ? "is-invalid" : "" } `}
                type={Type}
                name={Name}
                value={Value}
                id={ControlId}
                placeholder={PlaceHolder}
                onClick={OnClick}
                onChange={OnChange}
                onKeyPress={(e) => (e.code === 'Enter' || e.key === 'Enter') ? OnEnter() : () => { }}
                disabled={IsDisable}
                min={Min}
                max={Max}
                color='danger'
            />                     
                
                <ErrorMessage 
                Errors={Errors}
                Name={Name}
                />

            <Form.Text className="H-7" id={TextId} muted>{LabelMuted}</Form.Text>

        </div>
    )
}



export default InputComponent;