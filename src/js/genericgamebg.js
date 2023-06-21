import { Actor, Random, Input, Vector } from "excalibur";
import { Resources, ResourceLoader } from './resources.js';

export class GenericBg extends Actor {
    index = 0
    constructor() {
        super();
        this.pos = new Vector(570, 165);
        this.vel = new Vector(0, 0);

        //DO NOT, UNDER ANY CIRCUMSTANCES FUCKING CHANGE THIS VALUE OR I WILL BE REALLY SAD
    }
    onInitialize(engine) {
        this.game = engine;
    }
    
    startDialogue(engine) {
        this.id = engine.indexNumberBird;
        console.log(this.id)

        if (this.id < 10) {
            let bg1 = Resources.reallifebg.toSprite();
            this.scale = new Vector(0.305 , 0.305);
            this.graphics.use(bg1);
        }
        if (this.id == 11) {
            let bg2 = Resources.blackoutbg.toSprite();
            this.scale = new Vector(0.800 , 0.700);
            this.graphics.use(bg2);
        }
        if (this.id > 11) {
            let bg3 = Resources.gamegenericbg.toSprite();
            this.scale = new Vector(0.305 , 0.305);
            this.graphics.use(bg3);
        }
    }

    onPreUpdate(engine) {
        if (engine.input.keyboard.wasPressed(Input.Keys.Space)) {
            this.startDialogue(engine)
        }
    }
}