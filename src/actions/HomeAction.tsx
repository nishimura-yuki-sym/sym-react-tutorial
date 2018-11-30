import {transaction} from 'mobx';
import {RouterStore} from 'mobx-react-router';
import {bindAll} from '../shared/util/class';
import HomeStore from '../stores/HomeStore';
import {getTodos, postTodo, deleteTodo} from '../resources';

// Containerに対応する画面アクション(ロジック)を担当する層になります。
// 参考記事:
// http://lealog.hateblo.jp/entry/2017/03/08/114017
// 上記記事でいうところのeventに相当します。
export default class HomeAction {
  private store: HomeStore;
  private routing: RouterStore;

  constructor(store: HomeStore, routingStore: RouterStore) {
    this.store = store;
    this.routing = routingStore;

    bindAll(this);
  }

  // 画面初期化処理
  async init() {
    // 初期化状態
    this.store.setInitialized(false);

    // API通信開始
    await this.loadTodos();

    // 初期化完了
    this.store.setInitialized(true);
  }


  async loadTodos() {
    // resourceでtodos情報を取得
    const result = await getTodos();
    // 成功の場合
    if (result.data) {
      this.store.setTodos(result.data);
    }
  }

  onChangeTaskName(taskName) {
    this.store.setTaskName(taskName);
  }

  async onSubmit() {
    // バリデーション処理
    // taskNameが入力されていない場合
    const errors = {};
    if (!this.store.taskName) errors['taskName'] = '入力してください';
    if (Object.keys(errors).length > 0) {
      this.store.setErrors(errors);
      return;
    }
    // エラークリア
    this.store.setErrors(null);

    // API通信開始
    this.store.setSubmitting(true);

    // resourceでtodo情報を追加
    const result = await postTodo({
      name: this.store.taskName,
    });

    // API通信完了
    this.store.setSubmitting(false);

    // エラーの場合
    /*
    if (result.error) {
      this.store.setErrors({all: result.error});
    }
    */
    // 成功の場合
    if (result.data) {
      // 作成されたtodo情報を追加
      transaction(() => {
        this.store.setTaskName('');
        this.store.addTodo(result.data);
      });
    }
  }

  async removeTodo(todo) {
    // resourceからtodo情報を削除
    const result = await deleteTodo({todo});
    console.log(result);

    // 成功の場合
    if (result.data) {
      // todo情報を削除
      this.store.removeTodo(result.data);
    }
  }

  logout() {
    localStorage.removeItem('login_user');
    // ログイン画面に遷移
    this.routing.push('/');
  }
}

