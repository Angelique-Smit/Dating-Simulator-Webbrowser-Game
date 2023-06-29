import { Actor, Random, Input, Vector,Engine } from "excalibur";
import { Resources, ResourceLoader } from "../resources.js";
import catboyi1 from "../json/catboy/catboyi1.json";

export class Catboy extends Actor {
    index = 0
    happy = 0
    angry = 0
    options = 0
    dialogue;
    angry = false;
    dialogueId = 0
    happyid = 0
    choiceAvailable = false
    selectedText;
    name;
    game;
    engine;
    angryid = 0;
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
        this.dialogue = catboyi1.Catdate
        this.optionsdialogue = catboyi1.options
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
            this.dialogOptions()
        }
    }

    dialogOptions() {
        console.log("press w or s")

        let selectedText = this.optionsdialogue[this.options];

        console.log(selectedText)

        if (selectedText) {
            let actualText = selectedText.dialogue
            let name = catboyi1.options[this.options].teller;
            this.dialogueId = catboyi1.options[this.options].id;
            this.scene.dialogOptions(actualText, name)
            //this.options++
        }
        console.log(selectedText)
        this.dialogueIdChecker();
    }


    onPreUpdate(engine) {
        if (engine.input.keyboard.wasPressed(Input.Keys.Space) && !this.choiceAvailable) {
            this.startDialogue(engine)
        }

        if (engine.input.keyboard.wasPressed(Input.Keys.W) && this.choiceAvailable) {
            this.swapEmotions()
            this.startDialogue(engine)
        }
        if (engine.input.keyboard.wasPressed(Input.Keys.S) && this.choiceAvailable) {
            // this.choiceAvailable = false
            this.showHappyDialog(engine)
        }

        this.dialogueIdChecker();
    }

    swapEmotions(){ //swapped de emoties van de catboy
        this.angry = !this.angry // swap emotions
        console.log(`i am feeling very ${this.angry}`)
        if(this.angry){
            this.dialogue = catboyi1.angry
            //  this.dialogueId = catboyi1.angry[this.angry].id
            // this.angry++
        }
        else{
            
            console.log("bro, can i press space?")
            this.dialogue = catboyi1.Catdate
        }
        //zet de choiceavailable weer terug op false en de index terug op 0
        this.index = 0
        this.choiceAvailable = false 
    }

    showHappyDialog(engine) {
        console.log("so happy!")
        let selectedText = catboyi1.happy[this.happy];


        if (selectedText) {
            let actualText = selectedText.dialogue
            let name = catboyi1.happy[this.happy].teller;
            this.dialogueId = catboyi1.happy[this.happy].id;
            // this.happyid = catboyi1.happy[this.index].id
            console.log("does this work atleast?")
            this.scene.showHappyDialog(actualText, name)
            this.happy++
        }
        else {
            // this.choiceAvailable = false
            engine.goToScene('catdate2');
        }
       
        this.dialogueIdChecker();
    }


    //Add cases to add in certain sprites
    dialogueIdChecker() {

        if (this.dialogueId < 16) {
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
            case -1:
                this.catboyBlush();
            break;

            //Sad
            case -1:
                this.catboySad();
            break;

            //Happy
            case -1:
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