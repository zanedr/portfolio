import React, { Component } from 'react';
import Bio from './Components/Bio/Bio';
import Project from './Components/Project/Project';
import ExternalLink from './Components/ExternalLink/ExternalLink';
import Skills from './Components/Skills/Skills';
import { projectsData } from './Data/ProjectsData';
import { externalLinkData } from './Data/ExternalLinkData';
import { skillsData } from './Data/SkillsData';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="main-container">
        <header className="header-container">
          <div className="main-title-container">
            <h1 className="main-title">Zane Russell</h1>
            <h1 className="main-title">Front-End Engineer</h1>
          </div>
          <div className="external-links-container"> 
            {externalLinkData.map(e => {
              return (
                <ExternalLink className="external-links" key={e.name} name={e.name} link={e.link} image={e.image}/>
              )
            })}
          </div>
        </header>
        <hr className="content-divider" />
        <section className="middle-section">
          <Bio />
          <section className="skill-topics">
            {skillsData.map(s => {
              return <Skills key={s.name} name={s.name} data={s.sdata} />
            })
            }
          </section>
        </section>
        <hr className="content-divider" />
        {projectsData.map(p => {
          return <Project key={p.name} project={p} />
        })
        }
      </div>
    );
  }
}

export default App;
