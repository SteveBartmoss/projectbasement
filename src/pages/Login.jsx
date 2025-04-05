import { Btn } from "../ui/btn/Btn";
import { DivCol, DivRow } from "../ui/containers/Containers";
import { TextField } from "../ui/textField/TextField";
import './login.css'

export function Login() {
    return (
        <DivRow>
            <img className="img-login" src="/assets/fogforest.png" />
            <DivCol>
                <div>
                    <h1>Bienvenido a Basement</h1>

                    <p>Inicia sesion para compartir con los demas</p>

                    <TextField />

                    <TextField />

                    <Btn>Iniciar sesion</Btn>
                </div>
            </DivCol>
        </DivRow>
    )
}