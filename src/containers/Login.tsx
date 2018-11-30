import * as React from 'react';
import {Provider, inject, observer} from 'mobx-react';
import styled from 'styled-components';
import {RouterStore} from 'mobx-react-router';
import colors from '../styles/colors';
import LoginStore from '../stores/LoginStore';
import LoginAction from '../actions/LoginAction';
import LoginForm from '../components/LoginForm';

const Container = styled.main`
  width: 100%;
  height: 100%;
  background-color: ${colors.white};
`;

const Body = styled.section`
  width: 100%;
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;


// この層はContainerとしてComponentとActionを駆使してアプリ全体を制御する
// 参考記事:
// https://qiita.com/tuttieee/items/a3ca7d9d415049d02d60
// この記事でいうところの Container component に相当
@inject(({action, store}) => {
  return {
    loginAction: action,
    loginStore: store,
  };
})
@observer
class LoginContainer extends React.Component<{
  loginStore?: LoginStore;
  loginAction?: LoginAction;
}, {}> {

  render() {
    console.log('render login container');
    const {loginStore, loginAction} = this.props;
    if (!loginStore || !loginAction) return null;

    return (
      <Container>
        <Body>
        <LoginForm
          store={loginStore}
          onChangeLoginId={loginAction.onChangeLoginId}
          onChangePassword={loginAction.onChangePassword}
          onSubmit={loginAction.onSubmit}
        />
        </Body>
      </Container>
    );
  }

}

// この層はProviderとして直下にあるcontainerに対してどのStoreを渡すかを調整する役割を担う
// 参考記事:
// https://qiita.com/Takepepe/items/59d1396c25c8a699c41c
// Containerと同じファイルに記載しているのはProvierとContainerが1対1になると想定したためです。
// この想定が崩れるケースが出てくる場合はProviderは別フォルダで定義するのがよいと思います。
@inject(({routingStore}) => {
  return {routingStore};
})
export default class Login extends React.Component<{ routingStore?: RouterStore }, {}> {

  store: (LoginStore | void);
  action: (LoginAction | void);

  componentWillMount() {
    this.store = new LoginStore();
    this.action = new LoginAction(this.store, this.props.routingStore!);
  }

  componentWillUnmount() {
    // アンマウント時に削除
    this.action = void 0;
    this.store = void 0;
  }

  render() {
    console.log('render login provider');
    return (
      <Provider action={this.action} store={this.store}>
        <LoginContainer/>
      </Provider>
    );
  }
}
