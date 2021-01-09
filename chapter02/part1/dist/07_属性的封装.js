"use strict";
/**
 * 这是一个 立即执行函数
 */
(function () {
    /**
     * 这里需要设置 getter 和setter，成为属性的存取器。
     */
    class Person {
        constructor(name, age) {
            this._name = name;
            this._age = age;
        }
        get name() {
            return this._name;
        }
        set name(value) {
            this._name = value;
        }
        get age() {
            return this._age;
        }
        set age(value) {
            this._age = value > 0 ? value : 0;
        }
    }
    const per = new Person('name 1', 12);
    /**
     * 值可以被任意修改的。
     */
    per.name = '猪八戒';
    per.age = -100;
    console.log(per);
    /**
     * 直接将属性定义在构造函数
     */
    class NewPerson {
        /**
         * 这里不需要再写 this.name = name
         * @param name
         * @param age
         */
        constructor(name = '', age = 0) {
            this.name = name;
            this.age = age;
        }
    }
})();
