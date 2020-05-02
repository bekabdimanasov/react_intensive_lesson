import React, {useState} from 'react';
import AppMinMax from './hm/5-norm.js';

export default class extends React.Component {
    state = {
        products: [
            {
                id: 100,
                title: 'Iphone 200',
                price: 12000,
                rest: 10,
                current: 1 /*cnt*/
            },
            {
                id: 101,
                title: 'Samsung AAZ8',
                price: 22000,
                rest: 5,
                current: 1 /*cnt*/
            }
        ]
    }

    // Step3
    changeCnt = (i, cnt) => {
        // по смысле (mutable) this.state.products[i].current = cnt;

        let newProducts = [...this.state.products] // но у нас state -  immutable, поэтому это
        let newProduct = {...newProducts[i]};
        newProduct.current = cnt;
        newProducts[i] = newProduct;
        this.setState({products: newProducts})
    }

    render() {
        let productsRows = this.state.products.map((product, i) => {
            return (
                <tr key={product.id}>
                    <td>{product.title}</td>
                    <td>{product.price}</td>
                    <td>
                        <AppMinMax
                                min={1} // Step1
                                max={product.rest} // Step1
                                cnt={product.current} // Step1
                                onChange={(cnt) => this.changeCnt(i, cnt)} // Step3
                        />
                    </td>
                    <td>{product.price * product.current}</td>
                </tr>
            )
        })
        return (
            <div>
                <h2>Card</h2>
                <table>
                    <tbody>
                    <tr>
                        <td>Title</td>
                        <td>Price</td>
                        <td>Count</td>
                        <td>Total</td>
                    </tr>
                    {productsRows}
                    </tbody>
                </table>
            </div>
        );
    }
}