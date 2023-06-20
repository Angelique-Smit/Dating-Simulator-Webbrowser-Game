import { Actor, Random, Input, Vector } from "excalibur";
import { Resources, ResourceLoader } from "./resources.js";
import catboy from "../json/catboy.json"

export class Catboy extends Actor {
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
        console.log(catboy)
        let cat = Resources.catboynormal.toSprite();
        this.graphics.use(cat);

        this.random = new Random(1337)
        this.scale = new Vector(0.125, 0.125);

        this.pos = new Vector(550, 210);
        this.vel = new Vector(0, 0);
    }
    onInitialize(engine) {
        this.game = engine;

    }
    
    startDialogue() {
        let selectedText = catboy.intro[this.index].dialogue;
        let name = catboy.intro[this.index].teller;
        
        if (selectedText != undefined) {
            this.scene.startDialogue(selectedText, name)  
        } 
    }




    onPreUpdate(engine) {
        if (engine.input.keyboard.wasPressed(Input.Keys.Space)) {
            this.startDialogue()
            this.index++
            this.dialogueId = catboy.intro[this.index].id;
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
            case this.dialogueId == 14:
            case this.dialogueId == 15:
            case this.dialogueId == 16:
            case this.dialogueId == 17:
            case this.dialogueId == 18:
            case this.dialogueId == 19:
            case this.dialogueId == 25:       
            case this.dialogueId == 25.5:
            case this.dialogueId == 26:  
            case this.dialogueId == 35: 
            case this.dialogueId == 36:   
                this.catboyAngry();
            break;

            //Blush
            case this.dialogueId == 23:
            case this.dialogueId == 29:  
                this.catboyBlush();
            break;

            //Sad
            case this.dialogueId == -1:
                this.catboySad();
            break;

            //Happy
            case this.dialogueId == 41:
                this.catboyHappy();
            break;

            
            default:
                this.catboyNeutral();
        }
    }

    catboyHappy() {
        let cathappy = Resources.catboyhappy.toSprite();
        this.graphics.use(cathappy);

    }

    catboySad() {
        let catsad = Resources.catboysad.toSprite();
        this.graphics.use(catsad);
    }

    catboyAngry() {
        let catangry = Resources.catboyangry.toSprite();
        this.graphics.use(catangry);
    }

    catboyBlush() {
        let catblush = Resources.catboyblush.toSprite();
        this.graphics.use(catblush);
    }

    catboyNeutral() {
        let cat = Resources.catboynormal.toSprite();
        this.graphics.use(cat);
    }

}