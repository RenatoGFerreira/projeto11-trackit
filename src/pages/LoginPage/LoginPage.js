import { ScreenContainer } from "./StyledLoginPage"
import { StyledButton } from "../../components/StyledButton"
import { StyledForm } from "../../components/StyledForm"
import { StyledInput } from "../../components/StyledInput.js"
import { StyledLink } from "../../components/StyledLink.js"

import logo from "../../assets/img/logo.svg"
import { useNavigate } from "react-router-dom"
import apiAuth from "../../services/apiAuth"
import { useContext, useState } from "react"
import { UserContext } from "../../context/UserContext"
import { ThreeDots } from "react-loader-spinner"


export default function LoginPage() {
    const [form, setForm] = useState({ email: "", password: "" })
    const { setUser } = useContext(UserContext)
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false)

    function handleForm(e) {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    function handleLogin(e) {
        e.preventDefault()
        setIsLoading(true)

        apiAuth.login(form)
            .then(res => {
                const { id, name, image, token } = res.data
                console.log(res.data)
                setUser({ id, name, image, token })
                setIsLoading(false)
                //localStorage.setItem("token", token)
                localStorage.setItem("user", JSON.stringify({id, name, image, token}))
                navigate("/hoje")
            })
            .catch(err => {
                setIsLoading(false)
                alert(err.response.data.message)
            })
    }

    return (
        <ScreenContainer>
            <img src={logo} alt="Logotipo" />
            <StyledForm onSubmit={handleLogin}>
                <StyledInput
                    name="email"
                    type="email"
                    placeholder="email"
                    disabled={false}
                    value={form.email}
                    onChange={handleForm}
                    required
                />
                <StyledInput
                    name="password"
                    type="password"
                    placeholder="senha"
                    disabled={false}
                    value={form.password}
                    onChange={handleForm}
                    required
                />
                <StyledButton type="submit" disabled={isLoading}>
                    {isLoading ? (
                        <ThreeDots width={50} height={50} color="#fff" />
                    ) : "Entrar"}
                </StyledButton>
            </StyledForm>
            <StyledLink to="/cadastro">
                Não tem uma conta? Cadastre-se!
            </StyledLink>
        </ScreenContainer>
    )
}