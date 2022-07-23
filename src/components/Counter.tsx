import React from 'react';
import './../App.css';

type CounterType = {
    startNumber: number
    maxNumber: number
    counter: number
    addButton: () => void
    resetButton: () => void
    setButton: () => void
    viability: boolean
}

function Counter(props: CounterType) {

    const addButton = () => {
        props.addButton()
    }
    const resetButton = () => {
        props.resetButton()
    }
    const setButton = () => {
        props.setButton();
    }

    return (
        <div className= {props.viability?"block":"block disable"}>
            <div
                className={ props.counter !== props.maxNumber ? "counter" : " counter last-number"}>
                {props.counter}
            </div>
            <div className="buttons">
                <button disabled={ props.counter >= props.maxNumber}
                        className="button"
                        onClick={addButton}
                >inc
                </button>
                <button disabled={ props.counter === props.startNumber}
                        className="button"
                        onClick={resetButton}
                >reset
                </button>
                <button disabled={false}
                        className="button"
                        onClick={setButton}
                >
                    set
                </button>
            </div>
        </div>
    );
}

export default Counter;
