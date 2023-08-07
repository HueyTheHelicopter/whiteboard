import deleteImg from '../images/delete.png';
import editImg from '../images/edit.png';
import stickerImg from '../images/sticker_64.png';
import { useState, useContext } from 'react';
import { Rnd } from 'react-rnd';
import { EditingContext } from '../context';
import makeStickerStyle from '../utils/makeStickerStyle';

export const Sticker = ({id, gID, deleteSticker, makeNewGroup, highlightGroup}) => {

    const thisGroupID = gID;
    const myID = id;
    const { isEditingActive, setEditing } = useContext(EditingContext);

    const [state, setState] = useState({width: 256, height: 256, x: 500, y: 300, 
                                        minHeight: 200, minWidth: 200, 
                                        maxHeight: 370, maxWidth: 370}
    );
 
    let style = makeStickerStyle(useState)

    return (
            <Rnd className="drop-shadow-2xl hover:cursor-grab"
                style={style} 
                size={{width: state.width, height: state.height}}
                scale={1}
                minHeight={200}
                minWidth={200}
                maxHeight={state.maxHeight}
                maxWidth={state.maxWidth}
                position={{ x: state.x, y: state.y }}
                onDragStop={(e, d) => {
                    setState((prevState) => ({
                      ...prevState,
                      x: d.x,
                      y: d.y,
                    }));
                  }}
                onResizeStop={(e, direction, ref, delta, position) => {
                    setState((prevState) => ({
                        ...prevState,
                        width: prevState.width + delta.width,
                        height: prevState.height + delta.height,
                        ...position
                    }));
                }}
            >
            {/* <p>{gID}</p> */}
            <input className="w-4/5 decoration-3 top-2 bg-transparent mr-5 mb-1 rounded-m placeholder-black-700"
                type="text"
                text="Sticker"
                disabled={!isEditingActive}
                placeholder= "Sticker"/>
            <textarea className="textarea-ghost w-4/5 h-4/5 bg-transparent mr-5 mt-1 bottom-2 resize-none"
                type="text"
                disabled={!isEditingActive}
                placeholder= "Enter Text..."/>
            <button className="bg-transparent absolute h-7 w-7 right-1 top-1 opacity-25 hover:opacity-100" 
                    onClick={() => deleteSticker(myID)}>
                <img src={deleteImg} alt="delete"/>
            </button>
            <button className="bg-transparent absolute h-8 w-8 right-0.5 top-8 opacity-25 hover:opacity-100"
                    onClick={() => setEditing(!isEditingActive)}>
                <img src={editImg} alt='edit'/>
            </button>
            <button className="bg-transparent absolute h-8 w-8 right-1 bottom-1 opacity-25 hover:opacity-100"
                    onClick={() => makeNewGroup(thisGroupID)}>
                    <img src={stickerImg} alt='new group'/>
            </button>
        </Rnd>
    );
}