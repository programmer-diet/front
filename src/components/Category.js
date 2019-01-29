import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({match}) => {
    return (
        <div>
            <h5>
                {match.params.id}
            </h5>
            <Link to='/categories'>back</Link>
        </div>
    )
}

export default Category;