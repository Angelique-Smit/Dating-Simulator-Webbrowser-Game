import { Actor, Random, Input, Vector } from "excalibur";
import { Resources, ResourceLoader } from './resources.js';

export class GenericBg extends Actor {
    index = 0
    id;
    catIdIntro;
    constructor() {
        super();
        this.pos = new Vector(570, 165);
        this.vel = new Vector(0, 0);
        let bg1 = Resources.reallifebg.toSprite();
        this.scale = new Vector(0.305 , 0.305);
        this.graphics.use(bg1);
    }
    onInitialize(engine) {
        this.game = engine;
    }
}