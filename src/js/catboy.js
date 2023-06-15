import { Actor, Random, Vector, Timer, Input } from "excalibur";
import { Resources, ResourceLoader } from "./resources.js";
import catData from "../json/catboy.json"

export class Catboy extends Actor {
    index = 0
    game;
    constructor() {
        super();
    }
    onInitialize(engine) {
        this.game = engine;
        // for(let json of catData) {            
        //     console.log(p)        
        // } 
        this.jsontext = {
            // "character 1": ["THATS RIGHT,ACE ATTORNEY IN 7 LANGUAGES", "test2", "test3"],
            "character 1": catData.dialogue,
        }
        console.log(catData.dialogue)
    }

    startDialogue() {
        let char1text = this.jsontext["character 1"]
        let selectedText = char1text[this.index]
        console.log(selectedText)
        if (selectedText != undefined) {
            this.scene.startDialogue(char1text[this.index])
        }
    }

    onPreUpdate(engine) {
        if (engine.input.keyboard.wasPressed(Input.Keys.Space)) {
            this.startDialogue()
            this.index++
        }
    }
}