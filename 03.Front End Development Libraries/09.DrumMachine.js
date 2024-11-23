// The following code cannot be used in CodePen
// import React, { useRef } from 'react';
const { useState, useRef, useEffect } = React;

function SoundButton() {
  
  const audioRefs = {
    Q: useRef(null),
    W: useRef(null),
    E: useRef(null),
    A: useRef(null),
    S: useRef(null),
    D: useRef(null),
    Z: useRef(null),
    X: useRef(null),
    C: useRef(null),
  };
  
  const [display, setDisplay] = useState("");
  
  // press button
  const handlePlayAudio = (key) => {
    const audioRef = audioRefs[key.toUpperCase()];
    if (audioRef) {
      audioRef.current.play();
      setDisplay(() => key);
    }
  };

  // press key
  const handleKeyDown = (event) => {
    const pressedKey = event.key.toUpperCase();
    handlePlayAudio(pressedKey);
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    
    // Empty dependency array ensures cleanup on unmount
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);
  
  return (
    <div id="drum-machine">
      <div id="btn-group">
        <button id="Q" className="drum-pad" onClick={() => handlePlayAudio('Q')}>Q
          <audio className="clip" id="Q" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3" ref={audioRefs.Q}></audio>
      </button>
        
        <button id="W" className="drum-pad" onClick={() => handlePlayAudio('W')}>W
          <audio className="clip" id="W" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3" ref={audioRefs.W}></audio>
        </button>
        <button id="E" className="drum-pad" onClick={() => handlePlayAudio('E')}>E
          <audio className="clip" id="E" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3" ref={audioRefs.E}></audio>
        </button>
        <button id="A" className="drum-pad" onClick={() => handlePlayAudio('A')}>A
          <audio class="clip" id="A" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3" ref={audioRefs.A}></audio>
        </button>
        <button id="S" className="drum-pad" onClick={() => handlePlayAudio('S')}>S
          <audio class="clip" id="S" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3" ref={audioRefs.S}></audio>
        </button>
        <button id="D" className="drum-pad" onClick={() => handlePlayAudio('D')}>D
          <audio className="clip" id="D" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3" ref={audioRefs.D}></audio>
        </button>
        <button id="Z" className="drum-pad" onClick={() => handlePlayAudio('Z')}>Z
          <audio className="clip" id="Z" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3" ref={audioRefs.Z}></audio>
        </button>
        <button id="X" className="drum-pad" onClick={() => handlePlayAudio('X')}>X
          <audio className="clip" id="X" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3" ref={audioRefs.X}></audio>
        </button>
        <button id="C" className="drum-pad" onClick={() => handlePlayAudio('C')}>C
          <audio className="clip" id="C" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3" ref={audioRefs.C}></audio>
        </button>
      </div>
      <p id="display">DrumPad:{display}</p>
    </div>
  );
}

ReactDOM.render(<SoundButton />, document.querySelector('#app'));
