import React from 'react';
import renderer from 'react-test-renderer';
import FilteredProductTable from '.';
import {mount} from 'enzyme';
describe('ProductRow',()=>{
    const PRODUCTS = [
        {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
        {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
        {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
        {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
        {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
        {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
      ];
    it('should render a tabel of items',()=>{
        const tree=renderer.create(<FilteredProductTable  product={PRODUCTS}/>).toJSON();
        expect(tree).toMatchSnapshot();
    })
    it('should call "handleFilterTextChange" when the search text box is changed',()=>{
       const component= mount(<FilteredProductTable  product={PRODUCTS}/>) ;
       component.find(".TextArea").simulate('change',{target:{value:'ball'}});
       expect(component.instance().state.filterText).toEqual('ball');
       component.unmount();
    })
    it('should call "handleInStockChange" when the check box is changed',()=>{
        const component= mount(<FilteredProductTable  product={PRODUCTS}/>) ;
        component.find(".CheckBox").simulate('change',{target:{checked:true}});
        expect(component.instance().state.inStockOnly).toEqual(true);
        component.unmount();
     })


});