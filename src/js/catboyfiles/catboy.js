import { Actor, Random, Input, Vector,Engine } from "excalibur";
import { Resources, ResourceLoader } from "../resources.js";
import catboy from "../json/catboy/catboy.json";

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

    constructor(engine) {
        super();

        this.scale = new Vector(0.125, 0.125);

        this.pos = new Vector(550, 210);
        this.vel = new Vector(0, 0);

        this.engine = engine
    }

    onInitialize(engine) {
        this.game = engine;
        this.dialogue = catboy.intro
        this.optionsdialogue = catboy.options
    }

    startDialogue(engine) {
        let selectedText = this.dialogue[this.index];


        if (selectedText) {
            let actualText = selectedText.dialogue
            let name = catboy.intro[this.index].teller;
            this.dialogueId = this.dialogue[this.index].id
            this.scene.startDialogue(actualText, name, this.dialogueId)
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
            let name = catboy.options[this.options].teller;
            this.dialogueId = catboy.options[this.options].id;
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

    swapEmotions(){ //swapped de emoties van de catboy
        this.angry = !this.angry // swap emotions
        console.log(`i am feeling very ${this.angry}`)
        if(this.angry){
            this.dialogue = catboy.angry
        }
        else{
            this.dialogue = catboy.intro
        }
        //zet de choiceavailable weer terug op false en de index terug op 0
        this.choiceAvailable = false 
        this.index = 0
    }

    showHappyDialog(engine) {
        console.log("so happy!")
        let selectedText = catboy.happy[this.happy];

        this.choiceAvailable = false 
        if (selectedText) {
            let actualText = selectedText.dialogue
            let name = catboy.happy[this.happy].teller;
            this.dialogueId = catboy.happy[this.happy].id;
            console.log("does this work atleast?")
            this.scene.showHappyDialog(actualText, name)
            this.happy++
        }
        else{
            engine.goToScene('catdate1');
        }
      
        this.dialogueIdChecker();
        // this.engine.addScene('catdate', new Catdate())
        // this.engine.goToScene('catdate')
    }


    //Add cases to add in certain sprites
    dialogueIdChecker() {
        if (this.dialogueId < 10) {
            let transparent = Resources.png.toSprite();
            this.graphics.use(transparent);
        } else {
            this.catboyNeutral();
        }
        if (this.dialogueId == 12.5){
            this.dialogOptions()
          }
        switch (this.dialogueId) {

            //Mad
            case 14:
            case 15:
            case 16:
            case 17:
            case 18:
            case 19:
            case 25:
            case 25.5:
            case 26:
            case 35:
            case 36:
                this.catboyAngry();
                break;

            //Blush
            case 23:
            case 29:
                this.catboyBlush();
                break;

            //Sad
            case -1:
                this.catboySad();
                break;

            //Happy
            case 41:
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