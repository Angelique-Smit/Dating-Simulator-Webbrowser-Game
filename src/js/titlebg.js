import { Actor, Vector } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'

export class Title extends Actor {
    constructor() {
        super();
        
        let titleimg = Resources.titlebg.toSprite();
        this.graphics.use(titleimg);
        this.pos = new Vector(573.5, 150);
        this.vel = new Vector(0, 0);
        this.scale = new Vector(0.1 , 0.1);
    }


}