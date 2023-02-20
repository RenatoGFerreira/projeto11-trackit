import Header from "../Header/Header"
import Menu from "../Menu/Menu"
import { ScreenContainer } from "./StyledScreenContainer"

export default function ScreenWithBars({ children }) {
    return (
        <ScreenContainer>
            <Header/>
            {children}
            <Menu/>
        </ScreenContainer>
    )
}