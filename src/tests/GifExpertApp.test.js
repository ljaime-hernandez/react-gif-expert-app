import React from "react";
import { shallow } from "enzyme";
import { GifExpertApp } from "../GifExpertApp";

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