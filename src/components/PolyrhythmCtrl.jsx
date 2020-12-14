import React, { Component } from "react";

class PolyrhythmCtrl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      disableIncrement: false,
      disableDecrement: true,
    };

    this.handleIncrementClick = this.handleIncrementClick.bind(this);
    this.handleDecrementClick = this.handleDecrementClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onRhythmChange(e.target.value);
  }

  handleIncrementClick() {
    const { rhythm } = this.props;

    if (rhythm === 5) {
      this.setState({
        disableIncrement: true,
      });
    } else if (rhythm === 1) {
      this.setState({
        disableDecrement: false,
      });
    }

    this.props.onRhythmChange(rhythm + 1);
  }

  handleDecrementClick() {
    const { rhythm } = this.props;

    if (rhythm === 2) {
      this.setState({
        disableDecrement: true,
      });
    } else if (rhythm === 6) {
      this.setState({
        disableIncrement: false,
      });
    }

    this.props.onRhythmChange(rhythm - 1);
  }

  andleDecrementClick() {}

  render() {
    const { disableIncrement, disableDecrement } = this.state;
    const { rhythm, id } = this.props;

    return (
      <div className="polyrhythm-ctrl">
        <button
          type="button"
          className="polyrhythm-ctrl-btn"
          onClick={this.handleDecrementClick}
          disabled={disableDecrement}
        >
          <svg
            width="100px"
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
        <div className="polyrhythm-ctrl-number">{rhythm}</div>
        <button
          type="button"
          className="polyrhythm-ctrl-btn"
          onClick={this.handleIncrementClick}
          disabled={disableIncrement}
        >
          <svg
            width="100px"
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
    );
  }
}

export default PolyrhythmCtrl;
