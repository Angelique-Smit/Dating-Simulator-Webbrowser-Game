import { Label, FontUnit, Font, Scene, Color, Engine, Vector, Input } from "excalibur";
import {Catboy} from "../catboy";

export class GameScene extends Scene {
    game;
    dialogueText
    optionsText
    constructor() {
        super()
    }
    onInitialize(engine){
        this.game = engine;
        this.catboy = new Catboy();
        this.add(this.catboy)

        this.dialogueText = new Label({
            text: 'You approach the catboy',
            font: new Font({
                unit: FontUnit.Px,
                family: 'Determination Mono Web Regular',
                size: 20,
                color: Color.White,
            }),
            pos: new Vector(100, 500)
        })

        this.optionsText = new Label({
            text: '',
            font: new Font({
                unit: FontUnit.Px,
                family: 'Determination Mono Web Regular',
                size: 20,
                color: Color.White,
            }),
            pos: new Vector(100, 300)
        })
        this.add(this.dialogueText)
        
       
    }
    startDialogue(text) {
        this.dialogueText.text = text
        this.add(this.optionsText)
    }

    dialogueOptions(text) {
        this.optionsText.text = text
        
    }
    angryDia(text) {
        this.remove(this.optionsText)
        this.dialogueText.text = text
    }
    happyDia(text) {
        this.remove(this.optionsText)
        this.dialogueText.text = text
    }
}