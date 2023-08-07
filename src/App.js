import './App.css';
import { BottomButtons } from './components/BottomButtons';
import { Sticker } from './components/Sticker';
import { useEffect, useState } from "react";
import makeID from './utils/makeID';
import Xarrow, {useXarrow, Xwrapper} from 'react-xarrows';
import { EditingContext, EmojisContext } from './context';

function App () {

  const [stickers, setStickers] = useState([]);
  const [isEmojis, setIsEmojis] = useState([]);
  const [isEditingActive, setEditing] = useState(false);
  const updateXarrow = useXarrow();

  const deleteSticker = (id) => {
    setStickers((arr) => arr.filter((item) => item.props.id !== id));
  }

  function createSticker(group_id = null) {
    if (group_id === null){ 
      group_id = makeID();
    }
    
    let ID = makeID();
    
    return (
            <Sticker key={ID}
                     id={ID}
                     gID={group_id}
                     deleteSticker={deleteSticker}
                     makeNewGroup={makeNewGroup}/>
    );
  }

  const makeNewGroup = (group_id) => {
    const sticker = createSticker(group_id);
    addSticker(sticker);
  }

  const addSticker = (sticker = null) => {

    if (sticker === null) {
      sticker = createSticker();
    } 

    setStickers((arr) => {
      const updatedStickers = [...arr, sticker];
      updateXarrow();
      return updatedStickers;
    });
  }

  useEffect(() => {
    updateXarrow();
  }, [stickers])

  /* {stickers.map((sticker, index) => {
        const group = stickers.filter((stk) => stk.props.gID === sticker.props.gID);
        const lastTwoStickers = group.slice(-2);
        if (lastTwoStickers.length >= 2) {
          const arrowKey = `${lastTwoStickers[lastTwoStickers.length - 2].props.id}-${lastTwoStickers[lastTwoStickers.length - 1].props.id}`;
          // console.log(arrowKey)
          return (
            <Xarrow
              key={arrowKey}
              start={lastTwoStickers[0].props.id}
              end={lastTwoStickers[1].props.id}
              animating={false}
            />
          );
        }
    })} */

  return (
    <div className='relative h-screen'>
      <div className="dotted-background">
      <EditingContext.Provider value={{isEditingActive, setEditing}}>
      <EmojisContext.Provider value={{setIsEmojis}}>
      <Xwrapper>
      {stickers}
      {isEmojis}
      </Xwrapper>
      <BottomButtons addSticker={addSticker}/>
      </EmojisContext.Provider>
      </EditingContext.Provider>
      </div>
    </div>
  );
}

export default App;
