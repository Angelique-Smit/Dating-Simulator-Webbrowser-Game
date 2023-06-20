import { Label, FontUnit, Font, Scene, Color, Engine, Vector, Input } from "excalibur";
import { Catboy } from "../catboy.js";
import { GenericBg } from "../genericgamebg.js";
import { TextBox } from "../textbox.js";

export class Catdate extends Scene {
    game;
    dialogueText
    optionsText
    name;
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
    }
}