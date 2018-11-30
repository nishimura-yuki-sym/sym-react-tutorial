// データモデルの定義を記述します
// resourcesを通じてサーバとやり取りするデータがここに集約されます。
// Storeとの違いはStoreはViewに対してのデータを集約したものに対し、
// こちらはリソース(API通信でやり取りするデータ)ごとのデータを集約したものになります。

export default class Todo {
  id: number;
  name: string;

  constructor(name) {
    this.id = Date.now();
    this.name = name;
  }

  toString() {
    return JSON.stringify(this);
  }
}
