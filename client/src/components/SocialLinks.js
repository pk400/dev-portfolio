import React from 'react'

import linkedinSVG from '../images/linkedin.svg'
import githubSVG from '../images/github.svg'
import twitterSVG from '../images/twitter.svg'
import ProfileConfig from '../config.json'
import './SocialLinks.css'

const SocialLinks = () => {
  const social = []
  if ("linkedin" in ProfileConfig.social) {
    social.push(<a href={ProfileConfig.social.linkedin} target='_blank'><img src={linkedinSVG} /></a>)
  }
  if ("github" in ProfileConfig.social) {
    social.push(<a href={ProfileConfig.social.github} target='_blank'><img src={githubSVG} /></a>)
  }
  if ("twitter" in ProfileConfig.social) {
    social.push(<a href={ProfileConfig.social.twitter} target='_blank'><img src={twitterSVG} /></a>)
  }
  return (
    <div>
      <div className="social-links">
        {social.map((socialLink, i) =>
          <div key={i} className="social-link">
            {socialLink}
          </div>)}
      </div>
    </div>
  )
}

export default SocialLinks
