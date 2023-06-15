import '../css/style.css'
import { Actor, Engine, Vector } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Startscreen } from './scenes/startscreen.js'
import { GameScene } from './scenes/gamescene.js'

export class Game extends Engine {

    constructor() {
        super({width: 1530, height: 700})
        this.start(ResourceLoader).then(() => this.startGame())
    }

    startGame() {
        this.addScene('gamescene', new GameScene());
        this.addScene('startscreen', new Startscreen())
        this.goToScene('startscreen')
    }
}

new Game()