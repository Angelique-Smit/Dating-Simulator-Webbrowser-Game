import { Label, FontUnit, Font, Scene, Color, Engine, Vector, Input, Actor } from "excalibur";
import { GenericBg } from "../genericgamebg.js";
import { TextBox } from "../textbox.js";
import { Birdman } from "../bird.js";
import { Mock } from "../mockfantasypark.js";
import { Resources, ResourceLoader } from '../resources.js';

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
        let mockery = new Mock();
        let bg3 = Resources.reallifebg.toSprite();
        mockery.graphics.use(bg3);
        this.add(mockery);

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
