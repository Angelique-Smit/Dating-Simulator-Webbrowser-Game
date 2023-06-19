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

        this.jsontext = {
            // "character 1": ["THATS RIGHT,ACE ATTORNEY IN 7 LANGUAGES", "test2", "test3"],
            "start": catboy.catboy[0].dialogue
            // "options": catData.options,
            // "angry": catData.angryDialogue,
            // "happy": catData.happyDialogue,
        }

    }
    
    startDialogue() {
        let char1text = catboy.catboy[this.index].dialogue
        let selectedText = catboy.catboy[this.index].dialogue
        if (selectedText != undefined) {
            this.scene.startDialogue(char1text)
            
        } 

        let dialogue = catboy.dialogue;
        this.selectedText = dialogue;
        console.log(catboy.catboy[0].dialogue)
    }



    // dialogueOptions() {
    //     let char1text = this.jsontext["options"]
    //     let selectedText = char1text[this.options]
    //     console.log(selectedText)

    //     if (selectedText != undefined) {
    //         this.scene.dialogueOptions(char1text[this.options])
    //     }

    // }



    onPreUpdate(engine) {
        if (engine.input.keyboard.wasPressed(Input.Keys.Space)) {
            this.startDialogue()
            this.index++
            this.dialogueId = catboy.id

        }
        if (engine.input.keyboard.wasPressed(Input.Keys.W)) {
            this.selectedText = this.jsontext["angry"]
            this.angryDia()
            this.angryDialogue++
        }
        if (engine.input.keyboard.wasPressed(Input.Keys.S)) {
            this.happyDia()
            this.angryDialogue++
        }

        this.dialogueIdChecker();
    }

    angryDia() {
        console.log("angry option")
        let char1text = this.jsontext["angry"]
        let selectedText = char1text[this.angryDialogue]

        console.log(selectedText)
        if (selectedText != undefined) {
            this.scene.angryDia(char1text[this.angryDialogue])
        }

    }

    happyDia() {
        console.log("happy option")
        let char1text = this.jsontext["happy"]
        let selectedText = char1text[this.happyDialogue]

        if (selectedText != undefined) {
            this.scene.happyDia(char1text[this.happyDialogue])
        }

    }

    //Add cases to add in certain sprites
    dialogueIdChecker() {
        switch (this.dialogueId >= 0) {

            //Mad
            case this.dialogueId == 3:
                case this.dialogueId == 4:
                case this.dialogueId == 5:
                case this.dialogueId == 9:
                case this.dialogueId == 13:
                case this.dialogueId == 14:
                    this.catboyAngry();
                break;

            //Sad
            case this.dialogueId == 20:
                this.catboySad();
            break;

            //Blush
            case this.dialogueId == 19:
                this.catboyBlush();
            break;

            //Happy
            case this.dialogueId == 18:
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