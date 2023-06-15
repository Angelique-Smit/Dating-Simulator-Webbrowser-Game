import { ImageSource, Sound, Loader } from 'excalibur'
//import fishImage from '../images/fish.png'
import startscreenImage from '../images/placeholderStartscreen.png'
import gamebg1 from '../images/genericbg.png'
import dialoge from '../images/dialoguebox.png'
import catnormal from '../images/catboynormal.png'
import cathappy from '../images/catboyhappy.png'
import catsad from '../images/catboysad.png'
import catangry from '../images/catboyangry.png'
import catblush from '../images/catboyblush.png'

const Resources = {
    //Fish: new ImageSource(fishImage)
    start: new ImageSource(startscreenImage),
    gamegenericbg: new ImageSource(gamebg1),
    textbox: new ImageSource(dialoge),
    catboynormal: new ImageSource(catnormal),
    catboyhappy: new ImageSource(cathappy),
    catboysad: new ImageSource(catsad),
    catboyangry: new ImageSource(catangry),
    catboyblush: new ImageSource(catblush)

}
const ResourceLoader = new Loader([Resources.start, Resources.gamegenericbg, Resources.textbox, Resources.catboynormal, Resources.catboyhappy, 
      Resources.catboyangry, Resources.catboysad, Resources.catboyblush])

export { Resources, ResourceLoader }
