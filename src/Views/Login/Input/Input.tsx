import * as React from 'react';
import { translate, TranslationFunction } from 'react-i18next';

interface Props {
  t: TranslationFunction;
  placeholder: string;
  inputElement: HTMLInputElement;
}

const Input: React.SFC<Props> = ({ t, placeholder, inputElement }) => {
  return (
    <input
      placeholder={t(placeholder)}
      ref={input => {
        if (input !== null) {
          inputElement = input;
        }
      }}
    />
  );
};

export default translate()(Input);
