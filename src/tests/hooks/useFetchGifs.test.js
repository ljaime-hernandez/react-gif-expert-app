import { useFetchGifs } from "../../hooks/useFetchGifs";
import { renderHook } from "@testing-library/react-hooks";

/* to run this test:

1. run the 'npm install' command from the gif-expert-app folder 
2. run the 'npm install --save-dev enzyme' command (if you havent done so)
3. run the 'npm install --save-dev enzyme-to-json' command (if you havent done so)
4. run the 'npm install --save-dev @wojtekmaj/enzyme-adapter-react-17 --legacy-peer-deps' command (if you are using React 17 as i do)
5. run the 'npm install --save-dev @testing-library/react-hooks' command (if you havent done so)
6. make sure the setupTests.js file include the enzyme, enzyme-to-json and the react adapter libraries
7. run the command 'npm run test'
8. to have a clearer view of this single js test file, press p. then type the file name 'useFetchGifs.test.js'

*/

describe('tests on useFetchGifs hook', () =>{

    test('should return to initial state', async() => {
        // included the react-hooks library on this file for the renderHook method
        // to simulate a hook with any argument as shown below. When the value returned
        // on the variable is displayed in the console, we can see it contains several elements
        // but as for now we will destructure the result value for this test purposes
        const {result, waitForNextUpdate} = renderHook(() => useFetchGifs("Hellsing"));
        const {data, loading} = result.current;
        // we add the waitForNextUpdate method for it to delay the retrieval of the data from the
        // getGifs helper, if reviewed, we can confirm the timeout of the getGifs function is of 1000ms
        // but the waitForNextUpdate by default also wait for 1000ms, so as shown below we change its timeout to last
        // longer, we can also modify the getGifs timeout to be lower than 1000ms in case we dont want to modify this
        // methods timeout
        await waitForNextUpdate({timeout: 2500});

        // test to compare both the default data and loading portions of the useFetchGifs hook on
        // this component
        expect(data).toEqual([]);
        expect(loading).toBe(true);  
    });
    
    test('should return an img array and the loading in a false state', async() => {
        
        const {result, waitForNextUpdate} = renderHook(() => useFetchGifs("Hellsing"));
        // we add the waitForNextUpdate method for it to delay the retrieval of the data from the
        // getGifs helper, if reviewed, we can confirm the timeout of the getGifs function is of 1000ms
        // but the waitForNextUpdate by default also wait for 1000ms, so as shown below we change its timeout to last
        // longer, we can also modify the getGifs timeout to be lower than 1000ms in case we dont want to modify this
        // methods timeout
        await waitForNextUpdate({timeout: 2500});
        const {data, loading} = result.current;

        // we moved the await from the const variable values because the data will be received after certain period of time.
        // in the previous test, we were testing the component without any data retrieval from the getGifs helper, in this case
        // we are evaluating the results after the getGifs request, which is done after 1000ms, the problem encountered is 
        // different from the previous text but the result should include an array of imgs in this case.
        expect(data.length).toBe(10);
        expect(loading).toBe(false); 
    })
    
})