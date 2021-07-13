import React from 'react';
import { Provider } from 'react-redux';
import i18n from './i18n';
import { I18nextProvider } from 'react-i18next';

import Routes from './routes/index';
import { store } from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <Routes />
      </I18nextProvider>
    </Provider>
  );
};

export default App;
