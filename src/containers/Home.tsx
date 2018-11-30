import * as React from 'react';
import {Provider, inject, observer} from 'mobx-react';
import styled from 'styled-components';
import colors from '../styles/colors';
import HomeStore from '../stores/HomeStore';
import HomeAction from '../actions/HomeAction';
import LoggedInHeader from '../components/LoggedInHeader';
import {RouterStore} from 'mobx-react-router';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';
import OverlayIndicator from '../components/OverlayIndicator';

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

const FormSection = styled.section`
  width: 100%;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ListSection = styled.section`
  width: 100%;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// この層はContainerとしてComponentとActionを駆使してアプリ全体を制御する
// 参考記事:
// https://qiita.com/tuttieee/items/a3ca7d9d415049d02d60
// この記事でいうところの Container component に相当
@inject(({rootStore, action, store}) => {
  return {
    homeAction: action,
    homeStore: store,
  };
})
@observer
class HomeContainer extends React.Component<HomeContainer.Props, {}> {

  componentDidMount() {
    this.props.homeAction!.init();
  }

  render() {
    const {homeStore, homeAction} = this.props;
    if (!homeStore || !homeAction) return null;

    return (
      <Container>
        <LoggedInHeader
          onClickLogout={homeAction.logout}
        />
        <Body>
        <FormSection>
          <TodoForm
            store={homeStore}
            onChangeTaskName={homeAction.onChangeTaskName}
            onSubmit={homeAction.onSubmit}
          />
        </FormSection>

        {homeStore.hasTodo &&
        <ListSection>
          <TodoList
            list={homeStore.todos}
            onDelete={(todo) => {
              homeAction.removeTodo(todo);
            }}
          />
        </ListSection>
        }

        </Body>
        {// 初期化が完了していない場合はローディング表示
          !homeStore.initialized &&
          <OverlayIndicator/>
        }
      </Container>
    );
  }

}

namespace HomeContainer {
  export interface Props {
    homeStore?: HomeStore;
    homeAction?: HomeAction;
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
export default class Home extends React.Component<{ routingStore?: RouterStore }, {}> {

  store: (HomeStore | void);
  action: (HomeAction | void);

  componentWillMount() {
    this.store = new HomeStore();
    this.action = new HomeAction(this.store, this.props.routingStore!);
  }

  componentWillUnmount() {
    // アンマウント時に削除
    this.action = void 0;
    this.store = void 0;
  }

  render() {
    return (
      <Provider action={this.action} store={this.store}>
        <HomeContainer/>
      </Provider>
    );
  }
}
