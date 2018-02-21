import * as React from 'react';
import { translate, TranslationFunction } from 'react-i18next';
import { bindActionCreators, Dispatch, Action } from 'redux';
import { connect } from 'react-redux';

import * as actions from 'src/state/modules/login/login.actions';

interface Props {
  t: TranslationFunction;
  addUserAsync: typeof actions.addUserAsync;
}

const Login: React.SFC<Props> = ({ t, addUserAsync }) => {
  let nameTextInput: HTMLInputElement;
  let mailTextInput: HTMLInputElement;
  let telTextInput: HTMLInputElement;
  let codeTextInput: HTMLInputElement;

  return (
    <div>
      <h1>{t('login')}</h1>
      <form>
        <input
          placeholder={t('name')}
          ref={input => {
            if (input !== null) {
              nameTextInput = input;
            }
          }}
        />
        <input
          placeholder={t('mail')}
          ref={input => {
            if (input !== null) {
              mailTextInput = input;
            }
          }}
        />
        <input
          placeholder={t('tel')}
          ref={input => {
            if (input !== null) {
              telTextInput = input;
            }
          }}
        />
        <input
          placeholder={t('code')}
          ref={input => {
            if (input !== null) {
              codeTextInput = input;
            }
          }}
        />
        <button
          onClick={e => {
            e.preventDefault();
            addUserAsync({
              name: nameTextInput.value,
              mail: mailTextInput.value,
              tel: telTextInput.value,
              code: codeTextInput.value,
            });
          }}
        >
          {t('submit')}
        </button>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch: Dispatch<Action>) =>
  bindActionCreators(
    {
      addUserAsync: actions.addUserAsync,
    },
    dispatch,
  );

export default connect(null, mapDispatchToProps)(translate()(Login));
