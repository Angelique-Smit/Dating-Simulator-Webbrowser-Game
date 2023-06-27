import { Label, FontUnit, Font, Scene, Color, Engine, Vector, Input, Sound } from "excalibur";
import { Bg } from '../startbg'
import { Intro } from './introscene.js'
import { Resources, ResourceLoader } from "../resources.js";
import ethernal from '../../images/Ethereal_Harmony.mp3'


export class Startscreen extends Scene {
    mbMusic;
    constructor() {
        super()
    }

    onInitialize(engine) {
        this.bgMusic = new Audio(ethernal)
        this.bgMusic.loop = true
        this.bgMusic.play()
        
        const startscreenbg = new Bg();
        this.add(startscreenbg);

        let labelwelcome = new Label({
            text: 'Insert cool pog title later',
            pos: new Vector(150, 250),
            font: new Font({
                family: 'impact',
                size: 48,
                color: Color.White,
                unit: FontUnit.Px
            })
        });

        this.add(labelwelcome);
        labelwelcome.text = 'Insert cool pog title later';

        let labelinstructions = new Label({
            text: 'Press SPACE to start game',
            pos: new Vector(275, 320),
            font: new Font({
                family: 'impact',
                size: 24,
                color: Color.White,
                unit: FontUnit.Px
            })
        });

        this.add(labelinstructions);
        labelinstructions.text = 'Press SPACE to start game';
    }
    onPreUpdate(engine) {
        if (engine.input.keyboard.wasPressed(Input.Keys.Space)) {
            engine.addScene('introscene', new Intro());
            engine.goToScene('introscene');
        }
    }




}


