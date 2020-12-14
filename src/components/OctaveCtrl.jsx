import React, { useState } from 'react';

function OctaveCtrl(props) {

  return (
    <div className="btn-group mr-2 btn-group-lg" id="octave-wrapper" role="group" aria-label="First group">
        <button type="button" className="btn btn-secondary" id="-1" onClick={props.handleChangeOctave}>&lt;</button>
        <button type="button" className="btn btn-secondary" id="+1" onClick={props.handleChangeOctave}>&gt;</button>
    </div>
  );

}

export default OctaveCtrl;