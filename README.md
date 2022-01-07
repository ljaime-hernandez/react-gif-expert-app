# React Gif Expert App 

link: https://ljaime-hernandez.github.io/react-gif-expert-app/

I did this webapp to learn the basic use of some components by using React as the main Framework-library. dependencies
are described at the bottom of this file, descriptions and step by step on how to run each unit test are described in 
each test file, additional information on each component and file can be found in the code itself.

### Components:

GifExpertApp: this component receives 2 default values (named as categories) which i will use as arguments for an API
call on GIPHY. it contains the AddCategory component which is a form with a submit event for it to add new categories
into the GifExpertApp, it also contains a GifGrid component with a map method which will iterate and render each category
according to the GifGrid elements and attributes.

AddCategory: form used to control the user submit to add new categories into the GifExpertApp, it has an OnChange method which 
will add the new value into a hook which will be then called for that value to be included in the setCategories function passed
from the GifExpertApp, it has a filter for us to avoid receiving values with less than 2 characters and it will also reset the
value entered on the text box

GifGrid: receives each category individually sent with the map method from the GifExpertApp, each category will then be used
to make an API request to the GIPHY webpage with the use of the useFetchGifs custom hook created for that purpose. after the API
call is done it will receive 10 objects with specific urls and information related to the category used, which will then be 
rendered with the help of the GifGridItem component individually

GifGridItem: receives individual 'images' which has the url of the gifs retrieved from the API call used previously, by previously
adding the 'animate' CDN, i added additional classes to the div rendering each gif for it to include an animation after the gifs are
loaded

### Custom hook:

useFetchGifs: custom hook created for it to load our API request with a custom loading state. The data will be an empty array with 
a loading state of 'true', when the setState function will be used along with a useEffect which will be loaded every time a new 
parameter is placed in the search bar, the component will then be loaded again with new categories, which will be rendered again 
and the loading state will be false, the setState is contained on a timeout function which will update itself after 3 seconds

### Helper:

getGifs: function receiving a category as argument, will make an API call to the GIPHY webpage with specific arguments for it to receive
only 10 objects at a time, the result will be sent to the useFetchGifs hook for rendering

### Unit testing:

Each file used for this webapp has specific tests, with the help of enzyme, enzyme-to-json, react-hooks, and jest. Each component and file
has tests for them to match snapshots, to match expected variables with or without specific arguments on each components behavior, how each
component should behave due to its required propTypes and how each component should be appropriately rendered after the arguments are passed
(or not passed). Please refer to any test file for additional information as the tests are specific for every single one of them and i put
extra effort on the details for it to be as clear as possible and for anyone to use them as reference and learn from them if possible

### dependencies:

animate (CDN)
enzyme
enzyme-to-json
jest
react-hooks
bootstrap
react
