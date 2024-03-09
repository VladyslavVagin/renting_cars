import styled from "styled-components";
import { Form, Field } from "formik";

export const BackgroundForm = styled.div`
  background-color: #ff3cac;
  background-image: linear-gradient(
    225deg,
    #ff3cac 0%,
    #784ba0 50%,
    #2b86c5 100%
  );
  width: 100dvw;
  height: 100dvh;
  padding-top: 40px;
`;

export const FormSignup = styled(Form)`
  width: 50%;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 12px;
  margin: 0 auto 20px auto;
  border-radius: 25px;
  background-color: #1c1d20;
  background-image: linear-gradient(62deg, #1c1d20 0%, #1c1d20 100%);

  h2 {
    text-align: center;
    color: white;
  }
`;

export const InputStyled = styled(Field)`
  width: 90%;
  border: none;
  outline: none;
  border-radius: 15px;
  padding: 1em;
  border-radius: 0px;
  background: linear-gradient(145deg, #f0f0f0, #cacaca);
  &:focus {
    background: linear-gradient(145deg, #fbf6f6, #d4cfcf);
  }
`;

export const LabelForm = styled.label`
  max-width: 600px;
  width: 80%;
  margin: 0px auto;
  color: #ccc6c6;
  display: flex;
  flex-direction: column;

  p {
    color: #646464;
    font-size: 0.75rem;
    /* padding-left: 30px;
    padding-right: 20px; */
    margin: 0;
  }
`;

export const SubmitBtn = styled.button`
  width: 130px;
  height: 40px;
  color: #353232;
  border-radius: 5px;
  padding: 10px 25px;
  font-weight: 700;
  background: transparent;
  text-transform: uppercase;
  transition: all 400ms ease;
  position: relative;
  display: inline-block;
  border-radius: 103px;
  background: #e4e1e1;
  border: none;
  margin-top: 16px;
  &:focus,
  &:hover {
    transform: scale(1.1);
  }
`;

export const Checkbox = styled(Field)`
  max-width: 20px;
`;

export const LabelCheckbox = styled.label`
  color: white;
  margin-right: auto;
  margin-left: 46px;
`;
