import React, { Component } from 'react'
import { render } from 'react-dom'
import Home from './routes/Home'

const App = (props) => <Home />

render(<App />, document.querySelector('#app'))
