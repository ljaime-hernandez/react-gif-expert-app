import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

// added defaultCategories as arguments to the GifExpertApp component for us to have a better approach
// when testing the hook on it, as we are unable to test the categories once the main argument
// has been set on it at the useState, if we want to modify the default arguments we want to start the component
// with, then is best practice to do so as an initial argument in the component and not on the hook
export const GifExpertApp = ({defaultCategories = ['Gantz', 'Cowboy Bebop']}) => {

    // default element on our categories section is "Death Note", which is used to trigger the component into our webpage, as seen below,
    // the setCategories function from our hook is being passed to the AddCategory script, which we will use to add additional elements to
    // our string array, along with that, we are rendering the categories object with a GifGrid component for it to have an specific visual
    // effect described on its script
    // const [categories, setCategories] = useState(['Death Note']);

    // changed the previous string set as default argument for the component to now be the defaultCategories
    // placed as initial arguments on the component
    const [categories, setCategories] = useState(defaultCategories);

    return (
        <div>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr />

            <ol>

                {/* returning a child in a list using methods like map should have an unique key, therefore, in this example i use
                the category itself as identifier, but this method would not work if the list has an element with the same value, so i can
                either use an additional parameter (the index, even its not so recommended) on the map method which would be read as 
                ".map((category, index))" or, for future modifications to that list, i can use a hook instead, which will be called through a
                click event by using the hook handler, then using the existing array of strings along with an ellipsis (...) and then to add
                what i want, in this case another string appended at the end of the array.*/}
                
                { 
                    categories.map(category => (
                    <GifGrid 
                        key={category}
                        category={category}
                    />))
                }
            </ol>
        </div>
    )
}
