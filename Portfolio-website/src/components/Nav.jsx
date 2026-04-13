import { useState } from 'react'
import './Nav.css'

export default function Nav() {
  const [copied, setCopied] = useState(false)
  const [fading, setFading] = useState(false)

  //copy email function when clicked
  function copyEmail() {
    navigator.clipboard.writeText('NOBIMOHAMED262@GMAIL.COM')
    setFading(true)
    setTimeout(() => {
      setCopied(true)
      setFading(false)
    }, 200)
    setTimeout(() => {
      setFading(true)
      setTimeout(() => {
        setCopied(false)
        setFading(false)
      }, 200)
    }, 2200)
  }

  //nav bar items and format
  return (
    <nav className="nav">
      <span className="nav-name">MUSTAFA</span>
      <div className="nav-links">
        <a href="#work">WORK</a>
        <a href="#about">ABOUT</a>
      </div>
      <div className="nav-email" onClick={copyEmail}>
        <span className={`email-text ${fading ? 'fade' : ''}`}>
          {copied ? 'COPIED!' : 'NOBIMOHAMED262@GMAIL.COM'}
        </span>
        {!copied && (
          <svg className="copy-icon" xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
          </svg>
        )}
      </div>
    </nav>
  )
}