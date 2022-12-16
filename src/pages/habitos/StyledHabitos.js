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
    font-size: 29px;
    color: #126BA5;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0;

    h1{
        font-family: Lexend Deca, sans-serif;
    }

`
export const ButtonAdd = styled.button`
    background-color: #52B6FF;
    color: #fff;
    height: 35px;
    width: 40px;
    border-radius: 5px;
    font-size: 29px;
`

export const Body = styled.div`
    font-size: 22px;
    color: #666;
    width: 90%;
`
