import { Actor, Random, Input, Vector } from "excalibur";
import { Resources, ResourceLoader } from './resources.js';


export class Mock extends Actor { 
    constructor() {
        super();
        this.pos = new Vector(570, 165);
        this.vel = new Vector(0, 0);
        let bg3 = Resources.gamegenericbg.toSprite();
        this.scale = new Vector(0.305 , 0.305);
        this.graphics.use(bg3);
    }
}

