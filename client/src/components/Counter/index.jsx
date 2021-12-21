import React, { useState } from 'react';

export const Counter = () => {
    const [state, setState] = useState(0)

    const handleClickUp = () => {
        setState(prev => prev + 1)
    }

    const handleClickDown = () => {
        setState(prev => prev - 1)
    }


    return(
        <>
        <button id = "down" onClick={handleClickDown}>-</button>
        <span>{state}</span>
        <button id = "up" onClick={handleClickUp}>+</button>
        </>

    )

}