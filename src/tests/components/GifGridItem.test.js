import React from "react";
import { shallow } from "enzyme";
import { GifGridItem } from "../../components/GifGridItem"

/*
we are using the shallow method of enzyme for us to test the results expected from a component.
looking back on the setupTests.js file, we can confirm two imports which would help us to understand
the tests appropriately. First, there is an adapter used for enzyme to work on react 17, which is the
actual version used in this code, and as second requirement, we are using an import from a library
called "enzyme to json", which works as a serializer for enzyme, what this does is that it is going to
help us on the creation of the enzyme snapshot used on the component to test the component with various
properties.
*/

describe('Tests on <GifGridItem />', () =>{

    const title = 'Pokemon';
    const url = 'https://pokemon.org';
    // the shallow function here (along with the enzyme to json serializer) will create a snapshot of the
    //component by taking it as a reference along with whatever properties we pass on it to be tested
    const wrapper = shallow(<GifGridItem title={title} url={url}/>);

    test('should display component correctly', () => {
        
        expect(wrapper).toMatchSnapshot();
    })

    test('should have a paragraph on the title', () => {
        
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);
    })
    
    test('should have a picture similar to the url and alt of the properties', () => {
        
        // the find method is used in here to find the img element, which in this case will
        //contain the src and the alt properties of the image. if we use a console.log and use the
        // props() method on it, the console will return an object with the properties contained on it.
        // we can also use the prop() method without the "s" on it, and put an specific property as argument
        // for it to be returned as necessary, 
        // ex: img.prop('src');      ----------------->   https://pokemon.org
        const img = wrapper.find('img');
        // console.log(img.prop('src'));
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
    })

    test('should have class animate__fadeInLeft', () => {
        
        const divClass = wrapper.find('div');
        const divClassText = divClass.prop('className');
        expect(divClassText).toContain('animate__fadeInLeft');
        // also expect(divClassText.includes('animate__fadeInLeft')).toBe(true);
        // also expect(divClassText.includes('animate__fadeInLeft')).not.toBe(false);
    })
})
