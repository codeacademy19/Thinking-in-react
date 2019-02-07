import React,{Component} from 'react';
import SearchBar from '../SearchBar';
import ProductTable from '../ProductTable';
class FilterableProductTable extends Component {
    // constructor(props) {
    //   super(props);
    //   this.state = {
    //     filterText: '',
    //     inStockOnly: false
    //   };
      
    //   this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    //   this.handleInStockChange = this.handleInStockChange.bind(this);
    // }
    state = {
            filterText: '',
            inStockOnly: false
    };
    handleFilterTextChange= (filterText) => {
      this.setState({
        filterText: filterText
      });
    }
    
    handleInStockChange=(inStockOnly) =>{
      this.setState({
        inStockOnly: inStockOnly
      })
    }
  
    render() {
      return (
        <div>
          <SearchBar
            filterText={this.state.filterText}
            inStockOnly={this.state.inStockOnly}
            handleFilterTextChange={this.handleFilterTextChange}
            handleInStockChange={this.handleInStockChange}
          />
          {this.state.filterText}
          <ProductTable
            product={this.props.product}
            filterText={this.state.filterText}
            inStockOnly={this.state.inStockOnly}
          />
        </div>
      );
    }
  }

  export default FilterableProductTable;