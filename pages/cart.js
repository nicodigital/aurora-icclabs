import React, { Component } from 'react';
import NavbarTwo from '../components/Layouts/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/Layouts/Footer';

class Cart extends Component {
    render() {
        return (
            <>
                <NavbarTwo />
                
                <PageBanner 
                    pageTitle="Cart" 
                    homePageUrl="/" 
                    homePageText="Home" 
                    activePageText="Cart" 
                    bgImgClass="item-bg1" 
                />  

                <div className="cart-area ptb-110">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12">
                                <form>
                                    <div className="cart-table table-responsive">
                                        <table className="table table-bordered">
                                            <thead>
                                                <tr>
                                                    <th scope="col">Product</th>
                                                    <th scope="col">Name</th>
                                                    <th scope="col">Unit Price</th>
                                                    <th scope="col">Quantity</th>
                                                    <th scope="col">Total</th>
                                                </tr>
                                            </thead>

                                            <tbody>
                                                <tr>
                                                    <td className="product-thumbnail">
                                                        <a href="#">
                                                            <img src="/images/shop/product1.jpg" alt="item" />
                                                        </a>
                                                    </td>

                                                    <td className="product-name">
                                                        <a href="#">White Book</a>
                                                    </td>

                                                    <td className="product-price">
                                                        <span className="unit-amount">$14.00</span>
                                                    </td>

                                                    <td className="product-quantity">
                                                        <div className="input-counter">
                                                            <input type="number" defaultValue="1" />
                                                        </div>
                                                    </td>

                                                    <td className="product-subtotal">
                                                        <span className="subtotal-amount">$14.00</span>
                                                        <a href="#" className="remove"><i className="far fa-trash-alt"></i></a>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td className="product-thumbnail">
                                                        <a href="#">
                                                            <img src="/images/shop/product2.jpg" alt="item" />
                                                        </a>
                                                    </td>

                                                    <td className="product-name">
                                                        <a href="#">Red Side Book</a>
                                                    </td>

                                                    <td className="product-price">
                                                        <span className="unit-amount">$20.00</span>
                                                    </td>

                                                    <td className="product-quantity">
                                                        <div className="input-counter">
                                                            <input type="number" defaultValue="1" />
                                                        </div>
                                                    </td>

                                                    <td className="product-subtotal">
                                                        <span className="subtotal-amount">$20.00</span>

                                                        <a href="#" className="remove"><i className="far fa-trash-alt"></i></a>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td className="product-thumbnail">
                                                        <a href="#">
                                                            <img src="/images/shop/product3.jpg" alt="item" />
                                                        </a>
                                                    </td>

                                                    <td className="product-name">
                                                        <a href="#">Book With Pen</a>
                                                    </td>

                                                    <td className="product-price">
                                                        <span className="unit-amount">$25.00</span>
                                                    </td>

                                                    <td className="product-quantity">
                                                        <div className="input-counter">
                                                            <input type="number" defaultValue="1" />
                                                        </div>
                                                    </td>

                                                    <td className="product-subtotal">
                                                        <span className="subtotal-amount">$25.00</span>

                                                        <a href="#" className="remove"><i className="far fa-trash-alt"></i></a>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td className="product-thumbnail">
                                                        <a href="#">
                                                            <img src="/images/shop/product4.jpg" alt="item" />
                                                        </a>
                                                    </td>

                                                    <td className="product-name">
                                                        <a href="#">Drop Side Book</a>
                                                    </td>

                                                    <td className="product-price">
                                                        <span className="unit-amount">$10.00</span>
                                                    </td>

                                                    <td className="product-quantity">
                                                        <div className="input-counter">
                                                            <input type="number" defaultValue="1" />
                                                        </div>
                                                    </td>

                                                    <td className="product-subtotal">
                                                        <span className="subtotal-amount">$10.00</span>

                                                        <a href="#" className="remove"><i className="far fa-trash-alt"></i></a>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <div className="cart-buttons">
                                        <div className="row align-items-center">
                                            <div className="col-lg-7 col-sm-7 col-md-7">
                                                <div className="shopping-coupon-code">
                                                    <input type="text" className="form-control" placeholder="Coupon code" name="coupon-code" id="coupon-code" />
                                                    <button type="submit">Apply Coupon</button>
                                                </div>
                                            </div>

                                            <div className="col-lg-5 col-sm-5 col-md-5 text-right">
                                                <a href="#" className="btn btn-primary">Update Cart</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="cart-totals">
                                        <h3>Cart Totals</h3>

                                        <ul>
                                            <li>Subtotal <span>$150.00</span></li>
                                            <li>Shipping <span>$30.00</span></li>
                                            <li>Total <span><b>$180.00</b></span></li>
                                        </ul>
                                        <a href="#" className="btn btn-primary">Proceed to Checkout</a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                
                <Footer />
            </>
        );
    }
}

export default Cart;