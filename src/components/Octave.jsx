import React, { useState, useEffect } from 'react';
import Key from './Key';
import {octaveSetup} from './constants'

//Creates Key Components
//scaleChange is bool that determines whether the scales changed or not. If not,
//Key play prop will be null so that scale does not get played again on octave change
function generateKeyComp(props, scaleChange){
    return octaveSetup.map((key, index) => {
        if(props.scales){
            const notes_first_octave = props.scales.filter(note_obj => note_obj.note == key.note && note_obj.octaveChange == 0)
            const notes_second_octave = props.scales.filter(note_obj => note_obj.note == key.note && note_obj.octaveChange == 1)

            //If the scale does not include this key, dont send play prop
            if(!scaleChange || (notes_first_octave.length == 0 && notes_second_octave.length == 0)) {
                return (
                    <Key
                        keyChar={props.keyInput[index]}
                        octave={props.octave}
                        play={null}
                        dataNote={key.note}
                        type={key.type}
                    />
                )
            }
            else {
                if(props.octaveSet == '1'){
                    return (
                        <Key
                            keyChar={props.keyInput[index]}
                            octave={props.octave}
                            play={notes_first_octave}
                            dataNote={key.note}
                            type={key.type}
                        />
                    )    
                }
                else {
                    return (
                        <Key
                            octaveSet={props.octaveSet}
                            keyChar={props.keyInput[index]}
                            octave={props.octave}
                            play={notes_second_octave}
                            dataNote={key.note}
                            type={key.type}
                        />
                    )                        
                }
            }
        }
        
        else {
            return (
                <Key
                    keyChar={props.keyInput[index]}
                    octave={props.octave}
                    play={null}
                    dataNote={key.note}
                    type={key.type}
                />
            )   
        }   
    })
}
function Octave(props) {
    const [key_components, setKeys] = useState(generateKeyComp(props))

    useEffect(() => { setKeys(generateKeyComp(props, true))}, [props.scales])
    useEffect(() => { setKeys(generateKeyComp(props, false))}, [props.octave])


    return (
        <div>
            <div className="octave-identifier d-block p-2 bg-primary text-white">Octave {props.octave}</div>
            <div className="octave">
                {key_components}
            </div>
        </div>
    );
}

export default Octave;