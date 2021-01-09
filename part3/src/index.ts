/**
 * 这里是不知道ts能够作为模块使用的。
 * 需要在webpack.config.js中的resolve设置引用的模块。
 */
import {test} from "./m1";
import {alias} from "@/m2";

function show(content: string) {
    return content
}

const test1 = {name: test, age: 22}
console.log(test1)

console.log(show('hello world 11111111'))

console.log(test)

console.log(Promise)

console.log(alias)