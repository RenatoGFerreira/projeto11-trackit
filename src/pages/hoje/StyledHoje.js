import styled from "styled-components";


export const ScreenContainer = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #E5E5E5;
    height: 100vh;
`

export const Topo = styled.div`
    width: 90%;
    font-size: 22px;
    color: #126BA5;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: left;
    margin: 20px 0;

    h1{
        font-family: Lexend Deca, sans-serif;
        margin-bottom: 5px;
    }
    p{
        color: #bababa;
        font-family: Lexend Deca, sans-serif;
        font-size: 19px;
    }

`


export const Body = styled.div`
    font-size: 22px;
    color: #666;
    width: 90%;
`

export const CardHoje = styled.div`
    border: 1px solid black;
`