import { Label, FontUnit, Font, Scene, Color, Engine, Vector, Input, Actor } from "excalibur";
import { GenericBg } from "../genericgamebg.js";
import { TextBox } from "../textbox.js";
import { Birdman } from "../birdman/bird.js";
import { Mock } from "../mockfantasypark.js";
import { Resources, ResourceLoader } from '../resources.js';

export class Intro extends Scene {
    game;
    dialogueText;
    bg
    // optionsText
    name;
    constructor() {
        super();
    }

    onInitialize(){

       this.bg = new GenericBg();
       this.add(this.bg)

        const bird = new Birdman();
        this.add(bird);

        const box = new TextBox();
        this.add(box);

        let createText = document.getElementById("textspan")
        createText.innerHTML = "Press SPACE to start the dialogue"
    }

    startDialogue(text, name, id) {
        console.log(id)
        let createText = document.getElementById("textspan")
        createText.innerHTML = text;

        let playername = document.getElementById("playername")
        playername.innerHTML = name;

        if (id < 10) {
            console.log("basic background")
            let bg1 = Resources.reallifebg.toSprite();
            this.bg.scale = new Vector(0.305 , 0.305);
            this.bg.graphics.use(bg1);
        }
        if (id == 11) {
            console.log("different background!")
            let bg2 = Resources.blackoutbg.toSprite();
            this.bg.scale = new Vector(0.800 , 0.700);
            this.bg.graphics.use(bg2);
        }
        if (id > 11) {
            console.log("another different background")
            let bg3 = Resources.gamegenericbg.toSprite();
            this.bg.scale = new Vector(0.305 , 0.305);
            this.bg.graphics.use(bg3);
        }
    }
}
