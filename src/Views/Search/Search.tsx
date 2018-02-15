import * as React from 'react';
import { translate, TranslationFunction } from 'react-i18next';

interface Props {
  t: TranslationFunction;
}

const Search: React.SFC<Props> = ({ t }) => <h1>{t('search')}</h1>;

export default translate()(Search);
