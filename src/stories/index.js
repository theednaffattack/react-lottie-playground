import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import LottieControl from './lottie-control';
import ToggleLike from './toggle-like';
import TransitionLoop from './TransitionLoop';
import Checkbox from './Checkbox';
import SimpleToggle from './SimpleToggle';

storiesOf('Eddie\'s Lottie Animation Playground', module)
	.add('with control', () => <LottieControl />)
	.add('toggle like', () => <ToggleLike />)
	.add('transitions & loops', () => <TransitionLoop />)
	.add('checkbox', () => <Checkbox />)
	.add('toggle', () => <SimpleToggle />);
