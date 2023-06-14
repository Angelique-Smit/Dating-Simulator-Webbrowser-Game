import { ImageSource, Sound, Resource, Loader } from 'excalibur'
//import fishImage from '../images/fish.png'
import startscreenImage from '../images/placeholderStartscreen.png'


const Resources = {
    //Fish: new ImageSource(fishImage)
    Startscreen: new ImageSource(startscreenImage)

}
const ResourceLoader = new Loader([Resources.Fish, Resources.Startscreen])

export { Resources, ResourceLoader }