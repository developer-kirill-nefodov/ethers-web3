import styled from "styled-components";
import {Btn, Input} from "../../styles";

export const CardShadow = styled.div`
  --tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
`;

export const CardWrapper = styled(CardShadow)`
  position: absolute;
  top: 30%;
  display: flex;
  padding: 20px 40px;

  form {
    width: 100%;
  }

  @media (min-width: ${({theme}) => theme.breakpoints.sm}px) {
    width: 25rem;
  }

  @media (max-width: ${({theme}) => theme.breakpoints.sm}px) {
    width: 75%;
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;


export const LabelInput = styled.label`
  color: ${({theme}) => theme.colors.label};
  font-size: .875rem;
  font-weight: 500;
  line-height: 1.25rem;
`;

export const InputForm = styled(Input)`
  margin-top: 5px;
`;

export const ErrorInfo = styled.div`
  position: absolute;
  color: ${({theme}) => theme.colors.error};
  top: 5px;
  right: 5px;
  font-size: 12px;
`;

export const ButtonSubmit = styled(Btn)`
  color: white;
  text-transform: uppercase;
  font-weight: 700;
  background: ${({theme}) => theme.colors.navigate};
`;
