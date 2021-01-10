// 记分牌
export default class ScorePanel {
    score = 0
    level = 1

    // html标签，在构造函数中初始化
    scoreElement: HTMLElement
    levelElement: HTMLElement

    // 最高的等级
    maxLevel: number
    // 多少分可以升级
    upScore: number

    constructor(maxLevel: number = 10, upScore: number = 10) {
        this.scoreElement = document.getElementById('score')!
        this.levelElement = document.getElementById('level')!
        this.maxLevel = maxLevel
        this.upScore = upScore
    }

    addScore() {
        this.scoreElement.innerHTML = ++this.score + ''
        // 判断分数是多少，每10分升一级。
        this.score % this.upScore === 0 && this.levelUp()
    }

    levelUp() {
        if (this.level >= this.maxLevel) return
        this.levelElement.innerHTML = ++this.level + ''
    }
}