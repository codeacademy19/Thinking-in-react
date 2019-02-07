import React from 'react';
import renderer from 'react-test-renderer';
import SearchBar from '.';
import {shallow} from 'enzyme';


describe('SearchBar',()=>{
    it('should render a Search box and a check box',()=>{
        const tree=renderer.create(<SearchBar/>).toJSON();
        expect(tree).toMatchSnapshot();
    })
    it('should trigger handleFilterTextChange on changing the textbox',()=>{
        const wrapper=shallow(<SearchBar handleFilterTextChange={jest.fn()}/>);
        wrapper.find('.TextArea').simulate('change',{target:{value:'ball'}});
        expect(wrapper.instance().props.handleFilterTextChange).toHaveBeenCalled();
    })

    it('should trigger handleFilterTextChange on changing the textbox',()=>{
        const wrapper=shallow(<SearchBar handleInStockChange={jest.fn()}/>);
        wrapper.find('.CheckBox').simulate('change',{target:'checked'});
        expect(wrapper.instance().props.handleInStockChange).toHaveBeenCalled();
    })
    
});