import {a} from "./m";

let b = 10;
let c = a;

/**
 * 这里的参数都是 隐式 使用any
 * noImplicitAny:true 表示不允许使用隐式的any类型。
 *
 * @param a
 * @param b
 */
function fn(a:number, b:number) {
    return a + b;
}

/**
 * 不允许不明确类型的this
 * this在这里有可能是函数形式，有可能是方法形式。
 *
 * @param a
 * @param b
 */
function fn2(a:number, b:number) {
    alert(this)
}

let box1 = document.getElementById('box1')
/**
 * 严格的检查null值 "strictNullChecks": true
 * 这样就能检查出null值
 */
box1.addEventListener('click', function (){
    alert('hello')
})

/**
 * 解决方法
 */
box1 && box1.addEventListener('click', function () {
    alert('hello')
})
// 这居然是js中的方法啊！
box1?.addEventListener('click',function () {
    alert('解决方法二')
})