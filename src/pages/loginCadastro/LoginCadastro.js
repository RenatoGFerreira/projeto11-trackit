import logo from "../../assets/logo/logo.png"
import { ScreenContainer, Form } from "./StyledLoginCadastro"
import { Link } from "react-router-dom"
export default function Login(){
    return(
        <ScreenContainer>
        <img src={logo} alt="TrackIt, logo"/>
        <Form>
            <input type="text" placeholder="email"/>
            <input type="text" placeholder="senha"/>
            <input type="text" placeholder="nome"/>
            <input type="text" placeholder="foto"/>
            <input type="submit" value="Entrar"/>
            <Link to={"/"}>
                <p>Já tem uma conta? Faça login</p>
            </Link>
        </Form>
        </ScreenContainer>
    )
}