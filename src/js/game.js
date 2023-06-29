import '../css/style.css';
import { Actor, Engine, Vector } from "excalibur";
import { Resources, ResourceLoader } from './resources.js';
import { Startscreen } from './scenes/startscreen.js';
import { Intro } from './scenes/introscene';
import { Final } from './scenes/endgame.js';
import { IntroCatScene } from './scenes/gamescene.js';
import { CatDate } from './scenes/catdate1';
import { Catboyi1 } from './scenes/catboyi1';
import { Corvotalk } from './scenes/catboycorvo1';
import { Corvotalk2 } from './scenes/catboycorvo2';
import { CatDate2 } from "./scenes/catdate2";
import { Catboyi2 } from './scenes/catboyi2';
import { CatDate3 } from "./scenes/catdate3";
import { OctoIntroScene } from "./scenes/octoladyintro.js";
import { OctoDate1 } from "./scenes/octodate1";
import { OctoI1 } from "./scenes/octoladyi1";
import { OctoDate2 } from "./scenes/octodate2";
import { OctoI2 } from "./scenes/octoladyi2";
import { OctoDate3 } from "./scenes/octodate3";
import { Corvotalk3 } from "./scenes/catboycorvo3";
import { OctoCorvoT3 } from "./scenes/octocorvotalk3";
import { OctoCorvoT1 } from "./scenes/octocorvo1"
import { OctoCorvoT2 } from "./scenes/octocorvo2"

export class Game extends Engine {
    constructor() {
        super({width: 1147, height: 525})
        this.start(ResourceLoader).then(() => this.startGame())
    }

    startGame() {
        this.addScene('gamescene', new IntroCatScene());
        this.addScene('endgame', new Final());
        this.addScene('introscene', new Intro());
        this.addScene('startscreen', new Startscreen())
        this.addScene('catdate1', new CatDate());
        this.addScene('catboycorvo1', new Corvotalk());
        this.addScene('catboycorvo2', new Corvotalk2());
        this.addScene('catboyi1', new Catboyi1());
        this.addScene('catdate2', new CatDate2());
        this.addScene('catboyi2', new Catboyi2());
        this.addScene('catdate3', new CatDate3());
        this.addScene('octoladyintro', new OctoIntroScene());
        this.addScene('octodate1', new OctoDate1());
        this.addScene('octoladyi1', new OctoI1());
        this.addScene('octodate2', new OctoDate2());
        this.addScene('octoladyi2', new OctoI2());
        this.addScene('octodate3', new OctoDate3());
        this.addScene('catboycorvo3', new Corvotalk3());
        this.addScene('octocorvotalk3', new OctoCorvoT3());
        this.addScene('octocorvo1', new OctoCorvoT1());
        this.addScene('octocorvo2', new OctoCorvoT2());
        this.goToScene('catdate1');
    }
}

new Game()