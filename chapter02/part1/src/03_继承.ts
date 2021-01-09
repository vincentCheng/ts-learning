/**
 * 这是一个 立即执行函数
 */
(function () {
    // 这里是作用域，这样可以规避class重名警告
    class Dog {
        name: string;
        age: number;

        constructor(name: string = '', age: number = 0) {
            this.name = name;
            this.age = age;
        }

        bark() {
            console.log('wwwwwwwwww')
        }
    }

    const dog = new Dog('小黑', 10);
    const dog2 = new Dog();

    class Cat extends Dog {

        /**
         * 子类覆盖父类的方法，不用像java那样写 @over 标签了
         */
        bark() {
            console.log('mmmmmmmmmmmmmm')
        }
    }

    const cat = new Cat('小黑猫', 10);
    const cat2 = new Cat();

    dog.bark()
    cat.bark()

    console.log(dog)
    console.log(cat)
})()