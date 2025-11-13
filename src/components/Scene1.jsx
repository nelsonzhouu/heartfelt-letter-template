import { useState, useEffect } from 'react'
import './Scene.css'

// Scene 1: Opening scene with two characters
// This is the first thing users see when they visit your site
function Scene1({ onNext, onStartMusic }) {
  // Control when text appears (delayed for dramatic effect)
  const [showText, setShowText] = useState(false)

  // Show text after 500ms delay when component loads
  useEffect(() => {
    setTimeout(() => setShowText(true), 500)
  }, [])

  // When button is clicked: start music AND move to next scene
  const handleNext = () => {
    onStartMusic() // Start the background music
    onNext() // Move to Scene 2
  }

  return (
    <div className="scene scene1">
      {/* Two characters displayed side by side */}
      <div className="characters-together">
        {/* LEFT CHARACTER - Replace this GIF URL with your own */}
        <div className="character cinnamoroll">
          <img
            src="https://media.tenor.com/sUz9HU2JmzMAAAAi/cinnamoroll.gif"
            alt="Cinnamoroll"
            className="character-image"
          />
        </div>

        {/* RIGHT CHARACTER - Replace this GIF URL with your own */}
        <div className="character my-melody">
          <img
            src="https://media.tenor.com/HNvpQMvIpREAAAAi/nini1.gif"
            alt="My Melody"
            className="character-image"
          />
        </div>
      </div>

      {/* Text appears after delay with fade-in animation */}
      {showText && (
        <div className="text-container fade-in">
          {/* CUSTOMIZE THESE MESSAGES */}
          <p className="main-text">Hey [Name], </p>
          <p className="main-text">[Your opening line...]</p>
          <p className="main-text">[Another line...]</p>

          {/* Button to proceed to next scene - CUSTOMIZE THE TEXT */}
          <button className="scene-button" onClick={handleNext}>
            [Button text...]
          </button>
        </div>
      )}
    </div>
  )
}

export default Scene1
