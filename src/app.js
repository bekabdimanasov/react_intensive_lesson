import React, {useState} from 'react';
import AppMinMax from './inputs/minmax.js';

export default class extends React.Component {
    state = {
        products: getProducts(),
        formDone: false
    }

    // Step3
    changeCnt = (i, cnt) => {
        // по смысле (mutable) this.state.products[i].current = cnt;

        let products = [...this.state.products] // но у нас state -  immutable, поэтому это
        products[i] = {...products[i], current: cnt};
        this.setState({products});
    }

    removeProductInList = (i) => {
        let products = [...this.state.products];
        products.splice(i, 1)
        this.setState({products});
    }

    sendForm = () =>{
        this.setState({formDone: true})
    }

    render() {

        let totalPrice = this.state.products.reduce((t, pr) => {
            return t + (pr.price * pr.current)
        }, 0)

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
                    <td>
                        <button onClick={() => this.removeProductInList(i)}>
                            X
                        </button>
                    </td>
                </tr>
            )
        })

        let page = this.state.formDone ?
                        showCongrats() :
                        showForm(productsRows, totalPrice, this.sendForm)

        return (
            <div>
                {page}
                <hr/>
                <button onClick={() => this.changeCnt(1, 4)}>
                    Unreal Change cnt
                </button>
            </div>
        );
    }
}

function showForm(productsRows, totalPrice, sendForm) {
    return(
        <div>
            <h2>Card</h2>
            <table border={1}>
                <tbody>
                <tr>
                    <td>Title</td>
                    <td>Price</td>
                    <td>Count</td>
                    <td>Total</td>
                    <td>Action</td>
                </tr>
                {productsRows}
                <tr>
                    <td colSpan={3}>Total Price</td>
                    <td>{totalPrice}</td>
                </tr>
                </tbody>
            </table>
            <button onClick={sendForm}>Send</button>
        </div>
    );
}

function showCongrats() {
    return(
        <div>
            <h2>Congratulation Your Order Send</h2>
            <p>111</p>
        </div>
    );
}

function getProducts() {
    return [
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
        },
        {
            id: 102,
            title: 'Nokia 20',
            price: 10000,
            rest: 15,
            current: 1 /*cnt*/
        },
        {
            id: 103,
            title: 'Xiaomi AAZ8',
            price: 2000,
            rest: 7,
            current: 1 /*cnt*/
        },
        {
            id: 104,
            title: 'Huawei 200',
            price: 15000,
            rest: 14,
            current: 1 /*cnt*/
        },
        {
            id: 105,
            title: 'LG s',
            price: 20000,
            rest: 12,
            current: 1 /*cnt*/
        }
    ]
}