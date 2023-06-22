import { Label, FontUnit, Font, Scene, Color, Engine, Vector, Input, Actor } from "excalibur";
import { GenericBg } from "../genericgamebg.js";
import { TextBox } from "../textbox.js";
import { Catboy } from "../catboyfiles/catboyi1.js";
import { Mock } from "../mock.js";
import { Resources, ResourceLoader } from '../resources.js';

    export class CatDate extends Scene {
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
            console.log("I AM IN THE I1 SCENE")
            let mock = new Mock();
                let m1 = Resources.alleybg.toSprite();
                this.mock.scale = new Vector(0.305 , 0.305);
                this.mock.graphics.use(m1);
            this.add(mock);

            this.bg = new GenericBg();
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