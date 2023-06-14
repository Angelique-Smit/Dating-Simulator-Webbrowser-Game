import '../css/style.css'
import { Actor, Engine, Vector } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'

export class Game extends Engine {

    constructor() {
        super({ width: 800, height: 600 })
        this.start(ResourceLoader).then(() => this.startGame())
    }

    startGame() {
        console.log("start de game!")
        const fish = new Actor()
        fish.graphics.use(Resources.Fish.toSprite())
        fish.pos = new Vector(400, 300)
        fish.vel = new Vector(-10, 0)
        this.add(fish)

        // let jsontext = {
        //     "character 1": ["THATS RIGHT,ACE ATTORNEY IN 7 LANGUAGES", "test2", "test3"],
        //     "character 2": ["penis parker", "test2", "test3"]
        // }

        // let char1text = jsontext["character 1"]
        // let char2text = jsontext["character 2"]
        // // Log to console
        // console.log(char1text[1])
        // console.log(char2text[0])
    }
}

new Game()
