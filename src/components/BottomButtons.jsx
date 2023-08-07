import sticker from "../images/sticker.png";
import drag from "../images/drag.png";
import sticker_h from "../images/sticker_hover.png";
import drag_a from "../images/drag_hover.png";
import editing from '../images/edit_128.png';
import editing_a from '../images/edit_active.png';
import emoji from '../images/emoji.png';
import emoji_a from '../images/emoji_hover.png';
import { useContext, useState } from "react";
import { EditingContext } from "../context";
import { PopUp } from "./PopUp";


export const BottomButtons = ({addSticker}) => {

    const [isStickerActive, setIsStickerActive] = useState(false);
    const [isEmojiActive, setEmojiActive] = useState(false);
    const { isEditingActive, setEditing } = useContext(EditingContext);

    return (
        <div className="fixed w-fit bottom-0 flex flex-col justify-end z-[1000]">
        <PopUp isActive={isEmojiActive} setIsActive={setEmojiActive}/>
        <div className="bg-white drop-shadow-lg w-fit p-2 h-fit rounded-lg">
            <div className="inline-flex">
                <button className="h-16 w-16 py-2 px-4 rounded-lg"
                        style={isEditingActive ? {backgroundColor: 'rgb(233 213 255)'} : {backgroundColor: 'white'}}
                        onClick={() => setEditing(true)}>
                    <img src={isEditingActive ? editing_a : editing} alt="editing"/>
                </button>
                <div className="border-r border-gray-400 m-2"></div>
                <button className="h-16 w-16 py-2 px-4 rounded-lg"
                        style={isEditingActive ? {backgroundColor: 'white'} : {backgroundColor: 'rgb(233 213 255)'}}
                        onClick={() => setEditing(false)}>
                    <img src={isEditingActive ? drag : drag_a} alt="darg"/>
                </button>
                <div className="border-r border-gray-400 m-2"></div>
                <button className="bg-white hover:bg-purple-200 h-16 w-16 py-2 px-4 rounded-lg"
                        onMouseEnter={() => setIsStickerActive(true)}
                        onMouseLeave={() => setIsStickerActive(false)}
                        onClick={() => addSticker()}>
                    <img src={isStickerActive ? sticker_h : sticker} alt="sticker"/>
                </button>
                <div className="border-r border-gray-400 m-2"></div>
                <button className="bg-white h-16 w-16 py-2 px-4 rounded-lg"
                        style={isEmojiActive ? {backgroundColor: 'rgb(233 213 255)'} : {backgroundColor: 'white'}}
                        onClick={() => setEmojiActive(!isEmojiActive)}>
                    <img src={isEmojiActive ? emoji_a : emoji} alt="emoji"/>
                </button>
            </div>
        </div>
        </div>
    );
}