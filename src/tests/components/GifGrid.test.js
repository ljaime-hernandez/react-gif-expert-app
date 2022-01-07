import React from "react";
import { shallow } from "enzyme";
import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";

/* to run this test:

1. run the 'npm install' command from the gif-expert-app folder 
2. run the 'npm install --save-dev enzyme' command (if you havent done so)
3. run the 'npm install --save-dev enzyme-to-json' command (if you havent done so)
4. run the 'npm install --save-dev @wojtekmaj/enzyme-adapter-react-17 --legacy-peer-deps' command (if you are using React 17 as i do)
5. run the 'npm install --save-dev @testing-library/react-hooks' command (if you havent done so)
6. make sure the setupTests.js file include the enzyme, enzyme-to-json and the react adapter libraries
7. run the command 'npm run test'
8. to have a clearer view of this single js test file, press p. then type the file name 'GifGrid.test.js'

*/

// we use the jest library to create a mock return from the function used as
// hook imported from useFetchGifs.js
jest.mock("../../hooks/useFetchGifs");

describe('Tests on <GifGrid />', () =>{

    const category = 'Gantz';

    test('should display component correctly', () => {
        
        // we use the mockReturnValue to return the object containing an array
        // and a boolean used for the GifGrid component to work as the hook 
        // used on it requires the useFetchGifs to be called at least once
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true,
        });
        const wrapper = shallow(<GifGrid category={category}/>);   
        expect(wrapper).toMatchSnapshot();
    });

    test('should show items when loading images from useFetchGifs', () => {
    
        // object created as mock to be added in the following function mock
        const gifs = [{
            id: 'Gantz',
            url: 'https://gantz.org',
            title: 'Gantz Title',
        }]
        // simulation of a return of the useFetchGifs hook return value to be
        // used on the snapshot
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false,
        });
        // the p element should not be displayed as its only shown when theres no
        // response from the useFetchGifs hook 
        const wrapper = shallow(<GifGrid category={category}/>)
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);
        // the GifGridItem component should have been rendered the number of times 
        // the useFetchGifs returned objects, in this case the number of objects is
        // just one
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
    });
    
})