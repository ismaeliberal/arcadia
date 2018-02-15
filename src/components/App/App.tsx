import * as React from 'react';
import { translate, TranslationFunction, Trans } from 'react-i18next';

import ChangeLang from './ChangeLang';
import NavMenu from './NavMenu';
import Header from './Header';
import Views from 'src/Views';

import './App.scss';

interface Props {
  t: TranslationFunction;
}

const App: React.SFC<Props> = ({ t }) => (
  <div className="App">
    <Header />

    <ChangeLang />

    <p className="App-intro">
      <Trans i18nKey="getStarted">
        To get started, edit <code>src/App.js</code> and save to reload.
      </Trans>
    </p>

    <NavMenu />

    <Views />
  </div>
);

export default translate()(App);
