## 初始化

### 第一课 https://www.bilibili.com/video/BV1Xk4y127vb?p=1

- 使用下面的语句能够成功创建 tsconfig.json

```shell
tsc --init
```

- esModuleInterop

  - 创建 CommonJs 和 Modules 之间的转译。
  - 如果设置为 false，下面的导入就无法运行。

    ```javascript
    commonjs的写法
    moduleA.js
    exports.a = 'a'
    exports.b = 'b'
    module.exports = 'mod'

    es6module的写法
    import moduleA, { a, b } from './moduleA'
    ```
