"use strict";
/**
 * 这是一个 立即执行函数
 */
(function () {
    function fn(a) {
        return a;
    }
    /**
     * 可以直接调用具有泛型的函数，这样就决定了返回的值就是T
     */
    const result1 = fn(10);
    /**
     * 这是指定泛型，用于比较复杂的类型。
     * 最好手动写类型，减少出错的几率。
     */
    const result2 = fn('hello');
    /**
     * 反省可以同时指定多个类型。
     * @param a
     * @param b
     */
    function fn2(a, b) {
        return a;
    }
    /**
     * T必须是Inter的子类（实现类）
     * @param a
     */
    function fn3(a) {
        return a.length;
    }
    // 正确，这里有length
    fn3('123');
    // 错误，这里没有length属性
    // fn3(1)
    /**
     * 泛型在class中的用法
     *
     * 总结：泛型就是在类型不明确的时候，使用一个变量代表这个类型。
     */
    class MyClass {
        constructor(name) {
            this.name = name;
        }
    }
})();
