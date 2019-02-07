module.exports=(products,filterText,inStockOnly,lastCategory)=>{
    const rows=[];
    products.forEach((product) => {
        if (product.name.indexOf(filterText) === -1) {
           return;
        }
        if (inStockOnly && !product.stocked) {
          return;
        }
        if (product.category !== lastCategory) {
          rows.push(['category',product.category]);
        }
            rows.push(['product',product]);
            lastCategory = product.category;
        
      });
      return rows;
}
