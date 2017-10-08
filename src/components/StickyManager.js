import React, {Component} from 'react'
import ReactDom from 'react-dom'
import StickyNote from './StickyNote'

class StickyManager extends Component
{
   state={
        numberOfStickyNotes : 0

   }



    addStickyNote = ()=>{

        console.log("Add sticky");
        this.setState(
           { numberOfStickyNotes : (this.state.numberOfStickyNotes + 1) }


        );

    }

    render()
    {
        const stickyNotes = [];
        
        for (var i = 0; i < this.state.numberOfStickyNotes; i += 1) 
        {
            stickyNotes.push(<StickyNote key={i} number={i} />);
        };


        return(
            <div>
                
                <button onClick={this.addStickyNote}>Add</button> | Hide/Show
                <div>
                    {stickyNotes}
                </div>
            </div>

        );

    }


}

export default StickyManager;