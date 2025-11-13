import { useState, useEffect } from 'react'
import './Scene.css'

// Scene 2: Letter card with typing animation
// Shows a character and types out a message letter-by-letter
function Scene2({ onNext }) {
  // Tracks the currently displayed text (starts empty, builds up letter by letter)
  const [typedText, setTypedText] = useState('')

  // CUSTOMIZE THIS: The full message that will be typed out
  const fullText = "[Your typed message here...]"

  // Typing animation effect - runs once when component loads
  useEffect(() => {
    let currentIndex = 0

    // Add one character every 50ms
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(typingInterval) // Stop when complete
      }
    }, 50) // Adjust this number to type faster (lower) or slower (higher)

    // Cleanup function to prevent memory leaks
    return () => clearInterval(typingInterval)
  }, [])

  return (
    <div className="scene scene2">
      {/* White card container */}
      <div className="card">
        {/* CUSTOMIZE THIS: Card title/header */}
        <h2 className="card-title">[Card Title]</h2>

        {/* Character image - CUSTOMIZE THE GIF URL */}
        <div className="character-container">
          <div className="character cinnamoroll-sad">
            <img
              src="https://media1.tenor.com/m/Y4XzIi2cqPYAAAAC/cinnamoroll-sorry.gif"
              alt="Cinnamoroll Sorry"
              className="character-image"
            />
          </div>
        </div>

        {/* The typed text - displays character by character */}
        <p className="typed-text">{typedText}</p>

        {/* Button appears only after typing is complete */}
        {typedText.length === fullText.length && (
          <button className="scene-button fade-in" onClick={onNext}>
            Continue reading...
          </button>
        )}
      </div>
    </div>
  )
}

export default Scene2
