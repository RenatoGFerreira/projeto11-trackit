import logo from "../../assets/logo/logo.png"
import { ScreenContainer, Form, TitleInput, InputContainer, SaveButton } from "./StyledLogin"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from "axios"

export default function Login() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    function doLogin(e){
        e.preventDefault()
        const nomeESenha = {email: email, password: password}
        console.log(nomeESenha)

        const url_post = "COLOCAR LINK DO API"
        const promise = axios.post(url_post, nomeESenha)        //Precisa enviar os dois juntos

        promise.then(res => {
            console.log(res.data)
            navigate("/habitos")
        })
        promise.catch(err => console.log(err.response.data))

        setEmail("")
        setPassword("")
    }


    return (
        <ScreenContainer>
            <img src={logo} alt="TrackIt, logo" />
            <form onSubmit={doLogin}>
            <Form>
                <InputContainer>
                    <TitleInput htmlFor="email"></TitleInput>
                    <input type="email" placeholder="email" id="email" value={email} onChange={e => setEmail(e.target.value)} required />
                </InputContainer>

                <InputContainer>
                    <TitleInput htmlFor="password"></TitleInput>
                    <input type="password" placeholder="password" id="password" value={password} onChange={e => setPassword(e.target.value)} required/>
                </InputContainer>
                <SaveButton>Entrar</SaveButton>

                <Link to={"/cadastro"}>
                    <p>Não tem conta? Cadastre-se!</p>
                </Link>
            </Form>
            </form>
        </ScreenContainer>
    )
}