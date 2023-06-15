import { ImageSource, Sound, Loader } from 'excalibur'
//import fishImage from '../images/fish.png'
import startscreenImage from '../images/placeholderStartscreen.png'
import gamebg1 from '../images/genericbg.png'


const Resources = {
    //Fish: new ImageSource(fishImage)
    start: new ImageSource(startscreenImage),
    gamegenericbg: new ImageSource(gamebg1)

}
const ResourceLoader = new Loader([Resources.start, Resources.gamegenericbg])

export { Resources, ResourceLoader }
