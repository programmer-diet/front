import React from 'react';
import { Link } from 'react-router-dom';

const Brand = ({match}) => {
    return (
        <div>
            <h2>
                Brand {match.params.id}
            </h2>
            <Link to='/brands'>back</Link>
        </div>
    )
}

export default Brand;