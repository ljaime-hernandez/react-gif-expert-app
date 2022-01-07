import React from "react";
import { shallow } from "enzyme";
import { GifExpertApp } from "../GifExpertApp";

/* to run this test:

1. run the 'npm install' command from the gif-expert-app folder 
2. run the 'npm install --save-dev enzyme' command (if you havent done so)
3. run the 'npm install --save-dev enzyme-to-json' command (if you havent done so)
4. run the 'npm install --save-dev @wojtekmaj/enzyme-adapter-react-17 --legacy-peer-deps' command (if you are using React 17 as i do)
5. run the 'npm install --save-dev @testing-library/react-hooks' command (if you havent done so)
6. make sure the setupTests.js file include the enzyme, enzyme-to-json and the react adapter libraries
7. run the command 'npm run test'
8. to have a clearer view of this single js test file, press p. then type the file name 'GifExpertApp.test.js'

*/

describe('Tests on <GifExpertApp />', () =>{

    test('should display component correctly', () => {
        
        const wrapper = shallow(<GifExpertApp/>);   
        expect(wrapper).toMatchSnapshot();
    });

    test('should show a category list', () => {
        
        const categories = ['Noir', 'Lain'];
        const wrapper = shallow(<GifExpertApp defaultCategories={categories}/>);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length);
    })
});