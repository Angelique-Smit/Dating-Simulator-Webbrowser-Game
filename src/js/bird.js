import { Actor, Random, Input, Vector } from "excalibur";
import { Resources, ResourceLoader } from "./resources.js";
import  bird  from "../json/bird.json";

export class Birdman extends Actor {
    index = 0
    options = 0
    dialogueId = 0
    selectedText;
    name;
    game;

    constructor() {
        super();
        console.log("yo i am bird")
        this.scale = new Vector(0.125, 0.125);

        this.pos = new Vector(550, 210);
        this.vel = new Vector(0, 0);
    }

    onInitialize(engine) {
        this.game = engine;
    }
    
    startDialogue(engine) {
        let selectedText =  bird.intro[this.index];

        if (selectedText) {
            let actualText = selectedText.dialogue
            let name = bird.intro[this.index].teller;
            this.dialogueId = bird.intro[this.index].id;
            console.log(name, bird.intro[this.index].id)
            this.scene.startDialogue(actualText, name, bird.intro[this.index].id)
            // engine.indexNumberBird = bird.intro[this.index].id;

            //this.scene.changeBackground(bird.intro[this.index].id)

            this.index++
        }
        else {
            this.dialogOptions()
        }
    }




    onPreUpdate(engine) {
        if (engine.input.keyboard.wasPressed(Input.Keys.Space)) {
            this.choiceAvailable = false
            this.selectedText = "";
            this.startDialogue(engine)
        }

        if (engine.input.keyboard.wasPressed(Input.Keys.W) && this.choiceAvailable) {
            this.selectedText = "";
            this.choiceAvailable = false
            engine.goToScene('gamescene');

        }

        if (engine.input.keyboard.wasPressed(Input.Keys.S) && this.choiceAvailable) {
            this.choiceAvailable = false
            engine.goToScene('startscreen');
        }

        this.dialogueIdChecker();
    }

    dialogOptions() {
        this.choiceAvailable = true
    }

 

    //Add cases to add in certain sprites
    dialogueIdChecker() {
        if (this.dialogueId < 19) {
            let transparent = Resources.png.toSprite();
            this.graphics.use(transparent);
        } else {
            this.birdNormal();
        }
          
        switch (this.dialogueId) {
            //Mock
            case 26:
            case 27:
            case 30:  
            case 34:      
            case 37:  
                this.birdMock();
            break; 
        }
    }

    birdMock() {
        let birdmock = Resources.birdmanmock.toSprite();
        this.graphics.use(birdmock);
    }

    birdNormal() {
        let birdneutral = Resources.birdmannormal.toSprite();
        this.graphics.use(birdneutral);
    }

}