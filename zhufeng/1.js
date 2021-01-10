"use strict";
var age = 1;
/**
 * 元组
 * 类似数组
 * 长度和类型都固定的数组
 * 类型可以不同
 */
var point = [100, 100];
var person = ['zhufeng', 10];
// 这样写就会报错
// let person: [string, number] = ['zhufeng', 10, 20]
/**
 * 枚举类型
 * 注意这里的本质
 */
var Gender;
(function (Gender) {
    Gender[Gender["BOY"] = 0] = "BOY";
    Gender[Gender["GIRL"] = 1] = "GIRL";
})(Gender || (Gender = {}));
console.log("xx\u662F\u4E00\u4E2A " + Gender.BOY);
/**
 * 随便制定值
 */
var Week;
(function (Week) {
    Week[Week["MONDAY"] = 1] = "MONDAY";
    Week[Week["TUESDAY"] = 8] = "TUESDAY";
})(Week || (Week = {}));
