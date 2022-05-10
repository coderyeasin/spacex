import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSpacex, upcoming } from '../../../redux/slices/spacexSlice';
import Rockets from './Rockets';

function Mission() {
    // const [display, setDisplay] = useState([]);
    const [loading, setIsLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [pageCount] = useState(9);
    const dispatch = useDispatch();

    // data load
    useEffect(() => {
        dispatch(fetchSpacex());
        setIsLoading(false);
    }, [dispatch, page]);
    let mission;
    mission = useSelector((state) => state.spaceReducer.launch);
    mission = useSelector((state) => state.spaceReducer.recent);
    // console.log(recentStatus);

    // const launch = mission.slice(0, 9);
    // console.log(launch);

    // Search Implement
    const handleRocket = (e) => {
        const searchText = e.target.value;
        const search = mission.filter((name) =>
            name.rocket.rocket_name.toLowerCase().includes(searchText.toLowerCase())
        );
        // setDisplay(search);
        setPage(search);
        console.log(search);
    };
    // console.log(display);

    // Filtering

    // upcoming
    const handleLatest = (e) => {
        console.log(e.target.value);
        dispatch(upcoming(e.target.value));
        // setDisplay(recentStatus);
        // setPage(recentStatus);
    };

    // launch Date
    const lastYear = (e) => {
        const years = e.target.value;
        const preYear = mission.map((item) => item?.launch_year === years);
        // setDisplay(preYear);
        console.log(preYear);
    };
    // Status
    const handleStatus = (e) => {
        console.log(e.target.value);
        const recent = mission.map((item) => item?.upcoming === e.target.value);
        // setPage(recent);
        // setDisplay(recent);
        console.log(recent);
    };
    // Get Current Posts
    const indexOfLastPost = page * pageCount;
    const indexOfFirstPost = indexOfLastPost - pageCount;
    const currentPost = mission.slice(indexOfFirstPost, indexOfLastPost).reverse();

    // pagination
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(mission.length / pageCount); i += 1) {
        pageNumbers.push(i);
    }

    // change page
    const paginate = (pageNumber) => {
        setPage(pageNumber);
    };
    return (
        <div className="container my-5">
            <form className="d-flex justify-content-center my-5">
                <input
                    onChange={handleRocket}
                    className="form-control me-2 w-25"
                    type="search"
                    placeholder="Search by Rocket Name"
                    aria-label="Search"
                />
            </form>
            {/* {display && <p>Search Result by Name : {display.length}</p>} */}
            <div className="my-3 d-flex justify-content-between align-items-center my-5">
                <select name="" id="" onClick={handleLatest}>
                    <option value="Select">Select</option>
                    <option value="true">Upcoming</option>
                    <option value="false">No</option>
                </select>
                <select name="" id="" value="Launch Date" onChange={lastYear}>
                    <option value="Launch Date">Launch Date</option>
                    <option value="Last Week">Last Week</option>
                    <option value="Last Month">Last Month</option>
                    <option value="Last Year">Last Year</option>
                </select>
                <select name="" id="" onClick={handleStatus}>
                    <option value="Status">Status</option>
                    <option value="Failure">Failure</option>
                    <option value="Success">Success</option>
                </select>
            </div>
            {loading && (
                <div className="spinner-border text-danger text-center" role="status">
                    <span className="visually-hidden ">Loading...</span>
                </div>
            )}
            {!loading && (
                <div className="row row-cols-3 row-cols-md-3 g-4 my-3">
                    {
                        // ? display.map((rocket) => (
                        //       <Rockets key={rocket.flight_number} rocket={rocket} />
                        //   ))
                        // :
                        currentPost.map((rocket) => (
                            <Rockets key={rocket.flight_number} rocket={rocket} />
                        ))
                    }
                </div>
            )}

            {/* pagination */}
            <div className="d-flex justify-content-center align-items-center text-center my-5">
                {pageNumbers.map((number) => (
                    <button
                        type="button"
                        key={number}
                        onClick={() => paginate(number)}
                        className="text-info bg-white-50 px-3 mx-1 border"
                    >
                        {number}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default Mission;
