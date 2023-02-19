import { ScreenContainer } from "./StyledLoginPage"
import { StyledLink } from "../../components/StyledLink"
import { StyledForm } from "../../components/StyledForm"
import { StyledInput } from "../../components/StyledInput"
import { StyledButton } from "../../components/StyledButton"
import logo from "../../assets/img/logo.svg"
import { useNavigate } from "react-router-dom"
import { useState, useContext } from "react"
import apiAuth from "../../services/apiAuth"
import { UserContext } from "../../context/UserContext"
import {ThreeDots} from "react-loader-spinner"


export default function LoginPage() {
    const navigate = useNavigate()
    const [form, setForm] = useState({ email: "", password: "" })
    const [isLoading, setIsLoading] = useState(false)
    const { setUser } = useContext(UserContext)

    function handleForm(e) {
        setForm({ ...form, [e.target.name]: e.target.value })
    }


    function handleLogin(e) {
        e.preventDefault()
        setIsLoading(true)

        apiAuth.login(form)
            .then(res => {
                const { id, name, image, token } = res.data
                setUser({ id, name, image, token })
                setIsLoading(false)
                navigate("/hoje")
            })
            .catch(err => {
                setIsLoading(false)
                alert(err.response.data.message)
            })
    }

    return (
        <ScreenContainer>
            <img src={logo} alt="Logotipo TrackIt" />
            <StyledForm onSubmit={handleLogin}>
                <StyledInput
                    type="email"
                    name="email"
                    placeholder="email"
                    disabled={isLoading}
                    required
                    value={form.email}
                    onChange={handleForm}
                />
                <StyledInput
                    type="password"
                    name="password"
                    placeholder="senha"
                    disabled={isLoading}
                    required
                    value={form.password}
                    onChange={handleForm}
                />
                <StyledButton type="submit" disabled={isLoading}>
                    {isLoading? (
                        <ThreeDots width={50} height={50} color="#fff"/>
                    ):(
                        "Entrar"
                    )}
                </StyledButton>
            </StyledForm>
            <StyledLink to="/cadastro">
                <p>Não tem conta? Cadastre-se!</p>
            </StyledLink>
        </ScreenContainer>
    )
}
