import Snake from "@/modules/Snake";
import Food from "@/modules/Food";
import ScorePanel from "@/modules/ScorePanel";

export default class GameController {
    snake: Snake;
    food: Food;
    scorePanel: ScorePanel;
    // 存储按键的值
    direction: string = ''
    // direction: string = 'Right'
    // 游戏结束标志位
    isLive = true

    constructor() {
        this.snake = new Snake();
        this.food = new Food();
        this.scorePanel = new ScorePanel();

        this.init();
    }

    private init() {
        // 绑定键盘
        // document.addEventListener('keydown', this.keydownHandler);

        /**
         * 使用这个方法 this.keydownHandler.bind(this)，表示重新创建一个函数。
         * 就绑定了 this.keydownHandler 中的 this（在这里是GameController的对象）
         * 那么函数体中的 this.direction 中的this就是 GameController 的对象。
         * 如果不这么做，那么函数体中的this是指document，这样 this.direction 是赋值错误达不到效果的。
         *
         */
        // document.addEventListener('keydown', this.keydownHandler.bind(this));
        /**
         * 解决这个问题，也可以使用箭头函数
         */
        document.addEventListener('keydown', (event) => {
            this.keydownHandler(event)
        });

        this.run()
    }

    /**
     * 键盘响应函数
     * ArrowUp 在ie中是 Up
     * ArrowDown 在ie中是 Down
     * ArrowLeft 在ie中是 Left
     * ArrowRight 在ie中是 Right
     *
     * @param event
     * @private
     */
    private keydownHandler(event: KeyboardEvent) {
        // js的特性，这里的this是document，不是 GameController 的对象。
        // console.log(this)
        this.direction = event.key
    }

    /**
     * 上 top 减少
     * 下 top 增加
     * 左 left 减少
     * 右 left 增加
     */
    run() {
        switch (this.direction) {
            case "ArrowUp":
                this.snake.Y -= 10
                break;
            case "Up":
                this.snake.Y -= 10
                break;
            case "ArrowDown":
                this.snake.Y += 10
                break;
            case "Down":
                this.snake.Y += 10
                break;
            case "ArrowLeft":
                this.snake.X -= 10
                break;
            case "Left":
                this.snake.X -= 10
                break;
            case "ArrowRight":
                this.snake.X += 10
                break;
            case "Right":
                this.snake.X += 10
                break;
            default:
                break;
        }

        /**
         * 本来以为这里使用 setInterval
         * setTimeout是函数只会运行一次，setInterval的函数会一直运行下去。
         */
        this.isLive && setTimeout(this.run.bind(this),
            300 - (this.scorePanel.level - 1) * 30)
    }
}