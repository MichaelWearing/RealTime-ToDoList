import styled, { keyframes } from "styled-components";

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
    padding-bottom: 5vh;
`;

const FadeIn = keyframes`
0% { 
  opacity: 0;
}
25% {
  opacity: 0;
}
50% { 
  opacity: 0;
}
75% {
  opacity: 0;
  transform: translateX(-50px);    }
100% { 
  opacity: 1;
}
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

