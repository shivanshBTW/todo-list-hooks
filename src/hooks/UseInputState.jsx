import React from 'react';

function UseInputState(initialValue) {
    const [value,setValue] = React.useState(initialValue);
    const handleChange = e =>{
        setValue(e.target.value);
    };
    const reset = () =>{
        setValue('');
    };
    return [value,handleChange,reset];
}

export default UseInputState;