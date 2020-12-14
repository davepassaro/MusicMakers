import React, { useState, useEffect, useContext } from 'react';
import SamplerContext from './SamplerContext'
import * as Tone from 'tone';

function Key(props) {
  const keyColor = props.type === 'key white' ? 'white' : 'black';
  const playedColor = keyColor === 'black' ? '#333' : '#CCC';
  const audio = useContext(SamplerContext);

  const [played, setPlayed] = useState(false);
  const [color, setColor] = useState(keyColor);

  function changeColor() {
    if (played) {
      setColor(playedColor);
    } else {
      setColor(keyColor);
    }
  }

  function changePlay() {
    setPlayed((prevPlay) => !prevPlay);
    changeColor();
  }

  function playSound() {
      changePlay();
      audio.triggerAttackRelease(props.dataNote + props.octave, '8n');
      setTimeout(changePlay, 250); // Probably not the best way to do this

}

function playScaleKey(notes) {
  const now = Tone.now()
  notes.forEach(note => {
    setTimeout(changePlay, note.delay * 1000);
    audio.triggerAttackRelease(props.dataNote  + props.octave, "8n", now + note.delay)
    setTimeout(changePlay, 250 + note.delay * 1000);
  }) 
}

  useEffect(changeColor, [played]);

  const handleKeyDown = (event) => {
    if (event.key == props.keyChar.toLowerCase()) playSound();
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  },[props.octave]);

  useEffect(() => {
     if(props.play) playScaleKey(props.play)
  }, [props.play]) 

  return (
    <div
      style={{ backgroundColor: color}}
      dataNote={props.dataNote}
      className={props.type}
      onClick={playSound}
    > 
    <p>{props.keyChar}</p>
    </div>
  );
}

export default Key;
