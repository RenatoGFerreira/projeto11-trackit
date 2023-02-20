import { ScreenContainer, Avatar } from "./StyledHeader"
import logo from "../../assets/img/logo-mini.svg"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { UserContext } from "../../context/UserContext"


export default function Header() {
    const { user } = useContext(UserContext)
    
    return (
        <ScreenContainer>
            <Link to="/hoje">
                <img src={logo} alt="TrackIt logo" />
            </Link>
            <Avatar src={user.image} alt="ProfileUser" />
        </ScreenContainer>
    )
}