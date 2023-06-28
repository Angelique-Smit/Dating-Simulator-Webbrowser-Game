import { Actor, Random, Input, Vector,Engine } from "excalibur";
import { Resources, ResourceLoader } from "../resources.js";
import catboyd3 from "../json/catboy/catboyd3.json";

export class Catboy extends Actor {
    index = 0
    happy = 0
    angry = 0
    options = 0
    dialogue;
    angry = false;
    dialogueId = 0
    choiceAvailable = false
    selectedText;
    name;
    game;
    engine;
    angryid = 0;
    Number = 0;
    // happyid = 0;

    constructor(engine) {
        super();

        this.scale = new Vector(0.125, 0.125);

        this.pos = new Vector(550, 210);
        this.vel = new Vector(0, 0);

        this.engine = engine
    }

    onInitialize(engine) {
        this.game = engine;
        this.dialogue = catboyd3.Catdate
        this.optionsdialogue = catboyd3.options
    }

    startDialogue(engine) {
        let selectedText = this.dialogue[this.index];

        if (selectedText) {
            let actualText = selectedText.dialogue
            let name = this.dialogue[this.index].teller;
            this.dialogueId = this.dialogue[this.index].id;
            this.scene.startDialogue(actualText, name, this.dialogueId)
            this.index++
        }
        else {
            console.log("i am out of dialogue, now show the options")
            this.choiceAvailable = true
            this.dialogOptions(engine)
        }
    }

    dialogOptions(engine) {
        if (this.Number > 0) {
            this.sceneSwap(engine);
        }
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
        if (engine.input.keyboard.wasPressed(Input.Keys.S) && this.choiceAvailable) {
            // this.choiceAvailable = false
            this.showHappyDialog(engine)
        }

        this.dialogueIdChecker();
    }

    swapEmotions(engine){ //swapped de emoties van de catboy
        this.angry = !this.angry // swap emotions
        console.log(`i am feeling very ${this.angry}`)
        if(this.angry){
            console.log('sex')
            this.dialogue = catboyd3.angry
            this.Number++
            // this.dialogueId = catboyd3.angry[this.angry].id
            // this.angry++
        }
        else{
            
            console.log("bro, can i press space?")
            engine.goToScene('catboycorvo3');
        }
        //zet de choiceavailable weer terug op false en de index terug op 0
        this.choiceAvailable = false 
        this.index = 0
    }

    sceneSwap (engine) {
        engine.goToScene('octocorvotalk3'); 
    }


    showHappyDialog(engine) {
        console.log("so happy!")
        let selectedText = catboyd3.happy[this.happy];


        if (selectedText) {
            let actualText = selectedText.dialogue
            let name = catboyd3.happy[this.happy].teller;
            this.dialogueId = catboyd3.happy[this.happy].id;
            // this.happyid = catboyd3.happy[this.index].id
            console.log("does this work atleast?")
            this.scene.showHappyDialog(actualText, name)
            this.happy++
        }
        else {
            // this.choiceAvailable = false
            engine.goToScene('endgame');
        }
       
        this.dialogueIdChecker();
    }


    //Add cases to add in certain sprites
    dialogueIdChecker() {

        if (this.dialogueId < 0) {
            let transparent = Resources.png.toSprite();
            this.graphics.use(transparent);
        } else {
            this.catboyNeutral();
        }

        switch (this.dialogueId) {

            //Mad
            case -1:
                this.catboyAngry();
            break;

            //Blush
            case 8:
            case 8.5:
            case 10:
            case 29:
            case 30:
            case 32:
            case 33:
            case 34:
            case 35:
            case 36:
                this.catboyBlush();
            break;

            //Sad
            case -1:
                this.catboySad();
            break;

            //Happy
            case 18:
            case 19:
            case 20:
            case 21:
            case 22:
            case 23:
                this.catboyHappy();
            break;
        }

        switch (this.angryid) {
            case 1:
                this.catboyAngry();
            break;
        }

        switch (this.happyid) {
            case 1:
                this.catboyHappy();
            break;
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