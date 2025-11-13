// Import React hooks and styles
import { useState } from 'react'
import './App.css'

// Import all components
import MusicPlayer from './components/MusicPlayer'
import Scene1 from './components/Scene1'
import Scene2 from './components/Scene2'
import Scene3 from './components/Scene3'
import Scene4 from './components/Scene4'
import Scene5 from './components/Scene5'
import Scene6 from './components/Scene6'
import FloatingElements from './components/FloatingElements'
import StaticDecorations from './components/StaticDecorations'

function App() {
  // Track which scene is currently displayed (1-6)
  const [currentScene, setCurrentScene] = useState(1)

  // Track whether music has been started (starts when user clicks button in Scene 1)
  const [musicStarted, setMusicStarted] = useState(false)

  // Function to move to the next scene
  const nextScene = () => {
    setCurrentScene(prev => prev + 1)
  }

  // Function to start the background music
  const startMusic = () => {
    setMusicStarted(true)
  }

  return (
    <div className="app">
      {/* Music player component - plays background music */}
      <MusicPlayer shouldPlay={musicStarted} />

      {/* Static decorative elements (hearts, flowers, bows) */}
      <StaticDecorations />

      {/* Floating animated elements */}
      <FloatingElements />

      {/* Scene container - shows one scene at a time based on currentScene state */}
      <div className="scene-container">
        {/* Scene 1: Opening with both characters */}
        {currentScene === 1 && <Scene1 onNext={nextScene} onStartMusic={startMusic} />}

        {/* Scene 2: Letter card with typing animation */}
        {currentScene === 2 && <Scene2 onNext={nextScene} />}

        {/* Scene 3: Both characters - emotional moment */}
        {currentScene === 3 && <Scene3 onNext={nextScene} />}

        {/* Scene 4: Main message with full text */}
        {currentScene === 4 && <Scene4 onNext={nextScene} />}

        {/* Scene 5: Hopeful message about future */}
        {currentScene === 5 && <Scene5 onNext={nextScene} />}

        {/* Scene 6: Interactive gift box with final message */}
        {currentScene === 6 && <Scene6 />}
      </div>
    </div>
  )
}

export default App
