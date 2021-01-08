/**
 * 这里是不知道ts能够作为模块使用的。
 * 需要在webpack.config.js中的resolve设置引用的模块。
 */
import {test} from "./m1";

function show(content: string) {
    return content
}

console.log(show('hello world 11111111'))

console.log(test)