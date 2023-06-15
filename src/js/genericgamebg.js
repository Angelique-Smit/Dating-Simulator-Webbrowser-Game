import { Actor, Vector } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'

export class GenericBg extends Actor {
    constructor() {
        super();
        
        let bg = Resources.gamegenericbg.toSprite();
        this.graphics.use(bg);
        this.pos = new Vector(760, 220);
        this.vel = new Vector(0, 0);
        this.scale = new Vector(0.41 , 0.41);
    }


}