import trackit from "../../assets/trackit.png"
import { ScreenContainer, LogoContainer, ProfileContainer } from "./StyledHeader"
import perfil from "../../assets/exemplo_perfil.jpg"
export default function Header({dados}) {
    console.log("imagem: ")

    const [ email, id, image, name, password, token] = dados

    return (
        <ScreenContainer>
            <LogoContainer>
                <img src={trackit} alt=" TrackIt" />
            </LogoContainer>
            <ProfileContainer>
                <img src={image} alt="profile Picture"/>
            </ProfileContainer>
        </ScreenContainer>
    )
}