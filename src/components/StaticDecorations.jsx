import './StaticDecorations.css'

// Static Decorations Component
// Creates fixed-position decorative emojis around the edges of the screen
// Unlike FloatingElements, these stay in place but may have subtle animations
// You can change any emoji to customize the look!
function StaticDecorations() {
  return (
    <div className="static-decorations">
      {/* Corner decorations - positioned at four corners of screen */}
      <div className="decoration top-left">🎀</div>
      <div className="decoration top-right">🌸</div>
      <div className="decoration bottom-left">🌺</div>
      <div className="decoration bottom-right">💝</div>

      {/* Side decorations - positioned along left and right edges */}
      <div className="decoration left-1">💗</div>
      <div className="decoration left-2">⭐</div>
      <div className="decoration right-1">✨</div>
      <div className="decoration right-2">🌟</div>

      {/* Top decorations - positioned along top edge */}
      <div className="decoration top-1">☁️</div>
      <div className="decoration top-2">☁️</div>
      <div className="decoration top-3">☁️</div>

      {/* Scattered decorations - positioned at various spots across the screen */}
      <div className="decoration scatter-1">💕</div>
      <div className="decoration scatter-2">💖</div>
      <div className="decoration scatter-3">💓</div>
      <div className="decoration scatter-4">🌸</div>
      <div className="decoration scatter-5">✨</div>
    </div>
  )
}

export default StaticDecorations
