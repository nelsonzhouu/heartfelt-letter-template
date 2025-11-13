import { useState, useEffect } from 'react'
import './Scene.css'

// Scene 6: Interactive gift box reveal
// Final scene - user clicks gift to reveal your final message
function Scene6() {
  // Control what's visible: gift box or final message
  const [showGift, setShowGift] = useState(true)
  const [showMessage, setShowMessage] = useState(false)

  // When gift is clicked: hide gift, then show message after delay
  const handleGiftClick = () => {
    setShowGift(false)
    setTimeout(() => setShowMessage(true), 500)
  }

  return (
    <div className="scene scene6">
      {/* PART 1: Gift box (shows first, clickable) */}
      {showGift && (
        <div className="gift-container fade-in">
          {/* Clickable gift box - CUSTOMIZE THE GIF */}
          <div className="gift" onClick={handleGiftClick}>
            <img
              src="https://media.tenor.com/EU_OfOEvkPkAAAAi/regalo-transparente.gif"
              alt="Gift Box"
              className="gift-image"
            />
          </div>

          {/* Text prompting user to click - CUSTOMIZE THIS */}
          <p className="main-text">[Gift box text...]</p>
        </div>
      )}

      {/* PART 2: Final message (shows after gift is clicked) */}
      {showMessage && (
        <div className="final-message fade-in">
          {/* Character with flower or gift - CUSTOMIZE THE GIF */}
          <div className="character-container">
            <div className="character my-melody-flower">
              <img
                src="https://media.tenor.com/yv42DxQE178AAAAi/sanrio-my-melody.gif"
                alt="My Melody with Flower"
                className="character-image"
              />
            </div>
          </div>

          {/* Your final message - CUSTOMIZE ALL TEXT */}
          <div className="text-container">
            <p className="main-text">[First line...]</p>
            <p className="main-text">[Second line...]</p>
            <p className="main-text">[Third line...]</p>

            {/* This will be highlighted in pink */}
            <p className="highlight">[Highlighted message...]</p>

            {/* Your signature - REPLACE [Your Name] */}
            <p className="signature">- [Your Name]</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default Scene6
