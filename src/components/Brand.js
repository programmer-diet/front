import React from 'react';
import { Link } from 'react-router-dom';

const Brand = ({match}) => {
    return (
        <div>
            <h5>
                {match.params.id}
            </h5>
            <Link to='/brands'>back</Link>
        </div>
    )
}

export default Brand;