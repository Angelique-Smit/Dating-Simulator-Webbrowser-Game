import '../css/style.css'
import { Actor, Engine, Vector } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Startscreen } from './scenes/startscreen.js'
import { GameScene } from './scenes/gamescene.js'
import { Catdate } from './scenes/catdate1'

export class Game extends Engine {
    indexNumberBird = 0;
    constructor() {
        super({width: 1147, height: 525})
        this.start(ResourceLoader).then(() => this.startGame())
    }

    startGame() {
        this.addScene('gamescene', new GameScene());
        this.addScene('startscreen', new Startscreen())
        this.addScene('catdate', new Catdate())
        this.goToScene('startscreen')
    }
}

new Game()