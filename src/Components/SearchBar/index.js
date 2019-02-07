import React,{Component} from 'react';
class SearchBar extends Component {
   
    render() {
      return (
        <form>
          <input type="text" className="TextArea" 
            placeholder="Search..."
            value={this.props.filterText}
            onChange={(e)=>{this.props.handleFilterTextChange(e.target.value)}}
          />
          <p>
            <input className="CheckBox"
              type="checkbox"
              checked={this.props.inStockOnly}
              onChange={(e)=>{this.props.handleInStockChange(e.target.checked)}}
            />
            {' '}
            Only show products in stock
          </p>
        </form>
      );
    }
    
  }
  
  export default SearchBar;