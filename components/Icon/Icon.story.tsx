import React from 'react';
import { storiesOf } from '@storybook/react';
import { Icon } from './Icon.component';
import HappyFace from '@static/happyface.svg';
import CupCake from '@static/cupcake.svg';
import BlueLogo from '@static/logoblue.svg';
import PinkLogo from '@static/logopink.svg';

storiesOf('Icon/HappyFace', module).add('Icon', () => (
    <Icon>
        <HappyFace />
    </Icon>
));

storiesOf('Icon/CupCake', module).add('Icon', () => (
    <Icon>
        <CupCake></CupCake>
    </Icon>
));

storiesOf('Icon/BlueLogo', module).add('Icon', () => (
    <Icon>
        <BlueLogo></BlueLogo>
    </Icon>
));

storiesOf('Icon/PinkLogo', module).add('Icon', () => (
    <Icon>
        <PinkLogo></PinkLogo>
    </Icon>
));
