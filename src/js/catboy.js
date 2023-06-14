import { Actor, Random, Vector, Timer } from "excalibur";
import { Resources, ResourceLoader } from "./resources.js";


export class Catboy extends Actor {

    game;
    constructor() {
        super({
            width: Resources.Sans.width,
            height: Resources.Sans.height
        });
        // const playerOne = new Actor()
        this.graphics.use(Resources.Sans.toSprite());
        this.pos = new Vector(585, 200);
        this.scale = new Vector(0.1, 0.1);

        
        this.random = new Random(1337)

    }
    onInitialize(engine) {
 

    }



    dialogueOptions() {
        console.log("switch");
    
        let dodgeBullet = this.random.integer(0, 2)

        switch (dodgeBullet) {
            case 0:
                this.actions.moveTo (new Vector(585, 50),200);
                break;
            case 1: 
                this.actions.moveTo (new Vector(585, 200),200);
                break;
            case 2: 
                this.actions.moveTo (new Vector(585, 400),200);
                break;
            default:
                break;
        }
    }

}