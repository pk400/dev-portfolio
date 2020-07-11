import React, { useState } from 'react'

import ProfileConfig from '../config.json'
import './Projects.css'

const initializeSkills = projects => {
  const skills = new Set()
  projects.map(project => project.skills.map(skill => skills.add(skill)))
  return skills
}

const Projects = () => {
  const allSkills = initializeSkills(ProfileConfig.projects)
  const [showProjects, setShowProjects] = useState(ProfileConfig.projects)
  const [skillFilter, setSkillFilter] = useState(new Set())
  const updateFilter = (skill) => {
    const newFilter = new Set([...skillFilter])
    if (!newFilter.has(skill)) {
      newFilter.add(skill)
      setSkillFilter(newFilter)
    }
    else {
      newFilter.delete(skill)
      setSkillFilter(newFilter)
    }
    if (newFilter.size === 0) {
      setShowProjects(ProfileConfig.projects)
      return
    }
    const projects = ProfileConfig.projects.filter(project =>
      project.skills.some(skill => newFilter.has(skill)))
    setShowProjects(projects)
  }

  return (
    <div className="projects">
      <h2>Projects</h2>
      <div className="skills">
        {Array.from(allSkills).map((skill, i) =>
          <div
            key={i}
            className={(skillFilter.has(skill) ? "selected" : "")}
            onClick={() => updateFilter(skill)}>{skill}</div>)}
      </div>
      <div className="project-filter">
        {showProjects.map((project, i) =>
          <div key={i} className="project-container">
            <h3 className="project-name">{project.name}</h3>
            <div className="project-description">{project.description}</div>
            <div className="project-links">
              <ul>
                {project.links.map(link => <li><a href={link[1]}>{link[0]}</a></li>)}
              </ul>
            </div>
            <div className="mini-skills">
              {project.skills.map((skill, i) =>
                <div key={i} className="mini-skill">{skill}</div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Projects
