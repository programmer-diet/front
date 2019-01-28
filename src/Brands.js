import React from 'react';
// import API from './api.js';
import axios from 'axios';

export default class Brands extends React.Component {
    state = {
        brands: []
    }

    componentDidMount() {
        axios.get('http://13.209.115.132/api/brands/page?limit=100&offset=1')       // temporary
            .then(res => {
                const brands = res.data.BrandList;
                this.setState({ brands });
            })
    }

    render() {
        return (
            <ul>
                { this.state.brands.map(brand => <li>{brand.Name}</li>)}
            </ul>
        )
    }
}