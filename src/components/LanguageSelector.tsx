import React, { FC } from 'react';
import { Dropdown } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import configs from '../config/configs';

interface LanguageSelectorProps {
  changeLanguage: Function;
}

interface LanguageProps {
  label: string;
  value: string;
}

const LanguageSelector: FC<LanguageSelectorProps> = ({ changeLanguage }) => {
  const { t } = useTranslation();

  return (
    <Dropdown
      className="d-inline-block"
      onSelect={(eventKey: any) => changeLanguage(eventKey)}
    >
      <Dropdown.Toggle id="dropdown-basic">
        {t('Change Language')}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {configs.languageCodes.map((language: LanguageProps) => (
          <Dropdown.Item eventKey={language.value} key={language.value}>
            {language?.label}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default LanguageSelector;
