import React from 'react'

import 'normalize.css'
import './App.css'
import Header from './Header'
import Work from './Work'
import Projects from './Projects'

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Work />
        <Projects />
      </main>
    </div>
  )
}

export default App
