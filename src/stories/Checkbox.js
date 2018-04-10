import React from 'react';
import Lottie from '../index';
import * as animationDataA from './check--magenta.json';

export default class Checkbox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isStopped: true,
      isPaused: false,
      speed: 1,
      direction: 1,
      checked: false,
    };
  }

  render() {
    const centerStyle = {
      display: 'block',
      margin: '10px auto',
      textAlign: 'center',
    };
    const { isStopped, isPaused, direction, speed, checked } = this.state;
    const defaultOptions = { animationData: animationDataA, loop: false, autoplay: false };

    const clickHandler = () => {
      const { isStopped, direction, checked } = this.state;
      if (!isStopped) {
        this.setState({ direction: direction * -1 });
      }
      this.setState({ isStopped: false, checked: !checked });
    };

    return (
      <div>
        <Lottie
          options={defaultOptions}
          height={400}
          width={400}
          isStopped={isStopped}
          isPaused={isPaused}
          speed={speed}
          direction={direction}
        />
        <button style={centerStyle} onClick={clickHandler}>
          {checked ? 'checked' : 'unchecked'}
        </button>
      </div>
    );
  }
}
