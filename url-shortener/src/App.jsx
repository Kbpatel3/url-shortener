import React, { useState } from 'react'
import './App.css'
import UrlInput from './components/UrlInput'
import GenerateUrl from './components/GenerateUrl'
import ShortenedUrl from './components/ShortenedUrl'

function App() {
  const [inputValue, setInputValue] = useState('')
  const [shortenedUrl, setShortenedUrl] = useState('')

  return (
    <>
      <h1>URL Shortener</h1>
      <div className="input-container">
        <UrlInput inputValue={inputValue} setInputValue={setInputValue}/>
        <GenerateUrl inputValue={inputValue} setShortenedUrl={setShortenedUrl}/>
        {shortenedUrl && <ShortenedUrl shortenedUrl={shortenedUrl}/>}
      </div>
    </>
  )
}

export default App
