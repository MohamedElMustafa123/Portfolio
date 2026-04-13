import { useState, useEffect, useRef } from 'react'
import './Footer.css'

export default function Footer() {
  const [copied, setCopied] = useState(false)
  const [fading, setFading] = useState(false)
  const ctaRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ctaRef.current.classList.add('in-view')
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )

    if (ctaRef.current) observer.observe(ctaRef.current)
    return () => observer.disconnect()
  }, [])

  //function to copy the email on click
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

  return (
    <>
      {/*footer format  */}
      <section className="footer-cta" ref={ctaRef}>
        <h2>Let's get to know<br />each other</h2>
        <div className="footer-email-btn" onClick={copyEmail}>
          <span className={`footer-email-text ${fading ? 'fade' : ''}`}>
            {copied ? 'COPIED!' : 'NOBIMOHAMED262@GMAIL.COM'}
          </span>
          {!copied && (
            <svg className="copy-icon" xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
            </svg>
          )}
        </div>
      </section>

      {/*customizing the linkedin icon size here */}
      <footer className="footer-bar">
        <a href="https://www.linkedin.com/in/mustafa-m-006639291" target="_blank" rel="noopener noreferrer" className="linkedin-link">
          <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </a>
      </footer>
    </>
  )
}