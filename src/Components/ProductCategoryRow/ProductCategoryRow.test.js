import React from 'react';
import renderer from 'react-test-renderer';
import ProductCategoryRow from '.';
import {shallow} from 'enzyme';


describe('ProductCategoryRow',()=>{
    it('should render a row with value as Product Category',()=>{
        const tree=renderer.create(<ProductCategoryRow category="Sporting Goods" />).toJSON();
        expect(tree).toMatchSnapshot();
    })
});