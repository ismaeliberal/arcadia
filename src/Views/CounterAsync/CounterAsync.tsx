import * as React from 'react';
import { translate, TranslationFunction } from 'react-i18next';

interface Props {
  t: TranslationFunction;
}

const CounterAsync: React.SFC<Props> = ({ t }) => <h1>{t('counterAsync')}</h1>;

export default translate()(CounterAsync);
