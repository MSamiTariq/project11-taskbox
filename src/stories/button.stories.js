import Button from '../components/button';
import React from 'react';

export default{
    title: "button",
    component: Button
}

export function buttonDefault() {
    return(
        <Button/>
    )
}

export function buttonWithValue() {
    return(
        <Button title = "Create"/>
    )
}

export function buttonWithBorderRadius() {
    return(
        <Button title = "Create" borderRadius = {'10px'} />
    )
}
export function buttonWithSmallSize() {
    return(
        <Button title = "Create" size = "small" />
    )
}
export function buttonWithLargeSize() {
    return(
        <Button title = "Create" size = "large" />
    )
}
export function buttonWithOnClick() {
    return(
        <Button title = "Create" size = "large" onClick = {() => {
            alert("counter updaetd")
        }} />
    )
}