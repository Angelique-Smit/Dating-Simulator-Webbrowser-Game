import { Actor, Random, Input, Vector } from "excalibur";
import { Resources, ResourceLoader } from "../resources.js";
import  birdtalk1  from "../json/bird/birdtalk5.json";

export class BirdT5 extends Actor {
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
        let selectedText =  birdtalk1.talk1[this.index];

        if (selectedText) {
            let actualText = selectedText.dialogue
            let name = birdtalk1.talk1[this.index].teller;
            this.dialogueId = birdtalk1.talk1[this.index].id;
            console.log(name, birdtalk1.talk1[this.index].id)
            this.scene.startDialogue(actualText, name, birdtalk1.talk1[this.index].id)
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
            engine.goToScene('octoladyi2');
        }

        this.dialogueIdChecker();
    }

    dialogOptions() {
        this.choiceAvailable = true
    }

 

    //Add cases to add in certain sprites
    dialogueIdChecker() {
        if (this.dialogueId < 3 || this.dialogueId > 10) {
            let transparent = Resources.png.toSprite();
            this.graphics.use(transparent);
        } else {
            this.birdNormal();
        }
          
        switch (this.dialogueId) {
            //Mock
            case 3:
            case 6:
            case 10:
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