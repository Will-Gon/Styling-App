import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = (props) => {
    const [enteredValue, setEnteredValue] = useState('');
    const [isValid, setIsValid] = useState(true)

    const goalInputChangeHandler = (e) => {
        if (e.target.value.trim().length > 0) {
            setIsValid(true);
        }
        setEnteredValue(e.target.value);
    };

    const formSubmitHandler = (e) => {
        e.preventDefault();
        if (enteredValue.trim().length === 0) {
            setIsValid(false);
            return;
        }
        props.onAddGoal(enteredValue);
    };
    return (
        <form onSubmit={formSubmitHandler}>
            <div className="form-control">
                <label style={{ color: !isValid ? 'red' : 'black' }}>Course Goal</label>
                <input style={{ borderColor: !isValid ? 'red' : '#ccc', background: !isValid ? 'salmon' : 'transparent'}} type="text" onChange={goalInputChangeHandler}/>
            </div>
            <Button type="submit">Add Goal</Button>
        </form>
    );
};

export default CourseInput;