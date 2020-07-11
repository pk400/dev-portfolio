import React from 'react'

import './Header.css'
import ProfileConfig from '../config.json'
import EmojiButton from './EmojiButton'
import SocialLinks from './SocialLinks'

const Header = () =>
  <header>
    <div className="headline">
      <div className="header-left">
        <h1>{ProfileConfig.name}</h1>
        {ProfileConfig.headlines.map((headline, i) =>
          <span key={i} className="headlines">{headline}</span>)}
      </div>
      <div className="header-right">
        <span className="thank-you">{ProfileConfig.thank_you_note}</span><EmojiButton emoji="👋" />
      </div>
    </div>
    <div className="headline-message">{ProfileConfig.headline_message}</div>
    <SocialLinks />
  </header>

export default Header
