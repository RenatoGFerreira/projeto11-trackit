import logo from "../../assets/img/logo.svg"
import { ScreenContainer } from "./StyledSignUpPage"
import { StyledInput } from "../../components/StyledInput"
import { StyledButton } from "../../components/StyledButton"
import { StyledLink } from "../../components/StyledLink"
import { StyledForm } from "../../components/StyledForm"
import { useNavigate } from "react-router-dom"


export default function SignUpPage() {

    const navigate = useNavigate()

    function handleSignUp(e){
        e.preventDefault()
        navigate("/")
    }

    return (
        <ScreenContainer>
            <img src={logo} alt="TrackIt, logo" />
            <StyledForm onSubmit={handleSignUp}> 
                <StyledInput placeholder="email" disabled={false}/>
                <StyledInput placeholder="senha" disabled={false}/>
                <StyledInput placeholder="nome" disabled={false}/>
                <StyledInput placeholder="foto" disabled={false}/>
                <StyledButton disabled={false}>Cadastrar</StyledButton>
            </StyledForm>
            <StyledLink to="/">
                Já tem uma conta? Faça Login!
            </StyledLink>
        </ScreenContainer>
    )
}