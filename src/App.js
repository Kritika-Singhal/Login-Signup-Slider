import React, {Component} from 'react';
import './App.css';
import Sign from './component/signinup';

class App extends Component {
  /*
  constructor() {
    super();
    this.state = {
        rightpane: false,
    }
  }

  handleSignupButton = () => this.setState({
    rightpane: true,
  });

  handleSigninButton = () => this.setState({
    rightpane: false,
  });
*/
  render() {
   /* const { handleSignupButton, handleSigninButton } = this;
    const { rightpane } = this.state;*/
    return (
        <div className="App">
                <Sign />
            </div>
    );
  }
}

export default App;
