import React from 'react';
import renderer from 'react-test-renderer';
import ProductRow from '.';
import {shallow} from 'enzyme';


describe('ProductRow',()=>{
    const productStocked ={category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'};
    const productNotStocked ={category: 'Sporting Goods', price: '$49.99', stocked: false, name: 'Football'};
        // {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
        // {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
        // {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
        // {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
        // {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'};
    it('should render a row with value as Product Category',()=>{
        const tree=renderer.create(<ProductRow  product={productStocked}/>).toJSON();
        expect(tree).toMatchSnapshot();
    })
    it('should render a row with value as Product Category',()=>{
        const tree=renderer.create(<ProductRow  product={productNotStocked}/>).toJSON();
        expect(tree).toMatchSnapshot();
    })
});