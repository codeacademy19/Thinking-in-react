import React from 'react';
import renderer from 'react-test-renderer';
import ProductTable from '.';
import {shallow} from 'enzyme';


describe('ProductRow',()=>{
    const PRODUCTS = [
        {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
        {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
        {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
        {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
        {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
        {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
      ];
    it('should render a row with value as Product Category',()=>{
        const tree=renderer.create(<ProductTable product={PRODUCTS}  />).toJSON();
        expect(tree).toMatchSnapshot();
    })
    
});