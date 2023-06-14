import '../css/style.css'
import { Actor, Engine, Vector } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'

export class Game extends Engine {

    constructor() {
        super()
    }

    startGame() {
        this.addScene('startscreen', new Startscreen())
            this.goToScene('startscreen')  
        
    }
}

new Game() 
