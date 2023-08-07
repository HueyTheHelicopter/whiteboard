import { useState } from "react";
import { Rnd } from "react-rnd";

export const Emoji = ({id, deleteEmoji, child}) => {

    const myID = id;

    const [state, setState] = useState({width: 40, height: 40, x: 350, y: 350, 
        minHeight: 25, minWidth: 25, 
        maxHeight: 200, maxWidth: 200}
    );

    const style = {
        display: "flex",
        margin: 4
    };

    return (
        <Rnd className="hover:z-[3] justify-center"
                style={style} 
                size={{width: state.width, height: state.height}}
                scale={1}
                minHeight={state.minHeight}
                minWidth={state.minWidth}
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
                onDoubleClick={() => deleteEmoji(myID)}
            >
                {child}
            </Rnd>
    );
}