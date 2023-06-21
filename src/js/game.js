import '../css/style.css'
import { Actor, Engine, Vector } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Startscreen } from './scenes/startscreen.js'
import { IntroCatScene } from './scenes/gamescene.js'
import { Catdate } from './scenes/catdate1'

export class Game extends Engine {
    constructor() {
        super({width: 1147, height: 525})
        this.start(ResourceLoader).then(() => this.startGame())
    }

    startGame() {
        this.addScene('gamescene', new IntroCatScene());
        this.addScene('startscreen', new Startscreen())
        this.addScene('catdate', new Catdate())
        this.goToScene('startscreen')
    }
}

new Game()