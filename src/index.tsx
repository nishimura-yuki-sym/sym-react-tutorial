import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {injectGlobal} from 'styled-components';
import normalize from './styles/base';
import App from './App';

const render = () => {
  // アプリ全体に適用するスタイルはここで定義しておく
  injectGlobal`
    ${normalize}
    body {
      background-color: white;
    }
  `;

  ReactDOM.render(<App/>, document.getElementById('js-root'));
};

render();
