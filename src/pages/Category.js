import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({match}) => {
    return (
        <div>
            <h2>
                Category {match.params.id}
            </h2>
            <Link to='/categories'>back</Link>
        </div>
    )
}

export default Category;