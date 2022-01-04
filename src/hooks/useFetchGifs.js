import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

// custom hook created for it to load our API request with a custom loading state
// the data will be an empty array with a loading state of 'true', when the setState 
// function will be used along with a useEffect which will be loaded every time a new 
// parameter is placed in the search bar, the component will then be loaded again with 
// new categories, which will be rendered again and the loading state will be false,
// the setState is contained on a timeout function which will update itself after 3 seconds

export const useFetchGifs = (category) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        
        getGifs(category)
            .then(imgs => {
                setTimeout(() => {
                    setState({
                        data: imgs,
                        loading: false
                    })
                }, 1000)
            })
    }, [category])

    return state;
}
