import styled from "styled-components"
import weekDays from "../../constants/weekDays"

export default function WeekDayButtons({ selectedDays, setSelectedDays, isLoading }) {

    function handleDay(day){
        if(selectedDays.includes(day)){
            const newDays = selectedDays.filter(d => d !== day)
            setSelectedDays(newDays)
        }else{
            setSelectedDays([...selectedDays, day])
        }
    }
    return (
        <Day disabled={isLoading}>
            {weekDays.map((weekDay) =>
                <StyleDay
                    key={weekDay.id}
                    isSelected={selectedDays.includes(weekDay.id)}
                    onClick={() => handleDay(weekDay.id)}
                >
                    {weekDay.day}
                </StyleDay>)}
        </Day>
    )
}

const Day = styled.div`
    margin-top: 8px;
    display: flex;
    align-items: center;
    gap: 4px;
    pointer-events: ${(props) => props.disabled ? "none" : "all"};
`

const StyleDay = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    padding-bottom: 2px;
    border: ${(props) => props.isSelected ? "1px solid #CFCFCF" : "1px solid #D5D5D5"};
    border-radius: 5px;
    font-size: 20px;
    line-height: 25px;
    background: ${(props) => props.isSelected ? "#CFCFCF" : "#FFFFFF"};
    color: ${(props) => props.isSelected ? "#FFFFFF" : "#DBDBDB"};
`