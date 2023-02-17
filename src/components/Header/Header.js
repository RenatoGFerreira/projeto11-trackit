import { ScreenContainer, Avatar } from "./StyledHeader"
import logo from "../../assets/img/logo-mini.svg"
import { Link } from "react-router-dom"

export default function Header() {
    return (
        <ScreenContainer>
            <Link to="/hoje">
            <img src={logo} alt="TrackIt logo"/>
            </Link>
            <Avatar src="https://i.pinimg.com/236x/44/e5/e2/44e5e2b62c321c471e87df1b169606b4--music-notes-television.jpg" alt="ProfileUser"/>
        </ScreenContainer>
    )
}