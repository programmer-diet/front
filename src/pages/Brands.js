import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { Brand } from 'pages';
import axios from 'axios';

class Brands extends React.Component {
    state = {
        brands: []
    }

    componentDidMount() {
        axios.get('http://13.209.115.132/api/brands/page?limit=100&offset=1')
            .then(res => {
                const brands = res.data.BrandList;
                this.setState({ brands });
            })
    }
    render() {
        
        return (
            <div>
                <h2>Brand List</h2>
                <Switch>
                    <Route path='/brands/:id' component={Brand}/>
                    <Route path='/brands'>
                        <ul>
                            { this.state.brands.map(brand => 
                                <li><Link to={`${this.props.match.url}/${brand.Id}`}>{brand.Name}</Link></li>
                            )}
                        </ul>
                    </Route>
                </Switch>
            </div>
        )
    }
}

export default Brands;