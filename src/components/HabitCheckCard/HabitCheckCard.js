import checkIcon from "../../assets/img/check.svg"
import { 
    Container, 
    DetailsContainer, 
    Title, 
    Paragraph, 
    CurrentSequence, 
    HighestSequence, 
    CheckMarkContainer 
} from "./StyledHabitCard"



export default function HabitCheckCard({id, name, done, currentSequence, highestSequence}){
    return(
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
            <CheckMarkContainer done={done}>
                <img src={checkIcon} alt="check.svg" />
            </CheckMarkContainer>
        </Container>
    )
}