import React from "react";
import { shallow } from "enzyme";
import { AddCategory } from "../../components/AddCategory";

/* to run this test:

1. run the 'npm install' command from the gif-expert-app folder 
2. run the 'npm install --save-dev enzyme' command (if you havent done so)
3. run the 'npm install --save-dev enzyme-to-json' command (if you havent done so)
4. run the 'npm install --save-dev @wojtekmaj/enzyme-adapter-react-17 --legacy-peer-deps' command (if you are using React 17 as i do)
5. run the 'npm install --save-dev @testing-library/react-hooks' command (if you havent done so)
6. make sure the setupTests.js file include the enzyme, enzyme-to-json and the react adapter libraries
7. run the command 'npm run test'
8. to have a clearer view of this single js test file, press p. then type the file name 'AddCategory.test.js'

*/

describe('Tests on the AddCategory component', () => {

    // we are setting a new empty function for simulation purposes in this
    // tests, it is implemented with jest as it will allow us to evaluate 
    // different events occurring to it.
    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories}/>);

    // the clearAllMocks() method will reset any value or returns implemented on different
    // previous tests which remain from previous tests by default
    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories}/>);
    });

    test('should show correctly', () => {   
        expect(wrapper).toMatchSnapshot();
    })
    
    test('should change text box', () => {
        const input = wrapper.find('input');
        const value = 'Pokemon';

        // added a simulate method from the React library to test the changes done to the input
        // box when the 'onChange' function is called, several methods can be simulated for any
        // events that React understands. As a secondary argument, i included a fake value which
        //should have allowed the event to occur with no errors, it is destructured so the event
        // argument (e) had its target retrieved, and the destructured object would also retrieve 
        // the value entered on it.
        input.simulate('change', {target: {value}});
        // finally we retrieve a hidden'p' element from the addCategory component to be matched with 
        // the fake value sent on the simulation for testing purposes
        expect(wrapper.find('p').text().trim()).toBe(value);
    })
    
    test('should not post information on submit', () => {
        
        // tested the form element in the AddCategory component for it to not submit
        // any information if posted with no arguments at all.
        wrapper.find('form').simulate('submit', {preventDefault(){}});
        expect(setCategories).not.toHaveBeenCalled();
    })
    
    test('should call setCategories and clean the text box', () => {

        // simulates the input change
        const value = 'Gantz';
        wrapper.find('input').simulate('change',{target: {value}} );
        // simulates the submit 
        wrapper.find('form').simulate('submit', {preventDefault(){}});
        // confirms setCategories was called
        expect(setCategories).toHaveBeenCalled();
        // uses the input property of 'value' and confirms it was cleaned
        expect(wrapper.find('input').prop('value')).toBe('');
    })
})