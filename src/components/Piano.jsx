import React, { useState, useEffect } from "react";
import Octave from "./Octave";
import * as Tone from "tone";
import SamplerContext from "./SamplerContext";
import { sampler, leftOctaveKeys, rightOctaveKeys, scales } from "./constants";

function Piano() {
  const [octave, setOctave] = useState(3);
  const [octaveLimitLow, setOctaveLimitLow] = useState(false);
  const [octaveLimitHigh, setOctaveLimitHigh] = useState(false);
  const [scale, setScale] = useState(null);

  useEffect(() => {
    if (octave - 1 == 1) setOctaveLimitLow(true);
    else if (octave + 1 == 5) setOctaveLimitHigh(true);
    else {
      setOctaveLimitHigh(false);
      setOctaveLimitLow(false);
    }
  }, [octave]);

  function incrementOctave(event) {
    setOctave((prevOctave) => prevOctave + 1);
  }

  function decrementOctave(event) {
    setOctave((prevOctave) => prevOctave - 1);
  }
  
  function playScale(scale_array){
    setScale(scale_array)
    setTimeout(()=> {setScale(null)}, 1000)
  }

  return (
    <SamplerContext.Provider value={sampler}>
      <div class="btn-group" role="group" aria-label="Basic example">
        <button class="piano-scale" onClick={() => playScale(scales.cMajor)}>
          C Major
        </button>
        <button class="piano-scale" onClick={() => playScale(scales.dMajor)}>
          D Major
        </button>
        <button class="piano-scale" onClick={() => playScale(scales.eMajor)}>
          E Major
        </button>
        <button class="piano-scale" onClick={() => playScale(scales.fMajor)}>
          F Major
        </button>
        <button class="piano-scale" onClick={() => playScale(scales.gMajor)}>
          G Major
        </button>
        <button class="piano-scale" onClick={() => playScale(scales.aMajor)}>
          A Major
        </button>
        <button class="piano-scale" onClick={() => playScale(scales.bMajor)}>
          B Major
        </button>
        <button class="piano-scale" onClick={() => playScale(scales.abMajor)}>
          Ab Major
        </button>
        <button class="piano-scale" onClick={() => playScale(scales.bbMajor)}>
          Bb Major
        </button>
        <button class="piano-scale" onClick={() => playScale(scales.ebMajor)}>
          Eb Major
        </button>
        <button class="piano-scale" onClick={() => playScale(scales.dbMajor)}>
          Db Major
        </button>
      </div>
      <div className="piano">
        <button
          disabled={octaveLimitLow}
          type="button"
          className="octave-selector"
          id="increment-octave-btn"
          onClick={decrementOctave}
        >
          <svg
            width="20px"
            height="100px"
            viewBox="0 0 16 16"
            className="bi bi-chevron-right"
            fill="currentColor"
            v
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
            />
          </svg>
        </button>
        <Octave
          octaveSet="1"
          scales={scale}
          keyInput={leftOctaveKeys}
          octave={octave - 1}
        />
        <Octave
          octaveSet="2"
          scales={scale}
          keyInput={rightOctaveKeys}
          octave={octave}
        />
        <button
          disabled={octaveLimitHigh}
          type="button"
          className="octave-selector"
          id="-1"
          onClick={incrementOctave}
        >
          <svg
            width="20px"
            height="100px"
            viewBox="0 0 16 16"
            className="bi bi-chevron-right"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
            />
          </svg>
        </button>
      </div>
    </SamplerContext.Provider>
  );
}

export default Piano;
