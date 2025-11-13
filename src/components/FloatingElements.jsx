import './FloatingElements.css'

// Floating Elements Component
// Creates continuously floating decorative emojis that rise from bottom to top
// These elements are animated in FloatingElements.css
function FloatingElements() {
  return (
    <div className="floating-elements">
      {/* Each element floats upward continuously */}
      {/* 'left' controls horizontal position (10% = left side, 90% = right side) */}
      {/* 'animationDelay' staggers when each element starts floating */}
      {/* You can change the emojis to any you like! */}

      <div className="floating-item heart" style={{ left: '10%', animationDelay: '0s' }}>💗</div>
      <div className="floating-item heart" style={{ left: '20%', animationDelay: '2s' }}>💝</div>
      <div className="floating-item star" style={{ left: '30%', animationDelay: '1s' }}>⭐</div>
      <div className="floating-item flower" style={{ left: '40%', animationDelay: '3s' }}>🌸</div>
      <div className="floating-item heart" style={{ left: '50%', animationDelay: '1.5s' }}>💖</div>
      <div className="floating-item cloud" style={{ left: '60%', animationDelay: '2.5s' }}>☁️</div>
      <div className="floating-item star" style={{ left: '70%', animationDelay: '0.5s' }}>✨</div>
      <div className="floating-item flower" style={{ left: '80%', animationDelay: '3.5s' }}>🌺</div>
      <div className="floating-item heart" style={{ left: '90%', animationDelay: '4s' }}>💕</div>
      <div className="floating-item sparkle" style={{ left: '15%', animationDelay: '2.2s' }}>✨</div>
      <div className="floating-item sparkle" style={{ left: '85%', animationDelay: '1.8s' }}>✨</div>
    </div>
  )
}

export default FloatingElements
