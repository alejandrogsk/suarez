import React from 'react'

interface ButtonCvI {
    button: {
        title: string;
        path: string;
    }
}

const ButtonCv = ( { button }:ButtonCvI ) => {
    return (
        <a className="button__hero" href={ button.path }
            target="_blank"
            rel="noopener noreferrer"> 
            { button.title }
        </a>
    )
}

export default ButtonCv;
