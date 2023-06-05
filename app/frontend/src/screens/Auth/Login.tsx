import React from 'react';
import {useTranslation} from "react-i18next";

import BaseForm from "../../components/Forms";
import InputText from "../../components/Forms/InputText";

import {loginAction} from "../../store/saga/actions/auth.actions";
import {useStoreDispatch} from "../../store/hooks";
import {NavigateUrls} from "../../utils/constants/navigate-urls";
import {IStateLogin, initialLogin, inputsArrLogin, validateLogin} from "../../utils/validations/auth/login";

import {ButtonSubmit} from "../../components/Forms/styles";
import {CustomLink, Div} from "../../styles";

const LoginPage = () => {
  const dispatch = useStoreDispatch();
  const {t} = useTranslation();

  const onSubmit = (value: IStateLogin) => {
    dispatch(loginAction(value));
  }

  return (
    <Div display='flex' justifyContent='center' alignItems='center'>
      <BaseForm
        initialValues={initialLogin}
        validationSchema={validateLogin}
        onSubmit={onSubmit}
      >
        {inputsArrLogin.map((v, i) => (
          <InputText
            key={'InputText_' + i}
            {...v}
            label={t(`auth.label.${v.name}`)}
            placeholder={t(`auth.placeholder.${v.name}`)}
          />
        ))}
        <Div display='flex' alignItems='center' justifyContent='flex-end'>
          <div>
            <CustomLink margin='0 10px 0 0' to={NavigateUrls.auth.forgotPassword}>
              {t('auth.forgotPassword')}
            </CustomLink>
          </div>
          <ButtonSubmit type='submit'>
            {t('auth.login')}
          </ButtonSubmit>
        </Div>
      </BaseForm>
    </Div>
  );
};

export default LoginPage;
