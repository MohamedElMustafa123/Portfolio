import { useEffect, useRef, useState } from 'react'
import './WorkItem.css'

export default function WorkItem({ title, description, image, href, side }) {
  //refernce to the dom elemnt
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return
      const rect = ref.current.getBoundingClientRect()
      if (rect.top < window.innerHeight * 0.75) { //when elemt is at 75% into view mark set  visible to true
        setVisible(true)
      }
    }

    window.addEventListener('scroll', handleScroll) //scroll event listener
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const classes = [
    'work-item',
    side === 'right' ? 'work-item-right' : 'work-item-left',
    visible ? 'visible' : ''
  ].join(' ')

  //format of work items
  return (
    <div className="work-item-row">
      <a ref={ref} href={href} className={classes} target="_blank" rel="noopener noreferrer">
        <img src={image} alt={title} className="work-item-image" />
        <div className="work-item-overlay">
          <div className="work-item-top">
            <h3 className="work-item-title">{title}</h3>
            <p className="work-item-desc">{description}</p>
          </div>
          <span className="work-item-cta">View →</span>
        </div>
      </a>
    </div>
  )
}