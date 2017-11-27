import React from 'react'

const validation = (props) => {
    let validationMessage = 'Text long enough' 

    return (
        <div>
            {props.inputLength}
            {validationMessage}
        </div>
    )
}

export default validation;