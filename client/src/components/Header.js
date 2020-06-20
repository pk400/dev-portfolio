import React from 'react'

import './Header.css'
import ProfileConfig from '../config.json'
import EmojiButton from './EmojiButton'
import SocialLinks from './SocialLinks'

const Header = () =>
  <header>
    <div className="headline">
      <h1>{ProfileConfig.name}</h1>
      {ProfileConfig.headlines.map((headline, i) =>
        <span key={i} className="headlines">{headline}</span>)}
      <div className="header-right">
      {ProfileConfig.thank_you_note} <EmojiButton emoji="👋" />
      </div>
    </div>
    <div>{ProfileConfig.headline_message}</div>
    <SocialLinks />
  </header>

export default Header
