import trackit from "../../assets/trackit.png"
import { ScreenContainer } from "./StyledHeader"
export default function Header() {
    return (
        <ScreenContainer>
            <img src={trackit} alt=" TrackIt" />
        </ScreenContainer>
    )
}