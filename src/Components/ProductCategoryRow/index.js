import React, { Component } from 'react';
class ProductCategoryRow extends Component {
    render() {
      //const category = this.props.category;
      return (
        <tr>
          <th colSpan="2">
            {this.props.category}
          </th>
        </tr>
      );
    }
  }
  export default ProductCategoryRow;