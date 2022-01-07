import React from 'react'
// import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';
import PropTypes from 'prop-types';

export const GifGrid = ({category}) => {

    // const [images, setImages] = useState([]);

    const {data:images, loading} = useFetchGifs(category);

    // // function run every time the component is loaded
    // useEffect(() => {
    //     getGifs(category)
    //         .then(imgs => setImages(imgs));
    //         // also .then(setImages);

    // // in determined cases, the argument sent from the parent component might change instead of adding an additional
    // // one, a warning will be sent through the console for us to acknowledge a lack of cohesion on the useEffect, in
    // // this code we just need to add the category argument as a dependency inside the array at the end of the function     
    // }, [category])

    return (
        <>
            <h3>{category}</h3>

            {loading && <p>Loading</p>}
            {/* the operator && will work for us as an evaluation of a true/false statement, it can be used
            instead of a ternary evaluation, the ternary option is placed below as example for a different approach.
            {loading ? <p>Loading</p> : null}
            */}

            {/*we use className instead of class as javascript will give us a warning when rendering the tag, as "class"
            is a reserved word for scripting uses*/}
             <div className="card-grid">
                {
                    
                    images.map( image => (
                            <GifGridItem 
                                key={image.id}
                                {...image} />))
                }
            </div> 
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired,
}