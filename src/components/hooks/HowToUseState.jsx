import React from "react";
import { useState } from "react";

export const HowToUseState = () => {
    const [value,setValue] = useState(0);

    const handleButtonClick = () => {
        setValue(() => value + 1)
    } 
    console.log('This is Parent Component');
    return (
        <>
            <section className="container">
                <h1>{value}</h1>
                <button onClick={handleButtonClick}>Increment</button>
            </section>
            <ChildComponent/>
        </>
    );
};

export const ChildComponent = () => {
    console.log('This is Child Component');
    return (
        <>
            <h1>Child Component Rerendered</h1>
        </>
    )
}