import { Label, FontUnit, Font, Scene, Color, Engine, Vector, Input } from "excalibur";
import {Catboy} from "../catboy.js";
import { GenericBg } from "../genericgamebg.js";
import { TextBox } from "../textbox.js";

export class GameScene extends Scene {
    game;
    dialogueText
    optionsText
    constructor() {
        super()
    }

    onInitialize(engine){
        //add any actors under here
        const bg = new GenericBg();
        this.add(bg);

        this.catboy = new Catboy();
        this.add(this.catboy)

        const box = new TextBox();
        this.add(box);

        //anything else under here
        this.game = engine;

        this.dialogueText = new Label({
            text: 'You approach the catboy',
            font: new Font({
                unit: FontUnit.Px,
                family: 'Determination Mono Web Regular',
                size: 20,
                color: Color.Black,
            }),
            pos: new Vector(350, 412)
        })

        this.optionsText = new Label({
            text: '',
            font: new Font({
                unit: FontUnit.Px,
                family: 'Determination Mono Web Regular',
                size: 20,
                color: Color.Black,
            }),
            pos: new Vector(350, 440)
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