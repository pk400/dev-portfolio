import React, { useState, useEffect } from 'react'

import axios from 'axios'

import './EmojiButton.css'

const EmojiButton = ({
  text,
  emoji,
  hideCounter=false
}) => {
  const [counter, setCounter] = useState(222)
  const incrementCounter = () => {
    axios
      .post('/visitorcounter')
      .then(response => {
        setCounter(counter + 1)
      })
  }
  useEffect(() => {
    axios
      .get('/visitorcounter')
      .then(response => {
        setCounter(response.data.result)
      })
  })
  let showCounter
  if (!hideCounter) {
    showCounter = (
      <div className="counter-circle">
        <span className="counter-number">{counter}</span>
      </div>
    )
  }
  return (
    <div className="emoji-button">
      {text}
      <div className="emoji-circle" onClick={incrementCounter}>
        <span className="emoji-text">{emoji}</span>
        {showCounter}
      </div>
    </div>
  )
}

export default EmojiButton
