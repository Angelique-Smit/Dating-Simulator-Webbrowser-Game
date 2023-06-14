import '../css/style.css'
import { Actor, Engine, Vector } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Startscreen } from './scenes/startscreen.js'

export class Game extends Engine {

    constructor() {
        super()
        this.start(ResourceLoader).then(() => this.startGame())
    }

    startGame() {

        this.addScene('startscreen', new Startscreen())
        this.goToScene('startscreen')  

                // let jsontext = {
        //     "character 1": ["THATS RIGHT,ACE ATTORNEY IN 7 LANGUAGES", "test2", "test3"],
        //     "character 2": ["penis parker", "test2", "test3"]
        // }

        // let char1text = jsontext["character 1"]
        // let char2text = jsontext["character 2"]
        // // Log to console
        // console.log(char1text[0])
        // console.log(char2text[0])
 

    }
}

new Game() 
