import { useState } from 'react';
import { Rnd } from 'react-rnd';
import makeStickerStyle from '../utils/utilFunctions';

export const RndBox = ({id, gID, props}) => {

    const [state, setState] = useState(() => {
       if (props.type.name === "Sticker") {
            props.type.id = id;
            props.type.gID = gID;
            return {width: 256, height: 256, x: 10, y: 10, minHeight: 200, minWidth: 200, maxHeight: 370, maxWidth: 370}
       }
       else console.log("it's EMOJI")
    });

    let stickerStyle = makeStickerStyle(useState)
    
    return (
        <Rnd style={stickerStyle} 
                size={{width: state.width, height: state.height}}
                scale={1}
                minHeight={state.minHeight}
                minWidth={state.minWidth}
                maxHeight={state.maxHeight}
                maxWidth={state.maxWidth}
                position={{ x: state.x, y: state.y }}
                onDragStop={(e, d) => {
                    setState({ x: d.x, y: d.y });
                }}
                onResizeStop={(e, direction, ref, delta, position) => {
                    // console.log(direction)
                    setState({
                    width: ref.style.width,
                    height: ref.style.height,
                    ...position
                    });
            }}>
                {props}
        </Rnd>
    );
}