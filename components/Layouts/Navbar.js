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
                        <div className="container-fluid">
                            <nav className="navbar navbar-expand-md navbar-light">
                                <Link href="/">
                                    <a className="navbar-brand">
                                        <img src="/images/logos/aurora-logo-light.svg" className="main-logo" alt="logo" />
                                        <img src="/images/logos/aurora-logo-dark.svg" className="optional-logo" alt="logo" />
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
                                            <Link href="/aurora" activeClassName="active">
                                                <a className="nav-link" >
                                                    Aurora
                                                </a>
                                            </Link>
                                        </li>
 
                                        <li className="nav-item">
                                            <Link href="./gmplab">
                                                <a className="nav-link" >
                                                   GMP<span>Lab</span> 
                                                </a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="./productos" activeClassName="active">
                                                <a className="nav-link" >
                                                   Productos 
                                                </a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="./cbd">
                                                <a className="nav-link" >
                                                    CBD 
                                                </a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="./area-medica">
                                                <a className="nav-link" >
                                                    Médicos 
                                                </a>
                                            </Link>
                                        </li>
  
                                        <li className="nav-item">
                                            <Link href="./novedades">
                                                <a className="nav-link" >
                                                    Novedades 
                                                </a>
                                            </Link>
                                        </li>
  
                                        <li className="nav-item">
                                            <Link href="/ubicacion" activeClassName="active">
                                                <a className="nav-link">Ubicación</a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="/contacto" activeClassName="active">
                                                <a className="nav-link">Contacto</a>
                                            </Link>
                                        </li>
                                    </ul>
                                    
                                    <div className="others-options">
                                        <Link href="/es">
                                            <a className="cart-btn">
                                                ES
                                            </a>
                                        </Link>
                                        /
                                        <Link href="/en">
                                            <a className="cart-btn">
                                               EN
                                            </a>
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
