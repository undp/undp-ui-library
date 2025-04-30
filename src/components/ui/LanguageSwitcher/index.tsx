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
  defaultValue: string;
  value?: string;
  onValueChange?: (_d: string) => void;
}

function LanguageSwitcher(props: LanguageSwitcherProps) {
  const { options, value, onValueChange, defaultValue } = props;
  return (
    <LanguageSelect onValueChange={onValueChange} value={value} defaultValue={defaultValue}>
      <LanguageSelectTrigger>
        <LanguageSelectValue />
      </LanguageSelectTrigger>
      <LanguageSelectContent>
        {options.map((d, i) => (
          <LanguageSelectItem key={i} value={d.id}>
            {d.label}
          </LanguageSelectItem>
        ))}
      </LanguageSelectContent>
    </LanguageSelect>
  );
}

export { LanguageSwitcher };
