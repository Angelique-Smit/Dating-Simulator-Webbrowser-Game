import { Actor, Random, Input, Vector } from "excalibur";
import { Resources, ResourceLoader } from "../resources.js";
import  bird  from "../json/bird/bird.json";

export class Birdman extends Actor {
    index = 0
    options = 0
    badoption = false
    dialogueId = 0
    selectedText;
    name;
    game;

    constructor() {
        super();
        this.scale = new Vector(0.125, 0.125);

        this.pos = new Vector(550, 210);
        this.vel = new Vector(0, 0);
    }

    onInitialize(engine) {
        console.log("yo i am bird")
        this.game = engine;
        this.dialogue = bird.intro
    }
    
    startDialogue(engine) {
        let selectedText =  this.dialogue[this.index];

        if (selectedText) {
            let actualText = selectedText.dialogue
            let name = this.dialogue[this.index].teller;
            this.dialogueId = this.dialogue[this.index].id;
            this.scene.startDialogue(actualText, name, this.dialogueId)
            this.index++
        }
        else {
            this.dialogOptions()
        }
    }




    onPreUpdate(engine) {
        if (engine.input.keyboard.wasPressed(Input.Keys.Space) && !this.choiceAvailable) {
            this.startDialogue(engine)
        }

        if (engine.input.keyboard.wasPressed(Input.Keys.W) && this.choiceAvailable) {
            this.selectedText = "";
            this.choiceAvailable = false
            engine.goToScene('gamescene');

        }

        if (engine.input.keyboard.wasPressed(Input.Keys.S) && this.choiceAvailable) {
            this.selectedText = "";
            this.choiceAvailable = false
            engine.goToScene('gamescene');

        }

        if (engine.input.keyboard.wasPressed(Input.Keys.ArrowUp)) {
            this.startDialogue(engine)
            this.choiceAvailable = false
        }

        if (engine.input.keyboard.wasPressed(Input.Keys.ArrowDown)  && this.choiceAvailable) {
            this.selectedText = "";
            this.badOption(engine)
            this.startDialogue(engine)
            
        }

        this.dialogueIdChecker();
    }

    dialogOptions() {
        this.choiceAvailable = true
    }

    badOption(engine){ //swapped de emoties van de catboy
        console.log("you reached it!")
        this.badoption = !this.badoption // swap emotions
        console.log(`i am feeling very ${this.badoption}`)
        if(this.badoption){
            this.dialogue = bird.badoption
            console.log(this.dialogue)
        }
        else{
            engine.goToScene('endgame');
        }
        //zet de choiceavailable weer terug op false en de index terug op 0
        this.choiceAvailable = false 
        this.index = 0
    }

    //Add cases to add in certain sprites
    dialogueIdChecker() {
        if (this.dialogueId < 19) {
            let transparent = Resources.png.toSprite();
            this.graphics.use(transparent);
        } else {
            this.birdNormal();
        }
          if (this.dialogueId == 9.5){
            this.dialogOptions()
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