import React from 'react';
import { Link, Route } from 'react-router-dom';
import { Category } from 'pages';
import API from 'api';

class Categories extends React.Component {
    state = {
        categories: []
    }

    componentDidMount() {
        API.get('api/categories/page?limit=100&offset=1')
            .then(res => {
                const categories = res.data.CategoryList;
                this.setState({ categories });
            })
    }

    render() {
        return (
            <div>
                <h2>Category List</h2>
                <ul>
                    { this.state.categories.map(category => 
                        <li><Link to={`${this.props.match.url}/${category.Id}`}>{category.Name}</Link></li>
                    )}
                </ul>
                <Route path={`${this.props.match.url}/:id`} component={Category}/>
            </div>
        )
    }
}

export default Categories;