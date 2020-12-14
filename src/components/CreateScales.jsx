import React from 'react';
import CreateScalesForm from './CreateScalesForm'

export default function CreateScales(props) {

    return (
        <div id="custom-scales-container">
            <h1 className="display-1">Create Your Own Custom Scales!</h1>
            <ul className="list-group">
                <li className="list-group-item">Select which notes you would like to have in your scale.</li>
                <li className="list-group-item">Scales will be played in order starting from the top and ending at bottom.</li>
                <li className="list-group-item">Notes are separated in groups of two octaves. The second octave notes will be played after the first octave notes.</li>
            </ul>
            <br></br>
            <CreateScalesForm />
        </div>
    )
}