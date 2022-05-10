import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="www.google.comnavbarTogglerDemo03"
                        aria-controls="navbarTogglerDemo03"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <Link to="/home" className="navbar-brand">
                        SpaceX
                    </Link>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a
                                    className="nav-link active"
                                    aria-current="page"
                                    href="www.google.com"
                                >
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " href="www.google.com">
                                    About
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " href="www.google.com">
                                    Mission
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " href="www.google.com">
                                    Rocket
                                </a>
                            </li>
                            <button className="btn btn-outline-success" type="submit">
                                Lunch
                            </button>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;
