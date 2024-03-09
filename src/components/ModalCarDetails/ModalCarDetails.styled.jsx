import styled from "styled-components";

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100dvw;
  height: 100dvh;
  background-color: rgba(18, 20, 23, 0.5);
`;

export const Modal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 24px;
  width: 541px;
  min-height: 452px;
  padding: 40px;
  background-color: white;
  overflow-y: scroll;
`;

export const CloseBtn = styled.button`
    outline: none;
    border: none;
    background-color: inherit;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 12px;
    right: 12px;
    transition: all 400ms ease;
    &:hover,
    &:focus {
        transform: scale(1.2);
    }

    svg {
        fill: #121417;
    }
`
