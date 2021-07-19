import React, { Component } from 'react';
import Link from '../../utils/ActiveLink';

class Navbar extends Component {

    // Search Form
    state = {
        searchForm: false,
    };
    handleSearchForm = () => {
        this.setState( prevState => {
            return {
                searchForm: !prevState.searchForm
            };
        });
    }

    // Navbar
    _isMounted = false;
    state = {
        display: false,
        collapsed: true
    };
    toggleNavbar = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }
    componentDidMount() {
        let elementId = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
            }
        });
        window.scrollTo(0, 0);
    }
    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        const { collapsed } = this.state;
        const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
        const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

        return (
            <>
               <div id="navbar" className="navbar-area">
                    <div className="main-nav">
                        <div className="container">
                            <nav className="navbar navbar-expand-md navbar-light">
                                <Link href="/">
                                    <a className="navbar-brand">
                                        <img src="/images/white-logo.png" className="main-logo" alt="logo" />
                                        <img src="/images/black-logo.png" className="optional-logo" alt="logo" />
                                    </a>
                                </Link>

                                <button 
                                    onClick={this.toggleNavbar} 
                                    className={classTwo}
                                    type="button" 
                                    data-toggle="collapse" 
                                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                                    aria-expanded="false" 
                                    aria-label="Toggle navigation"
                                >
                                    <span className="icon-bar top-bar"></span>
                                    <span className="icon-bar middle-bar"></span>
                                    <span className="icon-bar bottom-bar"></span>
                                </button>

                                <div className={classOne} id="navbarSupportedContent">
                                    <ul className="navbar-nav">
                                        <li className="nav-item">
                                            <Link href="#" activeClassName="active">
                                                <a className="nav-link" onClick={e => e.preventDefault()}>
                                                    Home <i className="fas fa-chevron-down"></i>
                                                </a>
                                            </Link>

                                            <ul className="dropdown-menu">
                                                <li className="nav-item">
                                                    <Link href="/" activeClassName="active">
                                                        <a className="nav-link">Home Demo - 1</a>
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link href="/index-2" activeClassName="active">
                                                        <a className="nav-link">Home Demo - 2</a>
                                                    </Link>
                                                </li>
                                                
                                                <li className="nav-item">
                                                    <Link href="/index-3" activeClassName="active">
                                                        <a className="nav-link">Home Demo - 3</a>
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link href="/index-4" activeClassName="active">
                                                        <a className="nav-link">Home Demo - 4</a>
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link href="/index-5" activeClassName="active">
                                                        <a className="nav-link">Home Demo - 5</a>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>
 
                                        <li className="nav-item">
                                            <Link href="#">
                                                <a className="nav-link" onClick={e => e.preventDefault()}>
                                                    Pages <i className="fas fa-chevron-down"></i>
                                                </a>
                                            </Link>
                                            
                                            <ul className="dropdown-menu">
                                                <li className="nav-item">
                                                    <Link href="/about" activeClassName="active">
                                                        <a className="nav-link">About Us</a>
                                                    </Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link href="/about-two" activeClassName="active">
                                                        <a className="nav-link">About Us Two</a>
                                                    </Link>
                                                </li>
 
                                                <li className="nav-item">
                                                    <Link href="/team" activeClassName="active">
                                                        <a className="nav-link">Team</a>
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link href="/pricing" activeClassName="active">
                                                        <a className="nav-link">Pricing</a>
                                                    </Link>
                                                </li>
 
                                                <li className="nav-item">
                                                    <Link href="/feedback" activeClassName="active">
                                                        <a className="nav-link">Feedback</a>
                                                    </Link>
                                                </li>
  
                                                <li className="nav-item">
                                                    <Link href="/partner" activeClassName="active">
                                                        <a className="nav-link">Partner</a>
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link href="/faq" activeClassName="active">
                                                        <a className="nav-link">Faq</a>
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link href="/coming-soon" activeClassName="active">
                                                        <a className="nav-link">Coming Soon</a>
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link href="/404" activeClassName="active">
                                                        <a className="nav-link">404 Error</a>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="#" activeClassName="active">
                                                <a className="nav-link">
                                                    Services <i className="fas fa-chevron-down"></i>
                                                </a>
                                            </Link>

                                            <ul className="dropdown-menu">
                                                <li className="nav-item">
                                                    <Link href="/services" activeClassName="active">
                                                        <a className="nav-link">Services Style One</a>
                                                    </Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link href="/services-two" activeClassName="active">
                                                        <a className="nav-link">Services Style Two</a>
                                                    </Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link href="/services-three" activeClassName="active">
                                                        <a className="nav-link">Services Style Three</a>
                                                    </Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link href="/services-four" activeClassName="active">
                                                        <a className="nav-link">Services Style Four</a>
                                                    </Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link href="/service-details" activeClassName="active">
                                                        <a className="nav-link">
                                                            Service Details
                                                        </a>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="#">
                                                <a className="nav-link">
                                                    Projects <i className="fas fa-chevron-down"></i>
                                                </a>
                                            </Link>

                                            <ul className="dropdown-menu">
                                                <li className="nav-item">
                                                    <Link href="/projects" activeClassName="active">
                                                        <a className="nav-link">Projects</a>
                                                    </Link>
                                                </li>
  
                                                <li className="nav-item">
                                                    <Link href="/projects-details" activeClassName="active">
                                                        <a className="nav-link">Projects Details</a>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="#">
                                                <a className="nav-link">
                                                    Shop <i className="fas fa-chevron-down"></i>
                                                </a>
                                            </Link>

                                            <ul className="dropdown-menu">
                                                <li className="nav-item">
                                                    <Link href="/shop" activeClassName="active">
                                                        <a className="nav-link">Shop</a>
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link href="/single-products" activeClassName="active">
                                                        <a className="nav-link">Single Products</a>
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link href="/cart" activeClassName="active">
                                                        <a className="nav-link">Cart</a>
                                                    </Link>
                                                </li>
  
                                                <li className="nav-item">
                                                    <Link href="/checkout" activeClassName="active">
                                                        <a className="nav-link">Checkout</a>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>
  
                                        <li className="nav-item">
                                            <Link href="#">
                                                <a className="nav-link">
                                                    Blog <i className="fas fa-chevron-down"></i>
                                                </a>
                                            </Link>

                                            <ul className="dropdown-menu">
                                                <li className="nav-item">
                                                    <Link href="/blog" activeClassName="active">
                                                        <a className="nav-link">Blog Grid</a>
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link href="/blog2" activeClassName="active">
                                                        <a className="nav-link">Blog Right Sidebar</a>
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link href="/blog-details" activeClassName="active">
                                                        <a className="nav-link">Blog Details</a>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>
  
                                        <li className="nav-item">
                                            <Link href="/contact" activeClassName="active">
                                                <a className="nav-link">Contact</a>
                                            </Link>
                                        </li>
                                    </ul>
                                    
                                    <div className="others-options">
                                        <Link href="/cart">
                                            <a className="cart-btn">
                                                <i className="flaticon-commerce-and-shopping"></i>
                                                <span>1</span>
                                            </a>
                                        </Link>

                                        <div className="option-item">
                                            <i 
                                                onClick={this.handleSearchForm} 
                                                className="search-btn flaticon-search"
                                                style={{
                                                    display: this.state.searchForm ? 'none' : 'block'
                                                }}
                                            ></i>

                                            <i 
                                                onClick={this.handleSearchForm} 
                                                className={`close-btn fas fa-times ${this.state.searchForm ? 'active' : ''}`}
                                            ></i>
                                            
                                            <div 
                                                className="search-overlay search-popup"
                                                style={{
                                                    display: this.state.searchForm ? 'block' : 'none'
                                                }}
                                            >
                                                <div className='search-box'>
                                                    <form className="search-form">
                                                        <input className="search-input" name="search" placeholder="Search" type="text" />
                                                        <button className="search-button" type="submit">
                                                            <i className="fas fa-search"></i>
                                                        </button>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                                
                                        <Link href="/contact">
                                            <a className="btn btn-primary">Schedule a Demo</a>
                                        </Link>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Navbar;
