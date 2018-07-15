import React, { Component } from 'react';
import './ExternalLink.css';

class ExternalLink extends Component {
    constructor(props) {
        super(props)
        this.externalLinkStyle = {
            backgroundImage: 'url(' + require(`${this.props.image}`) + ')',
        }
    }

    render() {
        return (
            <section className="links-container">
                <img alt={`icon for ${this.props.name}`} 
                className="links-icons" 
                src={require(`${this.props.image}`)} 
                onClick={() => window.open(this.props.link)} />
            </section>
        )
    }
}

export default ExternalLink;