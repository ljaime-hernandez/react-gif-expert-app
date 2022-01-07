import React, {useState} from 'react'
import PropTypes from 'prop-types';

// the props 'setCategories' are destructured before being used on the component, done that we can call the 
// setCategories function from the parent component to properly add the input value into the string array declared
// on it
export const AddCategory = ({setCategories}) => {
    
    // the inputValue by default wll be left as an empty string on the useState, if we remove the 
    // quotation marks then the browser will send an error, the error will not be explicit but it will be
    // a reference to the inputValue object stating that it is in an undefined state, when the 
    // quotation marks are placed on the useState then the error will disappear
    const [inputValue, setInputValue] = useState('');

    // this function will retrieve the value placed in the input box, done by calling the event, 
    // then the target value will contain the input value which will be assigned to the inputValue
    // object which we will use to include into the categories from the previous component
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    // we use the handleSubmit function to first prevent the input box from having an unrequired submission
    // with an incorrect input, then we check if the input value is greater than 2 characters, if its true
    // then the prop setCategories from the previous component is called for it to include the string input in
    // the categories object
    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim().length > 2){
            // inputvalue is placed first for it to push the other results to the bottom on the screen and have
            // the new results for quick reading
            setCategories(category => [inputValue, ...category]);
            // sets the text input box to an empty state
            setInputValue('');
        }
        
        console.log('Submit succeed')
    }

    return (
        <form onSubmit={handleSubmit}>
            {/*'p' element added just for testing purposes, more information on the file located in
            tests/components/AddCategory.test.js file*/}
            <p hidden>{inputValue}</p>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    )
}

// the PropTypes will send an error on the browser console if the AddCategory component is used
// without the setCategories sent as an argument, this will add a security layer which will allow
// to only make modifications to a get or post request under our rules
AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}