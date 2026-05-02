import React from 'react';

import {
  LanguageSelect,
  LanguageSelectContent,
  LanguageSelectItem,
  LanguageSelectTrigger,
  LanguageSelectValue,
} from './languageSelect';

function LanguageSwitcher(props: {
  options: {
    label: string;
    id: string;
  }[];
  defaultValue: string;
  value?: string;
  onValueChange?: (_d: string) => void;
  inPortal?: boolean;
}) {
  const { options, value, onValueChange, defaultValue, inPortal = false } = props;
  return (
    <LanguageSelect onValueChange={onValueChange} value={value} defaultValue={defaultValue}>
      <LanguageSelectTrigger>
        <LanguageSelectValue />
      </LanguageSelectTrigger>
      <LanguageSelectContent inPortal={inPortal}>
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
