import { Actor, Random, Input, Vector } from "excalibur";
import { Resources, ResourceLoader } from "./resources.js";
import  bird  from "../json/bird.json";

export class Birdman extends Actor {
    index = 0
    options = 0
    angry = 0
    happy = 0
    dialogueId = 0
    selectedText;
    name;
    game;

    constructor() {
        super();

        let bird = Resources.birdmannormal.toSprite();
        this.graphics.use(bird);

        this.scale = new Vector(0.125, 0.125);

        this.pos = new Vector(550, 210);
        this.vel = new Vector(0, 0);
    }

    onInitialize(engine) {
        this.game = engine;
    }
    
    startDialogue() {
        let selectedText = bird.intro[this.index].dialogue;
        let name = bird.intro[this.index].teller;
        
        if (selectedText != undefined) {
            this.scene.startDialogue(selectedText, name)  
        } 
    }




    onPreUpdate(engine) {
        if (engine.input.keyboard.wasPressed(Input.Keys.Space)) {
            this.startDialogue()
            this.index++
            this.dialogueId = bird.intro[this.index].id;
        }
        if (engine.input.keyboard.wasPressed(Input.Keys.W)) {

        }
        if (engine.input.keyboard.wasPressed(Input.Keys.S)) {

        }

        this.dialogueIdChecker();
    }

 

    //Add cases to add in certain sprites
    dialogueIdChecker() {
        switch (this.dialogueId >= 0) {

            //Mad
            case this.dialogueId == 2:
                this.birdMock();
            
            default:
                this.birdNeutral();
        }
    }

    birdMock() {
        let birdmock = Resources.birdmanmock.toSprite();
        this.graphics.use(birdmock);
    }

    birdNeutral() {
        let birdneutral = Resources.birdmannormal.toSprite();
        this.graphics.use(birdneutral);
    }

}