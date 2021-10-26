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