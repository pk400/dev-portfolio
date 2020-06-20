import React from 'react'

import 'normalize.css'
import './App.css'
import Header from './Header'
import Projects from './Projects'

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Projects />
      </main>
    </div>
  )
}

export default App
