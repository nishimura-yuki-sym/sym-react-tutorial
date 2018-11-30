import {RouterStore} from 'mobx-react-router';
import {bindAll} from '../shared/util/class';
import LoginStore from '../stores/LoginStore';
import {getUser} from '../resources';

// Containerに対応する画面アクション(ロジック)を担当する層になります。
// 参考記事:
// http://lealog.hateblo.jp/entry/2017/03/08/114017
// 上記記事でいうところのeventに相当します。
export default class LoginAction {
  private store: LoginStore;
  private routing: RouterStore;

  constructor(store: LoginStore, routingStore: RouterStore) {
    this.store = store;
    this.routing = routingStore;

    bindAll(this);
  }

  onChangeLoginId(loginId) {
    this.store.setLoginId(loginId);
  }

  onChangePassword(password) {
    this.store.setPassword(password);
  }

  async onSubmit() {
    // バリデーション処理
    // loginIdまたはpasswordが入力されていない場合
    const errors = {};
    if (!this.store.loginId) errors['loginId'] = '入力してください';
    if (!this.store.password) errors['password'] = '入力してください';
    if (Object.keys(errors).length > 0) {
      this.store.setErrors(errors);
      return;
    }
    // エラークリア
    this.store.setErrors(null);

    // API通信開始
    this.store.setSubmitting(true);

    // resourceからuser情報を取得
    const result = await getUser({
      loginId: this.store.loginId,
      password: this.store.password,
    });

    // API通信完了
    this.store.setSubmitting(false);

    // エラーの場合
    if (result.error) {
      this.store.setErrors({all: result.error});
    }
    // 成功の場合
    if (result.data) {
      // ログイン情報をlocalstorageに保存
      localStorage.setItem('login_user', result.data.toJsonString());
      // ホーム画面に遷移
      this.routing.push('/home');
    }
  }

}
