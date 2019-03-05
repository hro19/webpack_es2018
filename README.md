# webpack_es2018
webpack ES2018対応 アウトプットするjsファイルを分ける


## 使い方

- jsファイル
srcの直下がルートパスになります、対応するjsを作成しましょう。各パーツはpartsフォルダに記述しましょう
- webpack.config.js
entryに書くページのパスを追記していく

```webpack.config.js
  entry: {
    //各ページ毎に記述を追記していく
    'frontpage.js': './src/frontpage.js',
    'about.js': './src/about.js',
  },
```

###webpack-dev-serverを追記（19/03/05）
- npm run startで開始される
- log上でのみ更新されるために実ファイルは何も変わらないのが注意
- ホットリロードされる
- 作業を終えたら必ず、npm run buildで実ファイルを更新させる。

## 参考にしたサイト

### [最新版で学ぶwebpack 4入門 - Babel 7でES2018環境- ICS MEDIA](https://ics.media/entry/16028#webpack-babel-esnext)

### [Webpack (v4) で複数のJavaScriptファイル、CSSファイルを分けてビルド](https://blog.hirokiky.org/entry/2018/05/03/172317)