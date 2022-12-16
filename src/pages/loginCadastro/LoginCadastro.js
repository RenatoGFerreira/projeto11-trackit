import logo from "../../assets/logo/logo.png"
import { ScreenContainer, Form, TitleInput, InputContainer, SaveButton } from "./StyledLoginCadastro"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from "axios"

export default function Login() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [image, setImage] = useState("")
    const [name, setName] = useState("")
    const navigate = useNavigate()

    function doLogin(e){
        e.preventDefault()
        const cadastroTrackIt = {email: email, name: name, image: image, password: password}
        console.log(cadastroTrackIt)

        const url_post = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up"
        const promise = axios.post(url_post, cadastroTrackIt)        //Precisa enviar os dois juntos

        promise.then(res => {
            console.log(res.data)
            navigate("/")
        })
        promise.catch(err => console.log(err.response.data))

        setEmail("")
        setPassword("")
        setImage("")
        setName("")
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

                <InputContainer>
                    <TitleInput htmlFor="name"></TitleInput>
                    <input type="text" placeholder="nome" id="name" value={name} onChange={e => setName(e.target.value)}/>
                </InputContainer>

                <InputContainer>
                    <TitleInput htmlFor="foto"></TitleInput>
                    <input type="url" placeholder="foto" id="image" value={image} onChange={e => setImage(e.target.value)}/>
                </InputContainer>

                <SaveButton>Cadastrar</SaveButton>

                <Link to={"/"}>
                    <p>Ja tem uma conta? Faça Login!</p>
                </Link>
            </Form>
            </form>
        </ScreenContainer>
    )
}