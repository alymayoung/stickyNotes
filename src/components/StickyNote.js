import React, {Component} from 'react'
import ReactDom from 'react-dom'
import Draggable from 'react-draggable';
require('./StickyNote.css');
class StickyNote extends Component
{
    render()
    {
       return(
        <Draggable
        handle=".handle"
        defaultPosition={{x: 0, y: 0}}
        position={null}
        onStart={this.handleStart}
        onDrag={this.handleDrag}
        onStop={this.handleStop}
         >
        <div>
          <div className="handle stickyNote">Drag from here</div>
          <div>This readme is really dragging on...</div>
        </div>
      </Draggable>
       ); 
    }
}
export default StickyNote;