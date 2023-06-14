import { Scene } from 'excalibur';
import { Resources, ResourceLoader } from '../resources.js'

export class Startscreen extends Scene {
    constructor() {
        super()

        const startimage = new startimg();
        this.add(startimage);

        let labelinstructions = new Label({
            text: 'Press SPACE to start game',
            pos: new Vector(250, 370),
            font: new Font({
                family: 'impact',
                size: 24,
                color: Color.White,
                unit: FontUnit.Px
            })
        });

        this.add(labelinstructions);
        labelinstructions.text = 'Press SPACE to start game';

        let labelwelcome = new Label({
            text: 'Insert cool pog title later',
            pos: new Vector(100, 280),
            font: new Font({
                family: 'impact',
                size: 48,
                color: Color.White,
                unit: FontUnit.Px
            })
        });

        this.add(labelwelcome);
        labelwelcome.text = 'Insert cool pog title later';
    }

    // onPreUpdate(engine) {
    //     if (engine.input.keyboard.wasPressed(Input.Keys.Space)) {
    //         engine.addScene('start', new Start());
    //         engine.goToScene('start');
    //     }
    // }

}


