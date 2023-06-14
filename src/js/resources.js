import { ImageSource, Sound, Loader } from 'excalibur'
//import fishImage from '../images/fish.png'
import startscreenImage from '../images/placeholderStartscreen.png'


const Resources = {
    //Fish: new ImageSource(fishImage)
    start: new ImageSource(startscreenImage)

}
const ResourceLoader = new Loader([Resources.start])

export { Resources, ResourceLoader }
