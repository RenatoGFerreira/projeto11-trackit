import { ScreenContainer } from "./StyledLoginPage"
import { StyledLink } from "../../components/StyledLink"
import { StyledForm } from "../../components/StyledForm"
import { StyledInput } from "../../components/StyledInput"
import { StyledButton } from "../../components/StyledButton"
import logo from "../../assets/img/logo.svg"
import { useNavigate } from "react-router-dom"


export default function LoginPage({ setDados }) {
    const navigate = useNavigate()

    function handleLogin(e){
        e.preventDefault()

        navigate("/hoje")

    }

    return (
        <ScreenContainer>
            <img src={logo} alt="Logotipo TrackIt" />
            <StyledForm onSubmit={handleLogin}>
                <StyledInput placeholder="email" disabled={false}/>
                <StyledInput placeholder="senha" disabled={false}/>
                <StyledButton disabled={false}>Entrar</StyledButton>
            </StyledForm>
            <StyledLink to="/cadastro">
                <p>Não tem conta? Cadastre-se!</p>
            </StyledLink>
        </ScreenContainer>
    )
}
