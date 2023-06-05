import React, {useEffect, useState} from 'react';
import ReactFlagsSelect from "react-flags-select";
import {useTranslation} from "react-i18next";

import {ApiUrls} from "../../../utils/constants/api-urls";
import IconInternet from '../../../utils/icons/svg/internet.svg';
import {Img} from "../../../styles";

import './style.css';

const Languages = ({isMobile}: { isMobile: boolean; }) => {
  const {t, i18n} = useTranslation();
  const [lang, setLang] = useState(i18n.language);
  const [countries, setCountries] = useState(['']);
  const [customLabels, setCustomLabels] = useState({});

  const getLanguage = async () => {
    const {data}: { data: { iso2: string; lang: string; }[] } =
      await window.axios.get(ApiUrls.countries.getLang);
    const labels = data.reduce((acc: any, v) => ({
      ...acc, [v.iso2]: v.lang
    }), {});

    setCountries(data.map(v => v.iso2));
    setCustomLabels(labels);
  }

  const handlerSelect = async (value: string) => {
    await i18n.changeLanguage(value);
    setLang(value);
  }

  useEffect(() => {
    getLanguage().catch(console.error);
  }, []);

  return (
    <ReactFlagsSelect
      showSelectedLabel={!isMobile}
      showSecondarySelectedLabel={!isMobile}
      showSecondaryOptionLabel={!isMobile}
      selected={lang}
      countries={countries}
      customLabels={customLabels}
      onSelect={handlerSelect}
      className='languages'
      placeholder={isMobile ? (
        <Img
          width='24px'
          height='24px'
          alt='IconInternet'
          src={IconInternet}
        />
      ) : t('Select Language')}
    />
  );
};

export default Languages;
