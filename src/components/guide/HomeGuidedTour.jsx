import React, { Component } from "react";
import { Steps, Hints } from "intro.js-react";
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import "intro.js/introjs.css";
import './introJs.css'
export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stepsEnabled: false,
      initialStep: 0,
      doneLabel: 'Done',
      steps: [
        {
          element: ".market",
          intro: "Here, you can find all cryptocurrency data 📈"
        },
        {
          element: ".trade",
          intro: "The actual price of the crytpo"
        },
        {
          element: ".feed",
          intro: "If you are interested in crypto news, you can check out our feed 📰"
        },
        {
          element: ".contact",
          intro: "Contact us"
        },
        {
            element: ".search-bar",
            intro: "Feel free to search for the crypto you are interested in 🔎"
          },
          {
            element: ".profile",
            intro: "Here you can manage your profile 👤"
          }
      ],

    };
    
  }

  render() {
    const {
      stepsEnabled,
      steps,
      initialStep,
    } = this.state;

    return (
      <div>
        <Steps
          enabled={stepsEnabled}
          steps={steps}
          initialStep={initialStep}
          onExit={this.onExit}
        />
        <div className="controls">
          <div>
            <button className="ml-4 rounded-r-xl bg-teal-700 p-4 px-8 hover:scale-105" onClick={this.toggleSteps}>Guided Tour</button>
          </div>
        </div>
      </div>
    );
  }

  onExit = () => {
    this.setState(() => ({ stepsEnabled: false }));
  };

  toggleSteps = () => {
    this.setState(prevState => ({ stepsEnabled: !prevState.stepsEnabled }));
  };

  options = {
    doneLabel: 'Done',
  }
  
 
}

