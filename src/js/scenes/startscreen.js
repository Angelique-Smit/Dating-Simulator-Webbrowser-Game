import { Label, FontUnit, Font, Scene, Color, Engine, Vector, Input, Sound } from "excalibur";
import { Bg } from '../startbg'
import { Intro } from './introscene.js'
import ethernal from '../../images/Ethereal_Harmony.mp3'
import { Title } from '../titlebg'


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

        const titlebg = new Title();
        this.add(titlebg);

        let labelinstructions = new Label({
            text: 'Press SPACE to start game',
            pos: new Vector(470, 320),
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


