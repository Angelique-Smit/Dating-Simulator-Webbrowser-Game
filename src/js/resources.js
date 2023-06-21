import { ImageSource, Sound, Loader } from 'excalibur'
import startscreenImage from '../images/placeholderStartscreen.png'
import gamebg1 from '../images/genericbg.png'
import dialoge from '../images/dialoguebox.png'
import catnormal from '../images/catboynormal.png'
import cathappy from '../images/catboyhappy.png'
import catsad from '../images/catboysad.png'
import catangry from '../images/catboyangry.png'
import catblush from '../images/catboyblush.png'
import octonormal from '../images/octoladynormal.png'
import octohappy from '../images/octoladyhappy.png'
import octosad from '../images/octoladysad.png'
import octoangry from '../images/octoladyangry.png'
import octoblush from '../images/octoladyblush.png'
import birdnormal from '../images/birdnormal.png'
import birdmock from '../images/birdmock.png'
import transrights from '../images/transparent.png'

const Resources = {
    start: new ImageSource(startscreenImage),
    gamegenericbg: new ImageSource(gamebg1),
    textbox: new ImageSource(dialoge),
    catboynormal: new ImageSource(catnormal),
    catboyhappy: new ImageSource(cathappy),
    catboysad: new ImageSource(catsad),
    catboyangry: new ImageSource(catangry),
    catboyblush: new ImageSource(catblush),
    octoladynormal: new ImageSource(octonormal),
    octoladyhappy: new ImageSource(octohappy),
    octoladysad: new ImageSource(octosad),
    octoladyangry: new ImageSource(octoangry),
    octoladyblush: new ImageSource(octoblush),
    birdmannormal: new ImageSource(birdnormal),
    birdmanmock: new ImageSource(birdmock),
    png: new ImageSource(transrights)

}
const ResourceLoader = new Loader([Resources.start, Resources.gamegenericbg, Resources.textbox, Resources.catboynormal, Resources.catboyhappy, 
      Resources.catboyangry, Resources.catboysad, Resources.catboyblush, Resources.octoladynormal, Resources.octoladyhappy, Resources.octoladysad, 
      Resources.octoladyangry, Resources.octoladyblush, Resources.birdmannormal, Resources.birdmanmock, Resources.png])

export { Resources, ResourceLoader }
