import { getGifs } from "../../helpers/getGifs"

/* to run this test:

1. run the 'npm install' command from the gif-expert-app folder 
2. run the 'npm install --save-dev enzyme' command (if you havent done so)
3. run the 'npm install --save-dev enzyme-to-json' command (if you havent done so)
4. run the 'npm install --save-dev @wojtekmaj/enzyme-adapter-react-17 --legacy-peer-deps' command (if you are using React 17 as i do)
5. run the 'npm install --save-dev @testing-library/react-hooks' command (if you havent done so)
6. make sure the setupTests.js file include the enzyme, enzyme-to-json and the react adapter libraries
7. run the command 'npm run test'
8. to have a clearer view of this single js test file, press p. then type the file name 'getGifs.test.js'

*/

describe('Tests with getGifs fetch', () => {

    test('should bring 10 elements', async() => {
        
        const gifs = await getGifs('Digimon');
        expect(gifs.length).toBe(10);
    })
    
    test('should bring 0 elements', async() => {
        
        const gifs = await getGifs('');
        expect(gifs.length).toBe(0);
    })
})