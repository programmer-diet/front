import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { List } from 'semantic-ui-react'
import { Brand } from 'components';
import API from 'api';

class Brands extends React.Component {
    state = {
        brands: []
    }

    componentDidMount() {
        API.get('api/brands/page?limit=100&offset=1')
            .then(res => {
                const brands = res.data.BrandList;
                this.setState({ brands });
            })
    }
    render() {
        
        return (
            <div>
                <Switch>
                    <Route path='/brands/:id' component={Brand}/>
                    <Route path='/brands'>
                        <List link>
                            { this.state.brands.map(brand => 
                                <List.Item>
                                    <Link to={`${this.props.match.url}/${brand.Id}`}>{brand.Name}</Link>
                                </List.Item>
                            )}
                        </List>
                    </Route>
                </Switch>
            </div>
        )
    }
}

export default Brands;