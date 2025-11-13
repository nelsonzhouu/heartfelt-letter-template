import { useState, useEffect, useRef } from 'react'
import './MusicPlayer.css'

// Music Player Component
// Plays background music and shows mute/unmute button
// IMPORTANT: Add your music file as "music.mp3" in the public folder
function MusicPlayer({ shouldPlay }) {
  // Track if music is currently playing
  const [isPlaying, setIsPlaying] = useState(false)

  // Track if music is muted
  const [isMuted, setIsMuted] = useState(false)

  // Reference to the audio element
  const audioRef = useRef(null)

  // Start playing music when shouldPlay prop becomes true
  useEffect(() => {
    if (shouldPlay && audioRef.current && !isPlaying) {
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch(error => console.log('Play prevented:', error))
    }
  }, [shouldPlay, isPlaying])

  // Toggle mute/unmute when button is clicked
  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  // Before music starts, only render the audio element (no button)
  if (!shouldPlay) {
    return (
      <audio ref={audioRef} loop>
        {/* This loads music.mp3 from the public folder */}
        <source src="/music.mp3" type="audio/mpeg" />
      </audio>
    )
  }

  // After music starts, show the mute button
  return (
    <div className="music-player">
      {/* Audio element with loop enabled */}
      <audio ref={audioRef} loop>
        <source src="/music.mp3" type="audio/mpeg" />
      </audio>

      {/* Mute/unmute button with SVG icon */}
      <button className="mute-toggle" onClick={toggleMute}>
        <svg className="speaker-icon" viewBox="0 0 24 24" fill="white">
          {/* Speaker base (always visible) */}
          <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/>

          {/* Sound waves (visible when NOT muted) */}
          {!isMuted && (
            <>
              <path className="wave-svg" d="M14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" opacity="0.8"/>
            </>
          )}

          {/* Mute icon with X (visible when muted) */}
          {isMuted && (
            <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
          )}
        </svg>
      </button>
    </div>
  )
}

export default MusicPlayer
