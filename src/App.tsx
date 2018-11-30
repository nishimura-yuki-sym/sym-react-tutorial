import * as React from 'react';
import createHashHistory from 'history/createHashHistory';
import {Router} from 'react-router';
import {Route, Switch} from 'react-router-dom';
import {Provider} from 'mobx-react';
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router';

import RootStore from './stores/RootStore';
import Login from './containers/Login';
import Home from './containers/Home';

// historyとmobx用のstoreを結合
const hashHistory = createHashHistory();
const routingStore = new RouterStore();
const history = syncHistoryWithStore(hashHistory, routingStore);

// アプリのエントリポイント
class App extends React.Component<{}, {}> {
  rootStore: (RootStore | void);

  componentWillMount() {
    this.rootStore = new RootStore();
  }

  componentWillUnmount() {
    this.rootStore = void 0;
  }

  render() {
    // 例としてLogin, Homeの2画面をSPAで記述
    return (
      <Provider rootStore={this.rootStore} routingStore={routingStore}>
        <Router history={history}>
          <Switch>
            <Route exact path="/" component={Login}/>
            <Route exact path="/home" component={Home}/>
          </Switch>
        </Router>
      </Provider>
    );
  }

}

export default App;
