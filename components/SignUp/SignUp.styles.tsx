import styled from "styled-components";
import { FaArrowLeft } from "react-icons/fa";

export const Wrapper = styled.div`
    background: #09f;
    background: linear-gradient(315deg,#00d4ff,#075ac9);
    color: pink;
    font-size: 50px;

    display: flex;
    flex-direction: column;
    align-items: center;

    height: 100vh;
`;

export const Title = styled.h1`
    color: white;

    padding-top: 18vh;
    padding-bottom: 2vh;
`;

export const CloseIcon = styled(FaArrowLeft)`
    color: white;
`;

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    left: 1.5rem;
    background: transparent;
    font-size: 4rem;
    cursor: pointer;
    outline: none;
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

    &:hover,
    &:focus {
        transform: translateX(5px);
    }
`;

export const Input = styled.input`
    text-align: center;
    border: 1px solid deepskyblue;
    border-radius: 8px;
    width: 50vh;
    height: 5vh;
    font-size: 25px;

    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
    margin-top: 5vh;
`;

export const Button = styled.button`
    color: deepskyblue;
    border: 1px solid deepskyblue;
    border-radius: 12px;
    width: 17vh;
    height: 6vh;
    font-size: 25px;
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
    margin-top: 5vh;

    &:hover,
    &:focus {
        transform: translateY(-3px);
        color: white;
        background: deepskyblue;
        border: 1px solid white;
    }
`;