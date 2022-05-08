import React from 'react';
import Mission from '../Mission/Mission';

function Home() {
    return (
        <div>
            <h3>This is Home</h3>
            <button type="button" className="btn btn-success">
                Success
            </button>
            <Mission />
        </div>
    );
}

export default Home;
