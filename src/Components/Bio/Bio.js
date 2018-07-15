import React, { Component } from 'react';
import './Bio.css';

class Bio extends Component {
  render() {
    return (
      <div className="bio-container">
        <p className="bio-text">Software developer with a focus on clean, concise, testable code. 
            Work is more efficient, more effective, and more enjoyable when 
            team collaboration is positive and communication is open. I strive 
            to be an encouraging, creative presence in any environment.
        </p>
        <p className="bio-text">
            Currently, I work on the UI side of Charter Communications' Advanced Engineering Team, 
            focusing on the construction of tools for network automation and visualization, and the 
            creation of intuitive UX.
        </p>
      </div>
    );
  }
}

export default Bio;
