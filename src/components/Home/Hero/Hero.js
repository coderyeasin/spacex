import React from 'react';

function Hero() {
    return (
        <div>
            <form className="d-flex justify-content-center my-5">
                <input
                    className="form-control me-2 w-25"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                    Search
                </button>
            </form>
        </div>
    );
}

export default Hero;
