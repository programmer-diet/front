import React from 'react';
// import API from './api.js';
import axios from 'axios';

export default class Categories extends React.Component {
    state = {
        categories: []
    }

    componentDidMount() {
        axios.get('http://13.209.115.132/api/categories/page?limit=100&offset=1')       // temporary
            .then(res => {
                // console.log(res.data.CategoryList);
                const categories = res.data.CategoryList;
                this.setState({ categories });
            })
    }

    render() {
        return (
            <ul>
                { this.state.categories.map(category => <li>{category.Name}</li>)}
            </ul>
        )
    }
}