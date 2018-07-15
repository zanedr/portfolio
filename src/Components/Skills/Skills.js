import React, { Component } from 'react';
import './Skills.css';

class Skills extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <section className="skills-container">
                <h4 className="skill-section-title">{this.props.name}</h4>
                <div className="skills-data-container">
                    {this.props.data.map(s => {
                            return(
                                <p className="skill-text" key={s}>{s}</p>
                            )
                    })}
                </div>
            </section>
        )
    }
}

export default Skills;