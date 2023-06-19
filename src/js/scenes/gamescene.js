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
    }

    startDialogue(text) {
        let createText = document.getElementById("textspan")
        createText.innerHTML = text
    }

    dialogueOptions(text) {
        this.optionsText.text = text
        
    }
    angryDia(text) {
        this.remove(this.optionsText)
        let createText = document.getElementById("textspan")
        createText.innerHTML = text
    }
    happyDia(text) {
        this.remove(this.optionsText)
        let createText = document.getElementById("textspan")
        createText.innerHTML = text
    }
}