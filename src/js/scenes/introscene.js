import { Label, FontUnit, Font, Scene, Color, Engine, Vector, Input } from "excalibur";
import { GenericBg } from "../genericgamebg.js";
import { TextBox } from "../textbox.js";

export class Intro extends Actor {
    game;
    dialogueText
    // optionsText
    name;
    constructor() {
        super();
    }

    onInitialize(engine){
        //Actors
        const bg = new GenericBg();
        this.add(bg);

        const box = new TextBox();
        this.add(box);

        this.game = engine;      
    }

    startDialogue(text, name) {
        console.log(text)
        let createText = document.getElementById("textspan")
        createText.innerHTML = text;

        let playername = document.getElementById("playername")
        playername.innerHTML = name;
    }
}
