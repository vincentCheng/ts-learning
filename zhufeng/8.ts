/**
 * 泛型
 * 在定义函数、接口或者类的时候，不预先定义类型，使用的时候再指定类型。
 *
 * 问题：为什么需要泛型！
 */
namespace a {
  function createArray<T>(length: number, value: T): Array<T> {
    let result: Array<T> = []
    for (let index = 0; index < length; index++) {
      result[index] = value
    }
    return result
  }

  console.log(createArray<string>(3, 'x'))

  /**
   * 注意这里的 IArguments 这个接口来自 ES2015，需要在tsconfig中的lib写入 ES2015。
   * 如果需要DOM的声明，那么需要写入DOM
   *
   * 参考链接：https://www.tslang.cn/docs/handbook/compiler-options.html
   */
  function sum(...args2: any[]) {
    // arguments 就是解构之后的 args2
    let args: IArguments = arguments

    for (let index = 0; index < args.length; index++) {
      const element = args[index]
      console.log(element)
    }
  }

  sum(1, 2, 3, '4')

  /**
   * 接口泛型
   */
  interface Calculate {
    <T>(a: T, b: T): T
  }

  const add: Calculate = <T>(a: T, b: T) => {
    return a

    // 不能这样写
    // return a + b
  }

  const result4 = add<number>(1, 2)
  console.log(result4)

  /**
   * 多个类型参数，交换两个变量的值。
   *
   * 这种写法叫做 元组 [A, B]
   */
  function swap<A, B>(tuple: [A, B]): [B, A] {
    return [tuple[1], tuple[0]]
  }

  console.log(
    swap<string, number>(['zhufeng', 10])
  )

  /**
   * 默认泛型
   * 泛型类型别名
   */
  type Cart2<T> = { list: T[] } | T[]
  const c1: Cart2<string> = { list: ['1'] }
  const c2: Cart2<string> = ['1']

  /**
   * interface 是一个真正的类型
   * type 一般用来定义别名，不是真正的类型。
   *
   * 需要使用联合类型或者元组类型，类型别名更合适。这是什么意思？
   */
}
