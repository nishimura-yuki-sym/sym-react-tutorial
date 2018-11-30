※ READMEは必ず書きましょう。  
※ コードレビューはREADMEも含めて実施します。

# プロジェクト概要
Reactのボイラープレートプロジェクトです。

## コンテンツ

- [フォルダ構成](#フォルダ構成)
- [npmコマンド](#npmコマンド)
  - [npm start](#npm-start)
  - [npm test](#npm-test)
  - [npm run build](#npm-run-build)
- [対象ブラウザ](#対象ブラウザ)
- [セットアップ](#セットアップ)
- [JavaScriptコーディングルール](#JavaScriptコーディングルール)
- [CSSコーディングルール](#CSSコーディングルール)
- [HTMLコーディングルール](#HTMLコーディングルール)

## フォルダ構成

```
root/
  .node-version
  .npmignore
  package.json
  README.md
  tsconfig.json
  tslint.json
  webpack.base.js
  webpack.dev.js
  webpack.prod.js
  yarn.lock  
  dist/
  node_modules/
  public/
    index.html
  src/
    App.tsx
    index.tsx
    actions/
    components/
    containers/
    models/
    resources/
    stores/
    styles/
  test/
```

#### `tsconfig.json`, `tslint.json`
- TypeScriptのコンパイル及びLint設定ファイル

#### `webpck.base.js`, `webpck.dev.js`, `webpck.prod.js` 
- webpackの設定ファイル  
開発中(npm startコマンド実行時)は `webpck.dev.js`    
製品用ビルド(npm buildコマンド実行時)は `webpck.prod.js`  
がそれぞれ利用される

#### `dist`
- webpackのビルド成果物が格納されるフォルダ

#### `public`
- 開発用のpublicフォルダ  
画面のエントリポイントである `index.html` が格納されている。

#### `src`
* `App.tsx`
  - Reactアプリケーションのエントリポイント  
  StoreやRouterなどアプリ全体の初期設定をここで行う
* `index.tsx`
  - JavaScriptのエントリポイント  
  ReactDOM.render はここで実施する
* `actions`  
  - 画面操作に対応したアクションや非同期処理などをまとめる  
  MVCでのControllerに相当
* `components`  
  - UIコンポーネントをまとめる  
  ReduxにおけるPresentational Componentに相当
* `containers`
  - 画面ごとのContainerをまとめる
  ReduxにおけるContainer Componentに相当
* `models`
  - 構造化されたデータをまとめる(例: ユーザなど)  
  Storeとは異なり画面用のデータではなくREST APIでやり取りするようなデータの単位がここに集約される
* `resources`
  - アプリリソースとやり取りをまとめる  
  WebアプリではほぼAPI通信を行うことになるが、localstorageやアプリの場合であればRealmDBなどとのやり取りも担当
* `stores`
  - 画面に関連するステート(データ)をまとめる  
  基本的には1画面ごとに1storeで賄う想定だが、storeの規模が大きくなる場合は細分化するなども可能
* `styles`  
  - 画面のスタイル(CSS)をまとめる
  共通CSSや各画面、コンポーネントのCSSをこちらに集約することも可能
  
## npmコマンド

実行可能なnpmコマンドについて

### `npm start`

開発モードでアプリを立ち上げる。
立ち上げたアプリは [http://localhost:3000](http://localhost:3000) にて確認可能。

### `npm test`

TBD: テストコードを実行する

### `npm run build`

製品版ビルドを実行する。
成果物は `dist` フォルダに出力される。


## 対象ブラウザ

|Chrome | Firefox | Safari | Edge | IE |  
| --- | --- | --- | --- | --- |  
|Latest | Latest | Latest | Latest | 10+(※) |  

※ IE8, 9対応のためにはPolyfillが必要

## セットアップ

yarn コマンドで必要なパッケージをインストールする

```sh
yarn install
```
