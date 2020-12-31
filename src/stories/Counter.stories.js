import Counter from '../components/Counter';
import React from 'react';
import { withKnobs, number } from '@storybook/addon-knobs';

export default{
    title: "counter",
    component: Counter,
    decorators: [withKnobs]
}

export function counterDefault() {
    return(
        <Counter />
    )
}

export function counterWithText() {
    return(
        <Counter text = "Counter"/>
    )
}

export function counterWithClassAndText() {
    return(
        <Counter declass = "App__counter" text = "Counter"/>
    )
}

export function counter() {
    return(
        <Counter text = "Counter" declass = "App__counter" count = {number('count', 10)}/>
    )
}