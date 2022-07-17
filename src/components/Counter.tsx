import React from 'react';
import './../App.css';

type CounterType = {
    startNumber: number
    maxNumber: number
    counter: number
    addButton: () => void
    resetButton: () => void
    error: string | null
    setButton: () => void
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
        <div className="block">
            <div
                className={props.error ? "counter incorrect-message" : (props.counter !== props.maxNumber ? "counter" : " counter last-number")}>
                {props.error ? props.error : props.counter}
            </div>
            <div className="buttons">
                <button disabled={props.error ? true : props.counter >= props.maxNumber}
                        className="button"
                        onClick={addButton}
                >inc
                </button>
                <button disabled={props.error ? true : props.counter === props.startNumber}
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
