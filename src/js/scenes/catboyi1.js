import { Label, FontUnit, Font, Scene, Color, Engine, Vector, Input, Actor } from "excalibur";
import { GenericBg } from "../genericgamebg.js";
import { TextBox } from "../textbox.js";
import { Catboy } from "../catboyfiles/catboyi1.js";

import { Resources, ResourceLoader } from '../resources.js';

    export class Catboyi1 extends Scene {
        game;
        dialogueText;
        bg
        mock;
        // optionsText
        name;
        constructor() {
            super();
        }

        onInitialize(){
            this.bg = new GenericBg();
            let bg1 = Resources.alleybg.toSprite();
            this.bg.scale = new Vector(0.480 , 0.500);
            this.bg.pos = new Vector(575, 300)
            this.bg.graphics.use(bg1);
            this.add(this.bg)

            const cat = new Catboy();
            this.add(cat);

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

            
        }

    showHappyDialog(text, name) {
        console.log(text)
        let createText = document.getElementById("textspan")
        createText.innerHTML = text;

        let playername = document.getElementById("playername")
        playername.innerHTML = name;
    }

    showAngryDialog(text, name) {
        console.log(text)
        let createText = document.getElementById("textspan")
        createText.innerHTML = text;

        let playername = document.getElementById("playername")
        playername.innerHTML = name;
    }


    dialogOptions(text,name) {
        let createText = document.getElementById("textspan")
        createText.innerHTML = text

        let playername = document.getElementById("playername")
        playername.innerHTML = name;
        
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