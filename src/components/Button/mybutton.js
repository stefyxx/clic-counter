import React from 'react';

const MyButton = function(props) {
    return(
        <button onClick={props.myFunction}>{props.myLabel}</button>
    );   
}

export default MyButton;