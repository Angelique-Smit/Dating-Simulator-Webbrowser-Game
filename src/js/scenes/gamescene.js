import { Label, FontUnit, Font, Scene, Color, Engine, Vector, Input } from "excalibur";
import {Catboy} from "../catboy";

export class GameScene extends Scene {
    game;
    dialogueText
    constructor() {
        super();
    }

    onInitialize(engine){
        this.game = engine;
        this.catboy = new Catboy();
        this.add(this.catboy)

        this.startDialogue()
        this.dialogueText = new Label({
            text: 'Time start!',
            font: new Font({
                unit: FontUnit.Px,
                family: 'Determination Mono Web Regular',
                size: 28,
                color: Color.White,
            }),
            pos: new Vector(250, 100)
        })
        
       
    }
    startDialogue() {
        this.catboy.startDialogue()
    }

    onPreUpdate() {
        this.add(this.dialogueText)
    }
}