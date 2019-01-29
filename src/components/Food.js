import React from 'react';
import { Link } from 'react-router-dom';

const Food = ({match}) => {
    return (
        <div>
            <h5>
                {match.params.id}
            </h5>
            <Link to='/foods'>back</Link>
        </div>
    )
}

export default Food;