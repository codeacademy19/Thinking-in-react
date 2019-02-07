import React, { Component } from 'react';
import ProductCategoryRow from '../ProductCategoryRow';
import ProductRow from '../ProductRow';
const getProductRows=require('../../utils/ProductTable/getProductRows');
class ProductTable extends Component {
    render() {
      const filterText = this.props.filterText;
      const inStockOnly = this.props.inStockOnly;
  
      
      let lastCategory = null;
      const rowsForTable=[];
      const rows = getProductRows(this.props.product,filterText,inStockOnly,lastCategory);
      //console.log(rows);
      rows.forEach((row)=>{
        //console.log(row);
          if(row[0]==='category'){
            rowsForTable.push(<ProductCategoryRow
            category={row[1]}
            key={row[1]} />)
          }else{
            rowsForTable.push(<ProductRow
                product={row[1]}
                key={row[1].name} />)  
          }
      })
  
      return (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>{rowsForTable}</tbody>
        </table>
      );
    }
  }
  export default ProductTable;