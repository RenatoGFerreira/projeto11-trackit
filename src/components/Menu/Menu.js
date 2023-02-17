import { ScreenContainer, StyledLink, ContentProgressbar, CircularProgressbarContainer } from "./StyledMenu"
import { Link } from "react-router-dom"
import {CircularProgressbar, buildStyles} from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"

export default function Nav() {
    return (
        <ScreenContainer>
            <StyledLink to="/habitos">Hábitos</StyledLink>

            <ContentProgressbar>
                <CircularProgressbarContainer>
                    <Link to="/hoje">
                        <CircularProgressbar
                            // value={progress}
                            text={"Hoje"}
                            background
                            backgroundPadding={6}
                            styles={buildStyles({
                                backgroundColor: "#3e98c7",
                                textColor: "#fff",
                                pathColor: "#fff",
                                trailColor: "transparent"
                            })}
                        />
                    </Link>
                </CircularProgressbarContainer>
            </ContentProgressbar>
            
            <StyledLink to="/historico">Histórico</StyledLink>

        </ScreenContainer>
    )
}