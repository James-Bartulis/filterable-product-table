import React from 'react';

export default class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const filterText = this.props.filterText;
        const inStockOnly = this.props.inStockOnly;
        return (
            <form>
                <input
                    type="text"
                    value={filterText}
                    onChange={this.props.onFilterTextChange}
                    onKeyDown={this.props.onFilterTextChange}
                    placeholder="Search..." />
                <div>
                    <input
                        type="checkbox"
                        id="inStockOnly"
                        value={inStockOnly}
                        onChange={this.props.onInStockOnlyChange} />
                    <label htmlFor="inStockOnly">
                        Only show products in stock
                    </label>
                </div>
            </form>
        );
    }
}