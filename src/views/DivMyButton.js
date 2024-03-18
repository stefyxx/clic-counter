import React from 'react';
import MyButton from '../components/Button/mybutton';

const DivMyButton = function(props) 
{
    return (
        <div>
            <MyButton myFunction={props.onIncrement} myLabel='+' />
            <MyButton myFunction={props.onDecrement} myLabel='-' />
        </div>)
};

export default DivMyButton;