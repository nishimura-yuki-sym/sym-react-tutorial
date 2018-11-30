import {observable, action, computed, useStrict} from 'mobx';
import User from '../models/User';

useStrict(true);

// 全ページで共有するデータを格納するRootStoreになります。
// 例としてログインしているユーザの情報を記載していますが、本アプリでは未使用です。。
export default class RootStore {

  @observable currentUser: User;

  @computed get isLoggedIn() {
    return this.currentUser;
  }

}
