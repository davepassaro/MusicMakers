import React from 'react';
import * as Tone from 'tone';
import {sampler} from './constants'

export default function CustomScale(props) {
    const {notes} = props
    let note_str = ""

    const sort_by_key = (array, key) => {
        return array.sort(function(a, b){
            var x = a[key]; 
            var y = b[key];
            return ((x < y) ? -1 : ((x > y) ? 1 : 0));
        });
    }

    const playScale = (notes) => {
        const now = Tone.now()
        notes.forEach((note_obj, index) => {
            sampler.triggerAttackRelease(note_obj.note  + note_obj.octave, "8n", now + (index / 2))
        }) 
    }
    
    //Sort notes array based on priority(which notes to play first)
    sort_by_key(notes, 'priority')
    notes.forEach((note, index) => {
        note_str += note.note
        if(index < notes.length - 1) note_str += ", "
    })

    return (
        <div className="list-group">
            <div className="list-group-item d-flex align-items-center">
                <div className="flex-fill pl-3 pr-3">
                    <div className="text-dark font-weight-600">{props.name}<button className="btn btn-secondary btn-sm custom-play" onClick={() => playScale(notes)}>Play</button></div>
                    <div className="text-muted fs-13px">{props.created}</div>
                </div>
                <div className="text-muted fs-13px">{note_str}</div>
            </div>
        </div>
    );
}