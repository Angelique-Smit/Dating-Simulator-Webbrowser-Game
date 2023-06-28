import { Label, FontUnit, Font, Scene, Color, Engine, Vector, Input } from "excalibur";
import { Bg } from '../startbg'
import { Title } from '../titlebg'

export class Final extends Scene {
    constructor() {
        super()
    }

    onInitialize(engine) {
        let createText = document.getElementById("titlespan")
        createText.innerHTML = "Thanks for playing our game!"
        
        let playername = document.getElementById("credits")
        playername.innerHTML = "Credits:"

        let creditart = document.getElementById("creditart")
        creditart.innerHTML = "Artwork:\n-Aswan Kotalh"

        let credit2 = document.getElementById("credit2")
        credit2.innerHTML = "Writing:\n-Angelique Smit"

        let credit3 = document.getElementById("credit3")
        credit3.innerHTML = "Music:\n-Jake Morris"

        let credit4 = document.getElementById("creditprog")
        credit4.innerHTML = "Programming:\n-Aswan Kotalh\n-Angelique Smit"

        const startscreenbg = new Bg();
        this.add(startscreenbg);

        const titlebg = new Title();
        this.add(titlebg);
    }
    
    onPreUpdate(engine) {
        let spantext = document.getElementById("textspan");
        spantext.innerHTML = "";

        let play = document.getElementById("playername")
        play.innerHTML = "";
    }

}

