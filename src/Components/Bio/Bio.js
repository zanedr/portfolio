import React, { Component } from 'react';
import './Bio.css';

class Bio extends Component {
  render() {
    return (
      <div className="bio-container">
        <p className="bio-text">I am a developer with a focus on clean, concise, testable code.
            Currently, I am on the UI side of Charter Communications' Advanced Engineering Department.
            I work with a team of good people to create effective tools for network automation and visualization 
            with a flexible, intuitive UX.
        </p>
        <p className="bio-text">
        Work is more efficient, more effective, and more enjoyable when 
            team collaboration is positive and communication is open. I strive 
            to be an encouraging, creative presence in any environment.
        </p>
      </div>
    );
  }
}

export default Bio;
