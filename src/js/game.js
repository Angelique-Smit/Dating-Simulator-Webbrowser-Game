import '../css/style.css'
import { Actor, Engine, Vector } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Startscreen } from './scenes/startscreen.js'
import { IntroCatScene } from './scenes/gamescene.js'
import { CatDate } from './scenes/catdate1'
import { Catboyi1 } from './scenes/catboyi1'
import { Corvotalk } from './scenes/catboycorvo1'
import { CatDate2 } from "./scenes/catdate2";

export class Game extends Engine {
    constructor() {
        super({width: 1147, height: 525})
        this.start(ResourceLoader).then(() => this.startGame())
    }

    startGame() {
        this.addScene('gamescene', new IntroCatScene());
        this.addScene('startscreen', new Startscreen())
        this.addScene('catdate1', new CatDate());
        this.addScene('catboycorvo1', new Corvotalk());
        this.addScene('catboyi1', new Catboyi1());
        this.addScene('catdate2', new CatDate2());
        this.goToScene('catdate1');
        //this.goToScene('startscreen')
    }
}

new Game()