import logo from "../../assets/logo/logo.png"
import { ScreenContainer, Form, TitleInput, InputContainer, SaveButton } from "./StyledLogin"
import { Link, useNavigate } from "react-router-dom"
import { useContext, useState } from "react"
import axios from "axios"
import loadingReto from "../../assets/loading/loadingGif.gif"
// import { AuthContext } from "../../context/AuthContext"

export default function Login({setDados}) {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    // const {setSetup} = useContext(AuthContext)


    function doLogin(e){
        e.preventDefault()
        const loginTrackIt = {email: email, password: password}

        const url_post = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login"
        const promise = axios.post(url_post, loginTrackIt)

        promise.then(res => {
            setDados(res.data)

            // setSetup(res.data.token)
            // localStorage.setItem("token",res.data.token)
            navigate("/habitos")
        })
        promise.catch(err => {
            console.log(err.response.data)
            setLoading(false)
            alert(`[ERRO] ${err.response.data.message}`)
        })
        setLoading(true)

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
                <SaveButton disabled = {loading}>{loading ? <img src={loadingReto} alt="loading"/> : "Entrar"}</SaveButton>

                <Link to={"/cadastro"}>
                    <p>Não tem conta? Cadastre-se!</p>
                </Link>
            </Form>
            </form>
        </ScreenContainer>
    )
}
