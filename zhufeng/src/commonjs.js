"use strict";
var es6 = require('./es6');
/**
 * 这是一个namespace 命名空间
 * 似乎是ts中的设定 esModuleInterop 等于 true的时候
 * commonjs和es6互相转换所使用的。
 */
es6 = {
    name: 'zhufeng',
    age: 10,
    default: 'beijing',
};
