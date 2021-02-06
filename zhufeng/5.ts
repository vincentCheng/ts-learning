/**
 * 描述对象，
 * 属性和抽象方法。
 */
interface Point {
  x: number
  y: number
  /**
   * 接口中不能放实现，只能放定义。
   */
  speak(): void
}

/**
 * 任意属性
 */
interface PlainObject {
  [key: string]: number
}

/**
 * 这里可以随意添加属性
 */
let obj: PlainObject = {
  x: 1,
  y: 2,
}

/**
 * 接口的readonly
 */
interface Circle {
  readonly PI: 3.14
}

/**
 * 约束函数
 */
interface Discount {
  (price: number): number
}

const count: Discount = (price: number) => {
  return 1
}

/**
 * 可索引接口
 * 约束对象和数组
 */
interface UserInterface {
  [index: number]: string
}

let arr: UserInterface = ['1', '2', '3']

console.log(arr)

/**
 * 接口用来装饰类
 * 约束构造函数
 */
namespace b {
  interface Speakable {
    name: string
    speak(words: string): void
  }
  class Dog implements Speakable {
    name: string

    constructor(name: string) {
      this.name = name
    }

    speak(words: string): void {
      throw new Error('Method not implemented.')
    }
  }
  class Animal {
    constructor(public name: string) {}
  }
  /**
   * 使用new来约束构造函数
   * 也就是用接口来约束一个类的初始化传入参数。
   */
  interface WithNameClass {
    new (name: string): Animal
  }
  function createAnimal(clazz: WithNameClass, name: string) {
    return new clazz(name)
  }
  let a = createAnimal(Animal, 'hhhhhhhh')
}
