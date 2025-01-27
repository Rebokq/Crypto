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
          element: ".rank",
          intro: "This is the actual ranking of the cryptocurrency",
          tooltipClass: 'customTooltip'
        },
        {
          element: ".coin",
          intro: "This is the name of the crypto"
        },
        {
          element: ".price",
          intro: "The actual price of the crytpo"
        },
        {
          element: ".percentage",
          intro: "The last 24 hours percentage"
        },
        {
          element: ".market-cap",
          intro: "The market cap"
        },
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
            <button className="" onClick={this.toggleSteps}><HelpOutlineIcon /></button>
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

