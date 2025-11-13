import { useState, useEffect } from 'react'
import './Scene.css'

// Scene 4: Main message card
// This is the heart of your letter - where you put your main message
function Scene4({ onNext }) {
  // Control when text appears
  const [showText, setShowText] = useState(false)

  // Show text after 500ms delay
  useEffect(() => {
    setTimeout(() => setShowText(true), 500)
  }, [])

  return (
    <div className="scene scene4">
      {/* Large white card for your main message */}
      <div className="card apology-card">
        {showText && (
          <div className="apology-text fade-in">
            {/* CUSTOMIZE ALL OF THESE PARAGRAPHS WITH YOUR MESSAGE */}
            {/* You can add or remove paragraphs as needed */}
            <p>[First paragraph...]</p>
            <p>[Second paragraph...]</p>
            <p>[Third paragraph...]</p>
            <p>[Fourth paragraph...]</p>
            <p>[Fifth paragraph...]</p>

            {/* This paragraph will be highlighted in pink - use for most important message */}
            <p className="highlight">[Highlighted text...]</p>

            <p>[Sixth paragraph...]</p>
            <p>[Final paragraph...]</p>

            {/* Button to continue - CUSTOMIZE THE TEXT */}
            <button className="scene-button" onClick={onNext}>
              [Button text...]
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Scene4
