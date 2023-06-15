import { Actor, Random, Input, Vector } from "excalibur";
import { Resources, ResourceLoader } from "./resources.js";

export class TextBox extends Actor {
    constructor() {
        super()

        let box = Resources.textbox.toSprite();
        this.graphics.use(box);
        this.pos = new Vector(550, 425);
        this.vel = new Vector(0, 0);
        this.scale = new Vector(0.12 , 0.06);
    }

    onInitialize(){

    }
}