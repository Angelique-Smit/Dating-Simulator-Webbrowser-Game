import { Actor, Random, Input, Vector,Engine } from "excalibur";
import { Resources, ResourceLoader } from "../resources.js";
import octolady from "../json/octolady/octoladyd2.json";

export class Octolady extends Actor {
    index = 0
    happy = 0
    angry = 0
    options = 0
    dialogue;
    angry = false;
    dialogueId = 0
    happyId = 0
    choiceAvailable = false
    selectedText;
    name;
    game;
    engine;

    constructor(engine) {
        super();

        this.scale = new Vector(0.100, 0.100);

        this.pos = new Vector(550, 215);
        this.vel = new Vector(0, 0);

        this.engine = engine
    }

    onInitialize(engine) {
        this.game = engine;
        this.dialogue = octolady.intro
        this.optionsdialogue = octolady.options
    }

    startDialogue(engine) {
        let selectedText = this.dialogue[this.index];


        if (selectedText) {
            let actualText = selectedText.dialogue
            let name = this.dialogue[this.index].teller;
            this.dialogueId = this.dialogue[this.index].id;
            this.scene.startDialogue(actualText, name, octolady.intro[this.index].id)
            this.index++
        }
        else {
            this.choiceAvailable = true
            this.dialogOptions()
        }
    }

    dialogOptions() {
        console.log("press w or s")

        let selectedText = this.optionsdialogue[this.options];

        if (selectedText) {
            let actualText = selectedText.dialogue
            let name = octolady.options[this.options].teller;
            this.dialogueId = octolady.options[this.options].id;
            this.scene.dialogOptions(actualText, name)
            this.options++
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
            this.swapEmotions()
            this.startDialogue(engine)
        }
        if (engine.input.keyboard.wasPressed(Input.Keys.ArrowUp) && this.choiceAvailable) {
            this.swapEmotions()
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

    swapEmotions(){ //swapped de emoties van de octolady
        this.angry = !this.angry // swap emotions
        console.log(`i am feeling very ${this.angry}`)
        if(this.angry){
            this.dialogue = octolady.angry
        }
        else{
            this.dialogue = octolady.intro
        }
        //zet de choiceavailable weer terug op false en de index terug op 0
        this.choiceAvailable = false 
        this.index = 0
    }

    showHappyDialog(engine) {
        console.log("so happy!")
        let selectedText = octolady.happy[this.happy];


        if (selectedText) {
            let actualText = selectedText.dialogue
            let name = octolady.happy[this.happy].teller;
            this.happyId = octolady.happy[this.happy].id;
            console.log("does this work atleast?")
            this.scene.showHappyDialog(actualText, name)
            this.happy++
            console.log(selectedText)
        }
        else{
            engine.goToScene('octocorvo2');
        }
        
        this.dialogueIdChecker();
        // this.engine.addScene('catdate', new Catdate())
        // this.engine.goToScene('catdate')
    }


    //Add cases to add in certain sprites
    dialogueIdChecker() {
        if (this.dialogueId < 3) {
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
                case -1:
                this.octoladyAngry();
                break;

            //Blush
            case 17:
            case 26:
            case 27:
            case 28:
                this.octoladyBlush();
                break;

            //Sad
            case -1:
                this.octoladySad();
                break;

            //Happy
            case 4:
            case 11:
            case 13:
            case 15:
            case 23:
            case 30:
                this.octoladyHappy();
                break;
        }
        switch(this.happyId){
            case 2:  
                this.octoladyHappy();
                break;
        }
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