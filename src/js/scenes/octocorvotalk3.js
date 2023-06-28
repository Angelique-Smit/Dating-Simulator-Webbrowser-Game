import { Label, FontUnit, Font, Scene, Color, Engine, Vector, Input, Actor } from "excalibur";
import { GenericBg } from "../genericgamebg.js";
import { TextBox } from "../textbox.js";
import { Resources, ResourceLoader } from '../resources.js';
import { BirdT6 } from '../birdman/birdt6.js';
import { Mock } from "../mock.js";

    export class OctoCorvoT3 extends Scene {
        game;
        dialogueText;
        bg
        // optionsText
        name;
        bird;
        Number = 0;
        constructor() {
            super();
        }

        onInitialize(){
            this.bg = new GenericBg();
                let bg1 = Resources.gamegenericbg.toSprite();
                this.bg.scale = new Vector(0.305 , 0.305);
                this.bg.graphics.use(bg1);
            this.add(this.bg)

            const bird = new BirdT6();
            this.add(bird);

            const box = new TextBox();
            this.add(box);

        }

        onPreUpdate(){
            if (this.Number == 0) {
                let spantext = document.getElementById("textspan");
                spantext.innerHTML = "Press SPACE to start dialogue";
        
                let play = document.getElementById("playername")
                play.innerHTML = "";
                this.Number++
            }
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