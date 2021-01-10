let age: number = 1

/**
 * 元组
 * 类似数组
 * 长度和类型都固定的数组
 * 类型可以不同
 */
let point: [number, number] = [100, 100]
let person: [string, number] = ['zhufeng', 10]
// 这样写就会报错
// let person: [string, number] = ['zhufeng', 10, 20]

/**
 * 枚举类型
 * 注意这里的本质
 */

enum Gender {
  BOY,
  GIRL,
}
console.log(`xx是一个 ${Gender.BOY}`)

/**
 * 随便制定值
 */
enum Week {
  MONDAY = 1,
  TUESDAY = 8,
}
