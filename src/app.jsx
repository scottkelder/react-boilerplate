import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      someState: ''
    }
  }
  render() {
    <div>
      I am a React App. Have fun!
    </div>
  }
}
ReactDOM.render(<App />, document.getElementById('root'))