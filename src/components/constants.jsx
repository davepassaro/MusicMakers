import * as Tone from 'tone';

const sampler = new Tone.Sampler({
    urls: {
      A0: 'A0.mp3',
      C1: 'C1.mp3',
      'D#1': 'Ds1.mp3',
      'F#1': 'Fs1.mp3',
      A1: 'A1.mp3',
      C2: 'C2.mp3',
      'D#2': 'Ds2.mp3',
      'F#2': 'Fs2.mp3',
      A2: 'A2.mp3',
      C3: 'C3.mp3',
      'D#3': 'Ds3.mp3',
      'F#3': 'Fs3.mp3',
      A3: 'A3.mp3',
      C4: 'C4.mp3',
      'D#4': 'Ds4.mp3',
      'F#4': 'Fs4.mp3',
      A4: 'A4.mp3',
      C5: 'C5.mp3',
      'D#5': 'Ds5.mp3',
      'F#5': 'Fs5.mp3',
      A5: 'A5.mp3',
      C6: 'C6.mp3',
      'D#6': 'Ds6.mp3',
      'F#6': 'Fs6.mp3',
      A6: 'A6.mp3',
      C7: 'C7.mp3',
      'D#7': 'Ds7.mp3',
      'F#7': 'Fs7.mp3',
      A7: 'A7.mp3',
      C8: 'C8.mp3',
    },
    release: 1,
    baseUrl: 'https://tonejs.github.io/audio/salamander/',
  }).toDestination();

const leftOctaveKeys = ['Z', 'S', 'X', 'D', 'C', 'V', 'G', 'B', 'H', 'N', 'J', 'M']
const rightOctaveKeys = ['W', '3', 'E', '4', 'R', 'T', '6', 'Y', '7', 'U', '8', 'I']
const octaveSetup = [
    {
        type: "key white",
        note: "C"
    },
    {
        type: "key black",
        note: "Db"
    },
    {
        type: "key white",
        note: "D"
    },
    {
        type: "key black",
        note: "Eb"
    },
    {
        type: "key white",
        note: "E"
    },
    {
        type: "key white",
        note: "F"
    },
    {
        type: "key black",
        note: "Gb"
    },
    {
        type: "key white",
        note: "G"
    },
    {
        type: "key black",
        note: "Ab"
    },
    {
        type: "key white",
        note: "A"
    },
    {
        type: "key black",
        note: "Bb"
    },
    {
        type: "key white",
        note: "B"
    },
]

const scales = {
    cMajor: [
                {
                    note: 'C',
                    octaveChange: 0,
                    delay: 0.5
                },
                {
                    note: 'D',
                    octaveChange: 0,
                    delay: 1
                },
                {
                    note: 'E',
                    octaveChange: 0,
                    delay: 1.5
                },
                {
                    note: 'F',
                    octaveChange: 0,
                    delay: 2
                },
                {
                    note: 'G',
                    octaveChange: 0,
                    delay: 2.5
                },
                {
                    note: 'A',
                    octaveChange: 0,
                    delay: 3
                },
                {
                    note: 'B',
                    octaveChange: 0,
                    delay: 3.5
                },
                 {
                    note: 'C',
                    octaveChange: 1,
                    delay: 4
                },
                {
                    note: 'C',
                    octaveChange: 1,
                    delay: 4.5
                },  
                {
                    note: 'B',
                    octaveChange: 0,
                    delay: 5
                },
                {
                    note: 'A',
                    octaveChange: 0,
                    delay: 5.5
                },
                {
                    note: 'G',
                    octaveChange: 0,
                    delay: 6
                },
                {
                    note: 'F',
                    octaveChange: 0,
                    delay: 6.5
                },
                {
                    note: 'E',
                    octaveChange: 0,
                    delay: 7
                },
                {
                    note: 'D',
                    octaveChange: 0,
                    delay: 7.5
                },
                {
                    note: 'C',
                    octaveChange: 0,
                    delay: 8
                },
    ],
    dMajor: [
        {
            note: 'D',
            octaveChange: 0,
            delay: 0.5
        },
        {
            note: 'E',
            octaveChange: 0,
            delay: 1
        },
        {
            note: 'Gb',
            octaveChange: 0,
            delay: 1.5
        },
        {
            note: 'G',
            octaveChange: 0,
            delay: 2
        },
        {
            note: 'A',
            octaveChange: 0,
            delay: 2.5
        },
        {
            note: 'B',
            octaveChange: 0,
            delay: 3
        },
        {
            note: 'Db',
            octaveChange: 1,
            delay: 3.5
        },
         {
            note: 'D',
            octaveChange: 1,
            delay: 4
        }, 
        {
            note: 'D',
            octaveChange: 1,
            delay: 4.5
        },
        {
            note: 'Db',
            octaveChange: 1,
            delay: 5
        },
        {
            note: 'B',
            octaveChange: 0,
            delay: 5.5
        },
        {
            note: 'A',
            octaveChange: 0,
            delay: 6
        },
        {
            note: 'G',
            octaveChange: 0,
            delay: 6.5
        },
        {
            note: 'Gb',
            octaveChange: 0,
            delay: 7
        },
        {
            note: 'E',
            octaveChange: 0,
            delay: 7.5
        },
        {
            note: 'D',
            octaveChange: 0,
            delay: 8
        }
    ],
    eMajor: [
        {
            note: 'E',
            octaveChange: 0,
            delay: 0.5
        },
        {
            note: 'Gb',
            octaveChange: 0,
            delay: 1
        },
        {
            note: 'Ab',
            octaveChange: 0,
            delay: 1.5
        },
        {
            note: 'A',
            octaveChange: 0,
            delay: 2
        },
        {
            note: 'B',
            octaveChange: 0,
            delay: 2.5
        },
        {
            note: 'Db',
            octaveChange: 1,
            delay: 3
        },
        {
            note: 'Eb',
            octaveChange: 1,
            delay: 3.5
        },
         {
            note: 'E',
            octaveChange: 1,
            delay: 4
        }, 
        {
            note: 'E',
            octaveChange: 1,
            delay: 4.5
        },
        {
            note: 'Eb',
            octaveChange: 1,
            delay: 5
        },
        {
            note: 'Db',
            octaveChange: 1,
            delay: 5.5
        },
        {
            note: 'B',
            octaveChange: 0,
            delay: 6
        },
        {
            note: 'A',
            octaveChange: 0,
            delay: 6.5
        },
        {
            note: 'Ab',
            octaveChange: 0,
            delay: 7
        },
        {
            note: 'Gb',
            octaveChange: 0,
            delay: 7.5
        },
        {
            note: 'E',
            octaveChange: 0,
            delay: 8
        }
    ],
    fMajor: [
        {
            note: 'F',
            octaveChange: 0,
            delay: 0.5
        },
         {
            note: 'G',
            octaveChange: 0,
            delay: 1
        },
        {
            note: 'A',
            octaveChange: 0,
            delay: 1.5
        },
        {
            note: 'Bb',
            octaveChange: 0,
            delay: 2
        }, 
        {
            note: 'C',
            octaveChange: 1,
            delay: 2.5
        },
        {
            note: 'D',
            octaveChange: 1,
            delay: 3
        },
        {
            note: 'E',
            octaveChange: 1,
            delay: 3.5
        },
         {
            note: 'F',
            octaveChange: 1,
            delay: 4
        }, 
        {
            note: 'F',
            octaveChange: 1,
            delay: 4.5
        },
        {
            note: 'E',
            octaveChange: 1,
            delay: 5
        },
        {
            note: 'D',
            octaveChange: 1,
            delay: 5.5
        },
        {
            note: 'C',
            octaveChange: 1,
            delay: 6
        },
        {
            note: 'Bb',
            octaveChange: 0,
            delay: 6.5
        },
        {
            note: 'A',
            octaveChange: 0,
            delay: 7
        },
        {
            note: 'G',
            octaveChange: 0,
            delay: 7.5
        },
        {
            note: 'F',
            octaveChange: 0,
            delay: 8
        } 
    ],
    gMajor: [
        {
            note: 'G',
            octaveChange: 0,
            delay: 0.5
        },
         {
            note: 'A',
            octaveChange: 0,
            delay: 1
        },
        {
            note: 'B',
            octaveChange: 0,
            delay: 1.5
        },
        {
            note: 'C',
            octaveChange: 1,
            delay: 2
        }, 
        {
            note: 'D',
            octaveChange: 1,
            delay: 2.5
        },
        {
            note: 'E',
            octaveChange: 1,
            delay: 3
        },
        {
            note: 'Gb',
            octaveChange: 1,
            delay: 3.5
        },
         {
            note: 'G',
            octaveChange: 1,
            delay: 4
        }, 
        {
            note: 'G',
            octaveChange: 1,
            delay: 4.5
        },
        {
            note: 'Gb',
            octaveChange: 1,
            delay: 5
        },
        {
            note: 'E',
            octaveChange: 1,
            delay: 5.5
        },
        {
            note: 'D',
            octaveChange: 1,
            delay: 6
        },
        {
            note: 'C',
            octaveChange: 1,
            delay: 6.5
        },
        {
            note: 'B',
            octaveChange: 0,
            delay: 7
        },
        {
            note: 'A',
            octaveChange: 0,
            delay: 7.5
        },
        {
            note: 'G',
            octaveChange: 0,
            delay: 8
        } 
    ],
    aMajor: [
        {
            note: 'A',
            octaveChange: 0,
            delay: 0.5
        },
         {
            note: 'B',
            octaveChange: 0,
            delay: 1
        },
        {
            note: 'Db',
            octaveChange: 1,
            delay: 1.5
        },
        {
            note: 'D',
            octaveChange: 1,
            delay: 2
        }, 
        {
            note: 'E',
            octaveChange: 1,
            delay: 2.5
        },
        {
            note: 'Gb',
            octaveChange: 1,
            delay: 3
        },
        {
            note: 'Ab',
            octaveChange: 1,
            delay: 3.5
        },
         {
            note: 'A',
            octaveChange: 1,
            delay: 4
        }, 
        {
            note: 'A',
            octaveChange: 1,
            delay: 4.5
        },
        {
            note: 'Ab',
            octaveChange: 1,
            delay: 5
        },
        {
            note: 'Gb',
            octaveChange: 1,
            delay: 5.5
        },
        {
            note: 'E',
            octaveChange: 1,
            delay: 6
        },
        {
            note: 'D',
            octaveChange: 1,
            delay: 6.5
        },
        {
            note: 'Db',
            octaveChange: 1,
            delay: 7
        },
        {
            note: 'B',
            octaveChange: 0,
            delay: 7.5
        },
        {
            note: 'A',
            octaveChange: 0,
            delay: 8
        } 
    ],
    bMajor: [
        {
            note: 'B',
            octaveChange: 0,
            delay: 0.5
        },
         {
            note: 'Db',
            octaveChange: 1,
            delay: 1
        },
        {
            note: 'Eb',
            octaveChange: 1,
            delay: 1.5
        },
        {
            note: 'E',
            octaveChange: 1,
            delay: 2
        }, 
        {
            note: 'Gb',
            octaveChange: 1,
            delay: 2.5
        },
        {
            note: 'Ab',
            octaveChange: 1,
            delay: 3
        },
        {
            note: 'Bb',
            octaveChange: 1,
            delay: 3.5
        },
         {
            note: 'B',
            octaveChange: 1,
            delay: 4
        }, 
        {
            note: 'B',
            octaveChange: 1,
            delay: 4.5
        },
        {
            note: 'Bb',
            octaveChange: 1,
            delay: 5
        },
        {
            note: 'Ab',
            octaveChange: 1,
            delay: 5.5
        },
        {
            note: 'Gb',
            octaveChange: 1,
            delay: 6
        },
        {
            note: 'E',
            octaveChange: 1,
            delay: 6.5
        },
        {
            note: 'Eb',
            octaveChange: 1,
            delay: 7
        },
        {
            note: 'Db',
            octaveChange: 1,
            delay: 7.5
        },
        {
            note: 'B',
            octaveChange: 0,
            delay: 8
        } 
    ],
    abMajor: [
        {
            note: 'Ab',
            octaveChange: 0,
            delay: 0.5
        },
         {
            note: 'Bb',
            octaveChange: 0,
            delay: 1
        },
        {
            note: 'C',
            octaveChange: 1,
            delay: 1.5
        },
        {
            note: 'Db',
            octaveChange: 1,
            delay: 2
        }, 
        {
            note: 'Eb',
            octaveChange: 1,
            delay: 2.5
        },
        {
            note: 'F',
            octaveChange: 1,
            delay: 3
        },
        {
            note: 'G',
            octaveChange: 1,
            delay: 3.5
        },
         {
            note: 'Ab',
            octaveChange: 1,
            delay: 4
        }, 
        {
            note: 'Ab',
            octaveChange: 1,
            delay: 4.5
        },
        {
            note: 'G',
            octaveChange: 1,
            delay: 5
        },
        {
            note: 'F',
            octaveChange: 1,
            delay: 5.5
        },
        {
            note: 'Eb',
            octaveChange: 1,
            delay: 6
        },
        {
            note: 'Db',
            octaveChange: 1,
            delay: 6.5
        },
        {
            note: 'C',
            octaveChange: 1,
            delay: 7
        },
        {
            note: 'Bb',
            octaveChange: 0,
            delay: 7.5
        },
        {
            note: 'Ab',
            octaveChange: 0,
            delay: 8
        } 
    ],
    bbMajor: [
        {
            note: 'Bb',
            octaveChange: 0,
            delay: 0.5
        },
         {
            note: 'C',
            octaveChange: 1,
            delay: 1
        },
        {
            note: 'D',
            octaveChange: 1,
            delay: 1.5
        },
        {
            note: 'Eb',
            octaveChange: 1,
            delay: 2
        }, 
        {
            note: 'F',
            octaveChange: 1,
            delay: 2.5
        },
        {
            note: 'G',
            octaveChange: 1,
            delay: 3
        },
        {
            note: 'A',
            octaveChange: 1,
            delay: 3.5
        },
         {
            note: 'Bb',
            octaveChange: 1,
            delay: 4
        }, 
        {
            note: 'Bb',
            octaveChange: 1,
            delay: 4.5
        },
        {
            note: 'A',
            octaveChange: 1,
            delay: 5
        },
        {
            note: 'G',
            octaveChange: 1,
            delay: 5.5
        },
        {
            note: 'F',
            octaveChange: 1,
            delay: 6
        },
        {
            note: 'Eb',
            octaveChange: 1,
            delay: 6.5
        },
        {
            note: 'D',
            octaveChange: 1,
            delay: 7
        },
        {
            note: 'C',
            octaveChange: 1,
            delay: 7.5
        },
        {
            note: 'Bb',
            octaveChange: 0,
            delay: 8
        } 
    ],
    ebMajor: [
        {
            note: 'Eb',
            octaveChange: 0,
            delay: 0.5
        },
         {
            note: 'F',
            octaveChange: 0,
            delay: 1
        },
        {
            note: 'G',
            octaveChange: 0,
            delay: 1.5
        },
        {
            note: 'Ab',
            octaveChange: 0,
            delay: 2
        }, 
        {
            note: 'Bb',
            octaveChange: 0,
            delay: 2.5
        },
        {
            note: 'C',
            octaveChange: 1,
            delay: 3
        },
        {
            note: 'D',
            octaveChange: 1,
            delay: 3.5
        },
         {
            note: 'Eb',
            octaveChange: 1,
            delay: 4
        }, 
        {
            note: 'Eb',
            octaveChange: 1,
            delay: 4.5
        },
        {
            note: 'D',
            octaveChange: 1,
            delay: 5
        },
        {
            note: 'C',
            octaveChange: 1,
            delay: 5.5
        },
        {
            note: 'Bb',
            octaveChange: 0,
            delay: 6
        },
        {
            note: 'Ab',
            octaveChange: 0,
            delay: 6.5
        },
        {
            note: 'G',
            octaveChange: 0,
            delay: 7
        },
        {
            note: 'F',
            octaveChange: 0,
            delay: 7.5
        },
        {
            note: 'Eb',
            octaveChange: 0,
            delay: 8
        } 
    ],
    dbMajor: [
        {
            note: 'Db',
            octaveChange: 0,
            delay: 0.5
        },
         {
            note: 'Eb',
            octaveChange: 0,
            delay: 1
        },
        {
            note: 'F',
            octaveChange: 0,
            delay: 1.5
        },
        {
            note: 'Gb',
            octaveChange: 0,
            delay: 2
        }, 
        {
            note: 'Ab',
            octaveChange: 0,
            delay: 2.5
        },
        {
            note: 'Bb',
            octaveChange: 0,
            delay: 3
        },
        {
            note: 'C',
            octaveChange: 1,
            delay: 3.5
        },
         {
            note: 'Db',
            octaveChange: 1,
            delay: 4
        }, 
        {
            note: 'Db',
            octaveChange: 1,
            delay: 4.5
        },
        {
            note: 'C',
            octaveChange: 1,
            delay: 5
        },
        {
            note: 'Bb',
            octaveChange: 0,
            delay: 5.5
        },
        {
            note: 'Ab',
            octaveChange: 0,
            delay: 6
        },
        {
            note: 'Gb',
            octaveChange: 0,
            delay: 6.5
        },
        {
            note: 'F',
            octaveChange: 0,
            delay: 7
        },
        {
            note: 'Eb',
            octaveChange: 0,
            delay: 7.5
        },
        {
            note: 'Db',
            octaveChange: 0,
            delay: 8
        } 
    ]
}


export {sampler, leftOctaveKeys, rightOctaveKeys, octaveSetup, scales} 