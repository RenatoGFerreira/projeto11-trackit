import { Link } from "react-router-dom";
import styled from "styled-components";

export const ScreenContainer = styled.footer`
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    bottom: 0px;
    left: 0px;
    background-color: #FFF;
`

export const StyledLink = styled(Link)`
    font-size: 18px;
    line-height: 22px;
    color: #52B6FF;
    margin: 0 36px;
`

export const ContentProgressbar = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
`

export const CircularProgressbarContainer = styled.div`
    width: 90px;
    height: 90px;
    position: absolute;
    top: -30px;
`