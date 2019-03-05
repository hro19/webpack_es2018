module.exports = {
  // モード値を production に設定すると最適化された状態で、
  // development に設定するとソースマップ有効でJSファイルが出力される
  mode: 'development',
  devtool: 'source-map',
  output: {
    path: __dirname + '/dist/',
    filename: '[name]'
  },
  entry: {
    //各ページ毎に記述を追記していく
    'frontpage.js': './src/frontpage.js',
    'about.js': './src/about.js',
    'about1.js': './src/about1.js',
    'about2.js': './src/about2.js',
    'lodash.js': './src/lodash.js',
    'quiz.js': './src/quiz.js',
  },
  module: {
    rules: [
      {
        // 拡張子 .js の場合
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            // Babel を利用する
            loader: 'babel-loader',
            // Babel のオプションを指定する
            options: {
              presets: [
                // プリセットを指定することで、ES2018 を ES5 に変換
                '@babel/preset-env',
              ]
            }
          }
        ]
      }
    ]
  },

  //webpack-dev-server用設定
  devServer: {
      open: true,//ブラウザを自動で開く
      openPage: "index.html",//自動で指定したページを開く
      contentBase: __dirname,// HTML等コンテンツのルートディレクトリ
      watchContentBase: true,//コンテンツの変更監視をする
      port: 3000, // ポート番号
      publicPath: "/dist/",//バンドルにアクセスするためのpublicPathの指定
      watchContentBase: true, //コンテンツベースに置かれたファイル(htmlやcssなど)の変更を監視する
  }
};
