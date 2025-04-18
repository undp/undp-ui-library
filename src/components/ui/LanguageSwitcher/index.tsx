import React from 'react';

import {
  LanguageSelect,
  LanguageSelectContent,
  LanguageSelectItem,
  LanguageSelectTrigger,
  LanguageSelectValue,
} from './languageSelect';

interface LanguageSwitcherProps {
  options: {
    label: string;
    id: string;
  }[];
  defaultValue?: string;
  value?: string;
  placeHolder?: string;
  onValueChange?: (_d: string) => void;
}


function LanguageSwitcher(props: LanguageSwitcherProps) {
  const { 
    options,
    value,
    onValueChange,
    defaultValue,
    placeHolder ,
  } = props;
  return (
    <LanguageSelect onValueChange={onValueChange} value={value} defaultValue={defaultValue}>
      <LanguageSelectTrigger>
        <LanguageSelectValue placeholder={placeHolder || 'Select language'} />
      </LanguageSelectTrigger>
      <LanguageSelectContent>
        {
          options.map((d,i) => <LanguageSelectItem key={i} value={d.id}>{d.label}</LanguageSelectItem>)
        }
      </LanguageSelectContent>
    </LanguageSelect>
  );
}

export { LanguageSwitcher };
