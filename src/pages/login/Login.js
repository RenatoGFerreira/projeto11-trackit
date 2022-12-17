import logo from "../../assets/logo/logo.png"
import { ScreenContainer, Form, TitleInput, InputContainer, SaveButton } from "./StyledLogin"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from "axios"

export default function Login({setDados}) {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    function doLogin(e){
        e.preventDefault()
        const loginTrackIt = {email: email, password: password}
        console.log(loginTrackIt)

        const url_post = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login"
        const promise = axios.post(url_post, loginTrackIt)        //Precisa enviar os dois juntos

        promise.then(res => {
            setDados(res.data)
            navigate("/habitos")
        })
        promise.catch(err => {
            console.log(err.response.data)
            alert("[ERRO] Senha ou Usuário incorreto.")
        })

        setEmail("")
        setPassword("")
    }

    // if (!movie) {
    //     return (
    //         <Carregando>Loading...</Carregando>
    //     )
    // }

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