/**
 * 这是一个 立即执行函数
 */
(function () {
    /**
     * 这里需要设置 getter 和setter，成为属性的存取器。
     */
    class Person {
        get name(): string {
            return this._name;
        }

        set name(value: string) {
            this._name = value;
        }

        private _name: string;

        get age(): number {
            return this._age;
        }

        set age(value: number) {
            this._age = value > 0 ? value : 0;
        }

        private _age: number;

        constructor(name: string, age: number) {
            this._name = name;
            this._age = age;
        }
    }

    const per = new Person('name 1', 12);

    /**
     * 值可以被任意修改的。
     */
    per.name = '猪八戒'
    per.age = -100

    console.log(per)

    /**
     * 直接将属性定义在构造函数
     */
    class NewPerson {
        /**
         * 这里不需要再写 this.name = name
         * @param name
         * @param age
         */
        constructor(public name: string = '', public age: number = 0) {
        }
    }
})()