import React from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

const PRODUCTS = [
    {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
    {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
    {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
    {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
    {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
    {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];

export default class FilterableProductTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {filterText: '', inStockOnly: false};
    }

    handleFilterTextChange = event => {
        this.setState({filterText: event.target.value});
    }
    handleInStockOnlyChange = event => {
        this.setState({inStockOnly: event.target.checked});
    }

    render() {
        return (
            <div>
                <SearchBar
                    onFilterTextChange={this.handleFilterTextChange}
                    onInStockOnlyChange={this.handleInStockOnlyChange}
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly} />
                <ProductTable
                    products={PRODUCTS}
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly} />
            </div>
        );
    }
}