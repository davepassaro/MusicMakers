import React, { Component } from "react";
import PolyrhythmCtrl from "./PolyrhythmCtrl";
import * as Tone from "tone";

class Polyrhythm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rhythmA: 1,
      rhythmB: 1,
    };

    this.handleRhythmAChange = this.handleRhythmAChange.bind(this);
    this.handleRhythmBChange = this.handleRhythmBChange.bind(this);
    this.handleBPMChange = this.handleBPMChange.bind(this);
  }

  handleRhythmAChange(rhythm) {
    this.setState({ rhythmA: rhythm }, () => this.setRhythmLoops());
  }

  handleRhythmBChange(rhythm) {
    this.setState({ rhythmB: rhythm }, () => this.setRhythmLoops());
  }

  handleBPMChange(BPM) {
    this.setState({ BPM: BPM }, () => this.setRhythmLoops());
  }

  setRhythmLoops() {
    const { rhythmA, rhythmB } = this.state;

    const priorLoops = Object.keys(Tone.Transport._scheduledEvents);

    for (let i = 0; i < priorLoops.length; i++) {
      Tone.Transport.clear(priorLoops[i]);
    }

    // create two monophonic synths
    const synthA = new Tone.FMSynth().toDestination();
    const synthB = new Tone.AMSynth().toDestination();

    // loopA plays over 0.1 seconds at the current BPM (second rhythm)
    new Tone.Loop((time) => {
      synthA.triggerAttackRelease("A4", 0.01, time);
    }, 1).start(0);
    // loopB plays over 0.1 seconds (first rhythm)
    new Tone.Loop((time) => {
      synthB.triggerAttackRelease("B4", 0.01, time);
    }, rhythmB / rhythmA).start(0);
  }

  togglePolyrhyhtm() {
    Tone.Transport.toggle();
  }

  componentDidMount() {
    // create two monophonic synths
    const synthA = new Tone.FMSynth().toDestination();
    const synthB = new Tone.AMSynth().toDestination();

    // loopA plays over 0.1 seconds at the current BPM (second rhythm)
    new Tone.Loop((time) => {
      synthA.triggerAttackRelease("A4", 0.01, time);
    }, 1).start(0);
    // loopB plays over 0.1 seconds (first rhythm)
    new Tone.Loop((time) => {
      synthB.triggerAttackRelease("B4", 0.01, time);
    }, 1).start(0);
  }

  render() {
    const { rhythmA, rhythmB } = this.state;

    return (
      <div className="bg-white polyrhythm">
        <PolyrhythmCtrl
          onRhythmChange={this.handleRhythmAChange}
          rhythm={rhythmA}
        />
        <div className="polyrhythm-button" onClick={this.togglePolyrhyhtm}>
          Toggle
        </div>
        <PolyrhythmCtrl
          onRhythmChange={this.handleRhythmBChange}
          rhythm={rhythmB}
        />
      </div>
    );
  }
}

export default Polyrhythm;
