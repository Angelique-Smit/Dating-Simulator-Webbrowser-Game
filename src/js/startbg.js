import { Actor, Engine, Vector } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'

export class Bg extends Actor {
    constructor() {
        super();
        
        let startimg = Resources.start.toSprite();
        this.graphics.use(startimg);
        this.pos = new Vector(0, 0);
        this.vel = new Vector(0, 0);
        this.scale = new Vector(0.7 , 0.7);
    }


}