import React from 'react';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

export default class ProductTable extends React.Component {
    render() {
        const filterText = this.props.filterText.toLowerCase();
        const inStockOnly = this.props.inStockOnly;

        const rows = [];
        let lastCategory = null;

        this.props.products.forEach((product) => {
            // Filter step
            if((inStockOnly && product.stocked === false) || 
                (product.name.toLowerCase().indexOf(filterText) === -1))
                return;
            // Category Row
            if(product.category !== lastCategory) {
                rows.push(
                    <ProductCategoryRow
                        category={product.category}
                        key={product.category} />
                );
            }
            // Product Row
            rows.push(
                <ProductRow
                    product={product}
                    key={product.name}
                />
            );
            lastCategory = product.category;
        });
        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        );
    }
}