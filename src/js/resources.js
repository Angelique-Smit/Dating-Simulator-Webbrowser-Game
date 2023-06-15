import { ImageSource, Sound, Loader } from 'excalibur'
//import fishImage from '../images/fish.png'
import startscreenImage from '../images/placeholderStartscreen.png'
import gamebg1 from '../images/genericbg.png'
import dialoge from '../images/dialoguebox.png'


const Resources = {
    //Fish: new ImageSource(fishImage)
    start: new ImageSource(startscreenImage),
    gamegenericbg: new ImageSource(gamebg1),
    textbox: new ImageSource(dialoge)

}
const ResourceLoader = new Loader([Resources.start, Resources.gamegenericbg, Resources.textbox])

export { Resources, ResourceLoader }
