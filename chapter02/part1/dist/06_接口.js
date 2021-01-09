"use strict";
/**
 * 这是一个 立即执行函数
 */
(function () {
    const obj = {
        name: '111',
        age: 22
    };
    /**
     * 上面的两个接口会组合成为一个
     */
    const obj2 = {
        name: '111',
        age: 22,
        gender: 'hhhhhh'
    };
    /**
     * 接口就是对类的限制。这个类就能够在特定场景中使用。
     */
    class MyClass {
        constructor(name) {
            this.name = name;
        }
        sayHello() {
        }
    }
})();
