import React from 'react';
import {useField} from "formik";

import {ErrorInfo, InputForm, InputWrapper, LabelInput} from "./styles";

export interface IInputText {
  name: string
  label: string
  required: boolean
  placeholder: string
  disabled?: boolean
  type: 'text' | 'email' | 'password'
}

const InputText = ({name, label, required, type, placeholder, disabled}: IInputText) => {
  const [field, meta] = useField(name);

  return (
    <InputWrapper>
      <LabelInput htmlFor={name}>
        {label}
      </LabelInput>
      <InputForm
        id={name}
        type={type}
        required={required}
        disabled={disabled}
        placeholder={placeholder}
        {...field}
        {...type === 'password' ? {autoComplete: 'on'} : {}}
      />
      {meta.touched && meta.error ? (
        <ErrorInfo>{meta.error}</ErrorInfo>
      ) : null}
    </InputWrapper>
  );
};

export default InputText;
