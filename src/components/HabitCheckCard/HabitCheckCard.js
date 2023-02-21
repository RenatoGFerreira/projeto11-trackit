import { useContext } from "react"
import checkIcon from "../../assets/img/check.svg"
import { UserContext } from "../../context/UserContext"
import apiToday from "../../services/apiToday"
import {
    Container,
    DetailsContainer,
    Title,
    Paragraph,
    CurrentSequence,
    HighestSequence,
    CheckMarkContainer
} from "./StyledHabitCard"



export default function HabitCheckCard({ id, name, done, currentSequence, highestSequence, getTodayHabits }) {

    const { user } = useContext(UserContext)

    function handleCheck() {
        if (done) {
            apiToday.uncheckHabit(user.token, id)
                .then(() => getTodayHabits())
                .catch(err => err.response.data.message)
            }else{
                apiToday.checkHabit(user.token, id)
                    .then(() => getTodayHabits())
                    .catch(err => err.response.data.message)
            }
        }
    return (
        <Container>
            <DetailsContainer>
                <Title>{name}</Title>
                <Paragraph>
                    Sequência atual:
                    <CurrentSequence done={done}>
                        {currentSequence} dias
                    </CurrentSequence>
                </Paragraph>
                <Paragraph>
                    Seu recorde:
                    <HighestSequence currentSequenceIsHighest={highestSequence === currentSequence}>
                        {highestSequence} dias
                    </HighestSequence>
                </Paragraph>
            </DetailsContainer>
            <CheckMarkContainer done={done} onClick={handleCheck}>
                <img src={checkIcon} alt="icone de check" />
            </CheckMarkContainer>
        </Container>
    )
}