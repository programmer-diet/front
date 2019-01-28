import React from 'react';

const Category = ({match}) => {
    return (
        <div>
            <h2>
                Category {match.params.id}
            </h2>
        </div>
    )
}

export default Category;