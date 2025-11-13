import { useState, useEffect } from 'react'
import './Scene.css'

// Scene 3: Both characters together - emotional moment
// Similar to Scene 1 but typically used for a more emotional part of the story
function Scene3({ onNext }) {
  // Control when text appears (delayed for effect)
  const [showText, setShowText] = useState(false)

  // Show text after 500ms delay
  useEffect(() => {
    setTimeout(() => setShowText(true), 500)
  }, [])

  return (
    <div className="scene scene3">
      {/* Two characters side by side */}
      <div className="characters-together">
        {/* LEFT CHARACTER - CUSTOMIZE THIS GIF */}
        <div className="character cinnamoroll-sad">
          <img
            src="https://media1.tenor.com/m/LQH2wyi5Wi8AAAAC/cinnamoroll-sanrio.gif"
            alt="Cinnamoroll Sorry"
            className="character-image"
          />
        </div>

        {/* RIGHT CHARACTER - CUSTOMIZE THIS GIF */}
        <div className="character my-melody">
          <img
            src="https://media1.tenor.com/m/1nMQIJyrrtAAAAAC/my-melody-crying.gif"
            alt="My Melody Crying"
            className="character-image"
          />
        </div>
      </div>

      {/* Text appears after delay */}
      {showText && (
        <div className="text-container fade-in">
          {/* CUSTOMIZE THIS MESSAGE */}
          <p className="main-text">[Your message...]</p>

          {/* Button to continue - CUSTOMIZE THE TEXT */}
          <button className="scene-button" onClick={onNext}>
            [Button text...]
          </button>
        </div>
      )}
    </div>
  )
}

export default Scene3
