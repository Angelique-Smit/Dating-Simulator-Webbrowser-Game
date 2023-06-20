import { Label, FontUnit, Font, Scene, Color, Engine, Vector, Input, Actor } from "excalibur";
import { GenericBg } from "../genericgamebg.js";
import { TextBox } from "../textbox.js";
import { Birdman } from "../bird.js";

export class Intro extends Scene {
    game;
    dialogueText;
    // optionsText
    name;
    constructor() {
        super();
    }

    onInitialize(){
        //Actors
        const bg = new GenericBg();
        this.add(bg);

        const bird = new Birdman();
        this.add(bird);

        const box = new TextBox();
        this.add(box);
    }

    startDialogue(text, name) {
        console.log(text)
        let createText = document.getElementById("textspan")
        createText.innerHTML = text;

        let playername = document.getElementById("playername")
        playername.innerHTML = name;
    }
}
