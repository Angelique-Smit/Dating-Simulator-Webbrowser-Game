import { Actor, Random, Vector, Timer,Input } from "excalibur";
import { Resources, ResourceLoader } from "./resources.js";


export class Catboy extends Actor {
    index = 0
    game;
    constructor() {
        super({
            // width: Resources.Sans.width,
            // height: Resources.Sans.height
        });
        // const playerOne = new Actor()
        // this.graphics.use(Resources.Sans.toSprite());
        // this.pos = new Vector(585, 200);
        // this.scale = new Vector(0.1, 0.1);

        
        // this.random = new Random(1337)

    }
    onInitialize(engine) {
        this.game = engine;

    }

    startDialogue(){
        let jsontext ={"character 1":["THATS RIGHT,ACE ATTORNEY IN 7 LANGUAGES","test2","test3"],
    }
    
    let char1text = jsontext["character 1"]
   
    console.log(char1text[this.index])
    }
    

    onPreUpdate(engine){
        if (engine.input.keyboard.wasPressed(Input.Keys.Space)) {
            this.index++
            this.startDialogue()
        }
    }

    // dialogueOptions() {
    //     console.log("switch");
    
    //     let dodgeBullet = this.random.integer(0, 2)

    //     switch (dodgeBullet) {
    //         case 0:
    //             this.actions.moveTo (new Vector(585, 50),200);
    //             break;
    //         case 1: 
    //             this.actions.moveTo (new Vector(585, 200),200);
    //             break;
    //         case 2: 
    //             this.actions.moveTo (new Vector(585, 400),200);
    //             break;
    //         default:
    //             break;
    //     }
    // }

}