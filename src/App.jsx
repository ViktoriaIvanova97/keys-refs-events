import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import List from './List'

function App() {
// const arrEl = ['dog','cat','people','car']

  return (
    <>
      <List arr={['dog','cat','giraffe','lion']} />
    </>
  )
}

export default App
