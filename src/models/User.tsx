// データモデルの定義を記述します
// resourcesを通じてサーバとやり取りするデータがここに集約されます。
// Storeとの違いはStoreはViewに対してのデータを集約したものに対し、
// こちらはリソース(API通信でやり取りするデータ)ごとのデータを集約したものになります。

export default class User {
  loginId: string;
  password: string;

  constructor(props) {
    for (const prop in props) {
      if (props.hasOwnProperty(prop)) {
        this[prop] = props[prop];
      }
    }
  }

  toJsonString() {
    return JSON.stringify(this);
  }
}
