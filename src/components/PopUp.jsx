import { useState, useContext } from "react";
import { EmojisContext } from "../context";
import { Emoji } from "./Emoji";
import makeID from '../utils/makeID'
import {ReactComponent as Cry} from '../images/emojis/cry.svg';
import {ReactComponent as Chick} from '../images/emojis/chick-cropped.svg';
import {ReactComponent as Devil} from '../images/emojis/devil.svg';
import {ReactComponent as Fire} from '../images/emojis/fire.svg';
import {ReactComponent as Frog} from '../images/emojis/frogFace.svg';
import {ReactComponent as Hah} from '../images/emojis/hah.svg';
import {ReactComponent as Haha} from '../images/emojis/haha.svg';
import {ReactComponent as Hahaha} from '../images/emojis/hahaha.svg';
import {ReactComponent as HellYea} from '../images/emojis/hellYea.svg';
import {ReactComponent as Hmm} from '../images/emojis/hmm.svg';
import {ReactComponent as Love} from '../images/emojis/love.svg';
import {ReactComponent as LoveALot} from '../images/emojis/loveALot.svg';
import {ReactComponent as LoveEyes} from '../images/emojis/loveEyes.svg';
import {ReactComponent as ThumbUp} from '../images/emojis/thumbUp.svg';

export const PopUp = ({isActive, setIsActive}) => {

    const [emojis, setEmojis] = useState([
        {name: "cry", component: <Cry/>},
        {name: "chicken", component: <Chick/>},
        {name: "devil", component: <Devil/>},
        {name: "fire", component: <Fire/>},
        {name: "frog", component: <Frog/>},
        {name: "hah", component: <Hah/>},
        {name: "haha", component: <Haha/>},
        {name: "hahaha", component: <Hahaha/>},
        {name: "hellYea", component: <HellYea/>},
        {name: "hmm", component: <Hmm/>},
        {name: "love", component: <Love/>},
        {name: "loveALot", component: <LoveALot/>},
        {name: "loveEyes", component: <LoveEyes/>},
        {name: "thumbUp", component: <ThumbUp/>}
    ])      

    const { setIsEmojis } = useContext(EmojisContext);

    const deleteEmoji = (id) => {
        setIsEmojis((arr) => arr.filter((emoji) => emoji.props.id !== id));
    }

    const createEmoji = (emoji) => {
        const emojiRnd = <Emoji key={makeID()} id={makeID()} deleteEmoji={deleteEmoji} child={emoji}/>
        setIsEmojis((arr) => [...arr, emojiRnd])
    }

    return (
            <div className="flex flex-row">
                {
                    isActive ? 
                    <ul tabIndex={0} className="overflow-scroll w-full bg-white mb-2 drop-shadow-lg grid grid-rows-3 grid-flow-col gap-1 z-[1] rounded-md">
                        {emojis.map((emoji, idx) => {
                            return <li className="h-8 w-8 p-1 m-1" key={idx}>
                                    <div className="transition duration-150 ease-out delay-200 hover:scale-150" 
                                        onClick={() => {createEmoji(emoji.component); setIsActive(false)}}>
                                            {emoji.component}
                                        </div>
                                   </li>
                        })}
                    </ul>
                    : null
                }
            </div>
    );
}