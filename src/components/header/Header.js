import trackit from "../../assets/trackit.png"
import { ScreenContainer, LogoContainer, ProfileContainer } from "./StyledHeader"
import perfil from "../../assets/exemplo_perfil.jpg"
export default function Header() {
    

    return (
        <ScreenContainer>
            <LogoContainer>
                <img src={trackit} alt=" TrackIt" />
            </LogoContainer>
            <ProfileContainer>
                <img src={perfil} alt="profile Picture"/>
            </ProfileContainer>
        </ScreenContainer>
    )
}