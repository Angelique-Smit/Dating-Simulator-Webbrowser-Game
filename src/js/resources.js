import { ImageSource, Sound, Resource, Loader } from 'excalibur'
//import fishImage from '../images/fish.png'
import startscreenImage from '../images/placeholderStartscreen.png'


const Resources = {
    //Fish: new ImageSource(fishImage)
    startimg: new ImageSource(startscreenImage)

}
const ResourceLoader = new Loader([Resources.Fish, Resources.startimg])

export { Resources, ResourceLoader }