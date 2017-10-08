import React, {Component} from 'react'
import ReactDom from 'react-dom'
import StickyManager from './components/StickyManager'


class App extends Component
{

    render()
    {
        return(

            <div className="App">
               <StickyManager />

            </div>
        );
    }
}

export default App;