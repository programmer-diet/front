import React from 'react';
import { Link, Route } from 'react-router-dom';
import { Category } from 'pages';
import axios from 'axios';

class Categories extends React.Component {
    state = {
        categories: []
    }

    componentDidMount() {
        axios.get('http://13.209.115.132/api/categories/page?limit=100&offset=1')
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