import { useState, useEffect } from 'react'
import './Scene.css'

// Scene 5: Hopeful message with single character
// A shorter scene to express hope or moving forward
function Scene5({ onNext }) {
  // Control when text appears
  const [showText, setShowText] = useState(false)

  // Show text after 500ms delay
  useEffect(() => {
    setTimeout(() => setShowText(true), 500)
  }, [])

  return (
    <div className="scene scene5">
      {/* Single character display */}
      <div className="character-container">
        <div className="characters-hugging">
          {/* CUSTOMIZE THIS GIF */}
          <img
            src="https://media.tenor.com/rgrD07OWYYYAAAAi/cinnamoroll-sanrio.gif"
            alt="Cinnamoroll"
            className="character-image"
          />
        </div>
      </div>

      {/* Text appears after delay */}
      {showText && (
        <div className="text-container fade-in">
          {/* CUSTOMIZE THESE MESSAGES */}
          <p className="main-text">[Your message...]</p>
          <p className="main-text">[Another line...]</p>
          <p className="main-text">[Final line...]</p>

          {/* Button to continue - CUSTOMIZE THE TEXT */}
          <button className="scene-button" onClick={onNext}>
            [Button text...]
          </button>
        </div>
      )}
    </div>
  )
}

export default Scene5
