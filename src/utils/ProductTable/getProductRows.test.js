const getProductRows=require('./getProductRows');
describe('getProductRows',()=>{
    it('should return rows of products which satisfy the given conditions',()=>{
        const PRODUCTS = [
            {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
            {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
            {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
            {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
            {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
            {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
          ];
          expect(getProductRows(PRODUCTS,'',false).length).toEqual(8); 
          expect(getProductRows(PRODUCTS,'',true).length).toEqual(6);
          expect(getProductRows(PRODUCTS,'ball',true).length).toEqual(3);
    })
})