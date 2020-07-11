import React from 'react'

import ProfileConfig from '../config.json'

const Work = () => {
  return (
    <div>
      <h2>Past Work</h2>
      {ProfileConfig.work.map(work => {
        return (
          <div className="work-container">
            {work.start} - {work.end} {work.company}, {work.title}
          </div>
        )
      })}
    </div>
  )
}

export default Work
