import React from 'react';
import './App.css';
import DrumPad from './components/DrumPad';
import {data} from './components/Data'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      display: 'Click or press key'
    };

    this.handleDisplay = this.handleDisplay.bind(this)
  }

  handleDisplay = newDisplay => {
    this.setState({
      display: newDisplay // update the display
    })
  };

  render() {
    return (
        <div className={'container'}>
            <div id={'drum-machine'}>
              <div className={'left'}>
                  <h2 id={'display'}>{this.state.display}</h2>
              </div>
                <div className={'pads'}>
              {data.map(d => (
                  <DrumPad
                      keyCode={d.keyCode}
                      id={d.id}
                      keyTrigger={d.keyTrigger}
                      url={d.url}
                      handleDisplay={this.handleDisplay}
                  />
              ))}
                </div>
            </div>
        </div>
    );
  }
}

export default App;
