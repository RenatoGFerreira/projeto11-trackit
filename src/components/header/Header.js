import { ScreenContainer, LogoContainer, ProfileContainer } from "./StyledHeader"
import trackit from "../../assets/trackit.png"
//import perfil from "../../assets/exemplo_perfil.jpg"
import { ProfileContext } from "../../context/ProfileContext"

export default function Header() {
    

    return (
        <ScreenContainer>
            <LogoContainer>
                <img src={trackit} alt=" TrackIt" />
            </LogoContainer>
            <ProfileContainer>
                <img src={ProfileContext} alt="profile"/>
            </ProfileContainer>
        </ScreenContainer>
    )
}