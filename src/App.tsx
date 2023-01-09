import React from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navigation from './components/Navigation'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Banner } from './components/Banner'

const App = () => {

  return (
    <div className="App">
        <Navigation></Navigation>
        <Banner></Banner>
    </div>
  )
}

export default App
