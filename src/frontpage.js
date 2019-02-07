import '@babel/polyfill';
import {Hello} from './parts/sub';

const message = 'Hello World';

// sub.jsに定義されたJavaScriptを実行する。
const instance = new Hello();
instance.say(message);
