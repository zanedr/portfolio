import React, { Component } from 'react';
import './Project.css';

class Project extends Component {
    constructor(props) {
        super(props)
        this.projectStyle = {
            // backgroundImage: `url(${this.props.project.picture})`,
            backgroundImage: 'url(' + require(`${this.props.project.picture}`) + ')',
            backgroundSize: 'cover',
            color: this.props.project.color
        }
    }

    evaluateLinks() {
        if(this.props.project.showLinks) {
            return (<span className="project-links-container">
                        <img alt="git hub icon" className="project-links-icons" src={require('./github-logo.svg')} onClick={() => window.open(this.props.project.github)} />
                        <img alt="live version" className="project-links-icons" src={require('./computer.svg')} onClick={() => window.open(this.props.project.working)}/>
                        <img alt="more information" className="project-links-icons" src={require('./question-mark.svg')} />
                    </span>)
        } else {
            return (
            <span className="project-links-container">
                <p className="project-unavailable">Enterprise software. Code unavailable.</p>
                <img alt="more information" className="project-links-icons" src={require('./question-mark.svg')} />
            </span>
            )
        }
    }

    render() {
        return (
            <section key={this.props.project.name} 
                className="project-container">
                <div className="project-info">
                    <p className="project-text-title">{this.props.project.name}</p>
                    <p className="project-text">{this.props.project.synopsis}</p>
                    {this.evaluateLinks()}
                </div>
                <div className="project-image" style={this.projectStyle}></div>
            </section>
        );
    }
}

export default Project;
