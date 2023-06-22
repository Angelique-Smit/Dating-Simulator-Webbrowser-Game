import { Actor, Random, Input, Vector,Engine } from "excalibur";
import { Resources, ResourceLoader } from "../resources.js";
import catboyd1 from "../json/catboyd1.json";

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
        this.dialogue = catboyd1.Catdate
        this.optionsdialogue = catboyd1.options
    }

    startDialogue(engine) {
        let selectedText = this.dialogue[this.index];


        if (selectedText) {
            let actualText = selectedText.dialogue
            let name = catboyd1.Catdate[this.index].teller;
            this.dialogueId = catboyd1.Catdate[this.index].id;
            this.scene.startDialogue(actualText, name, catboyd1.Catdate[this.index].id)
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
            let name = catboyd1.options[this.options].teller;
            this.dialogueId = catboyd1.options[this.options].id;
            this.scene.dialogOptions(actualText, name)
            this.options++
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
            this.dialogue = catboyd1.angry
        }
        else{
            this.dialogue = catboyd1.Catdate
        }
        //zet de choiceavailable weer terug op false en de index terug op 0
        this.choiceAvailable = false 
        this.index = 0
    }

    showHappyDialog(engine) {
        console.log("so happy!")
        let selectedText = catboyd1.happy[this.happy];


        if (selectedText) {
            let actualText = selectedText.dialogue
            let name = catboyd1.happy[this.happy].teller;
            this.dialogueId = catboyd1.happy[this.happy].id;
            console.log("does this work atleast?")
            this.scene.showHappyDialog(actualText, name)
            this.happy++
        }
        
        engine.goToScene('catboycorvo1');
        this.dialogueIdChecker();
        // this.engine.addScene('catdate', new Catdate())
        // this.engine.goToScene('catdate')
    }


    //Add cases to add in certain sprites
    dialogueIdChecker() {
        if (this.dialogueId < 6) {
            let transparent = Resources.png.toSprite();
            this.graphics.use(transparent);
        } else {
            this.catboyNeutral();
        }

        switch (this.dialogueId) {

            //Mad
            case 14:
            case 15:
            case 16:
            case 17:
            case 41:

                this.catboyAngry();
                break;

            //Blush
            case 25.5:
                this.catboyBlush();
                break;

            //Sad
            case 20:
            case 21:
            case 22:
                this.catboySad();
                break;

            //Happy
            case 6:
            case 7:
            case 8:
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