import React, { useState, useEffect } from 'react';
import {scales} from './constants'

function ScaleButtons() {

  const [scale, setScale] = useState(null)

  
  function playScale(scale_array){
    setScale(scale_array)
  }

  return (
    <div class="btn-group" role="group" aria-label="Basic example">
    <button class="btn btn-secondary" onClick={() => playScale(scales.cMajor)}>C Major</button>
    <button class="btn btn-secondary" onClick={() => playScale(scales.dMajor)}>D Major</button>
    <button class="btn btn-secondary" onClick={() => playScale(scales.eMajor)}>E Major</button>
    <button class="btn btn-secondary" onClick={() => playScale(scales.fMajor)}>F Major</button>
    <button class="btn btn-secondary" onClick={() => playScale(scales.gMajor)}>G Major</button>
    <button class="btn btn-secondary" onClick={() => playScale(scales.aMajor)}>A Major</button>
    <button class="btn btn-secondary" onClick={() => playScale(scales.bMajor)}>B Major</button>
    </div>
  );
}

export default ScaleButtons;