import { Actor, Random, Input, Vector,Engine } from "excalibur";
import { Resources, ResourceLoader } from "../resources.js";
import octoladyd3 from "../json/octolady/octoladyd3.json";

export class Octolady extends Actor {
    index = 0
    happy = 0
    angry = 0
    options = 0
    dialogue;
    angry = false;
    dialogueId = 0
    happyId = 0
    angryId= 0
    choiceAvailable = false
    selectedText;
    name;
    game;
    engine;
    Number = 0;

    constructor(engine) {
        super();

        this.scale = new Vector(0.100, 0.100);

        this.pos = new Vector(550, 215);
        this.vel = new Vector(0, 0);

        this.engine = engine
    }

    onInitialize(engine) {
        this.game = engine;
        this.dialogue = octoladyd3.intro
        this.optionsdialogue = octoladyd3.options
    }

    startDialogue(engine) {
        let selectedText = this.dialogue[this.index];


        if (selectedText) {
            let actualText = selectedText.dialogue
            let name = this.dialogue[this.index].teller;
            this.dialogueId = this.dialogue[this.index].id;
            this.scene.startDialogue(actualText, name, octoladyd3.intro[this.index].id)
            this.index++
        }
        else {
            
            console.log("hi baby")
            this.dialogOptions()
        }
    }

    dialogOptions() {
        this.choiceAvailable = true
    }

    onPreUpdate(engine) {
        if (engine.input.keyboard.wasPressed(Input.Keys.Space) && !this.choiceAvailable) {
            this.startDialogue(engine)
        }

        if (engine.input.keyboard.wasPressed(Input.Keys.W) && this.choiceAvailable) {
            this.swapEmotions(engine)
            this.startDialogue(engine)
        }
        if (engine.input.keyboard.wasPressed(Input.Keys.ArrowUp) && this.choiceAvailable) {
            this.swapEmotions(engine)
            this.startDialogue(engine)
        }

        if (engine.input.keyboard.wasPressed(Input.Keys.ArrowDown) && this.choiceAvailable) {
            this.startDialogue(engine)
            this.choiceAvailable = false
        }
        if (engine.input.keyboard.wasPressed(Input.Keys.S) && this.choiceAvailable) {
            // this.choiceAvailable = false
            this.showHappyDialog(engine)
            this.choiceAvailable = false
        }

        this.dialogueIdChecker();
    }

    swapEmotions(engine){ //swapped de emoties van de octolady
        this.angry = !this.angry // swap emotions
        console.log(`i am feeling very ${this.angry}`)
        if(this.angry){
            this.dialogue = octoladyd3.angry
            this.Number++
        }
        else{
            console.log('empty')
            engine.goToScene('octocorvotalk3');
        }
        //zet de choiceavailable weer terug op false en de index terug op 0
        this.choiceAvailable = false 
        this.index = 0
    }

    showHappyDialog(engine) {
        console.log("so happy!")
        let selectedText = octoladyd3.happy[this.happy];


        if (selectedText) {
            let actualText = selectedText.dialogue
            let name = octoladyd3.happy[this.happy].teller;
            this.happyId = octoladyd3.happy[this.happy].id;
            console.log("does this work atleast?")
            this.scene.showHappyDialog(actualText, name)
            this.happy++
            console.log(selectedText)
        }
        else{
            engine.goToScene('endgame');
        }
        
        this.dialogueIdChecker();
        // this.engine.addScene('catdate', new Catdate())
        // this.engine.goToScene('catdate')
    }


    //Add cases to add in certain sprites
    dialogueIdChecker() {
        if (this.dialogueId < 0) {
            let transparent = Resources.png.toSprite();
            this.graphics.use(transparent);
        } else {
            this.octoladyNeutral();
        }
        // if (this.dialogueId == 12.5){
        //     this.dialogOptions()
        //   }
        switch (this.dialogueId) {
            //Mad
                case 28:
                this.octoladyAngry();
                break;

            //Blush
            case 20:
            case 38:
            case 39:
            case 40:
            case 41:
                this.octoladyBlush();
                break;

            //Sad
            case -1:
                this.octoladySad();
                break;

            //Happy
            case 4:
            case 9:
            case 12:
            case 16:
            case 33:
            case 36:
                this.octoladyHappy();
                break;
        }
        switch(this.happyId){
            case 1:
            case 2:  
                this.octoladyHappy();
                break;
        }
        // switch(this.angryId){
        //     case 1:
        //     case 2:  
        //         this.octoladySad();
        //         break;
        // }
    }

    

    octoladyHappy() {
        let cathappy = Resources.octoladyhappy.toSprite();
        this.graphics.use(cathappy);

    }

    octoladySad() {
        let catsad = Resources.octoladysad.toSprite();
        this.graphics.use(catsad);
    }

    octoladyAngry() {
        let catangry = Resources.octoladyangry.toSprite();
        this.graphics.use(catangry);
    }

    octoladyBlush() {
        let catblush = Resources.octoladyblush.toSprite();
        this.graphics.use(catblush);
    }

    octoladyNeutral() {
        let cat = Resources.octoladynormal.toSprite();
        this.graphics.use(cat);
    }
}