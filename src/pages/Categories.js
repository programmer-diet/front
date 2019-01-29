import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { List } from 'semantic-ui-react'
import { Category } from 'components';
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
                <Switch>
                    <Route path="/categories/:id" component={Category}/>
                    <Route path="/categories">
                        <List link>
                            { this.state.categories.map(category => 
                                <List.Item>
                                    <Link to={`${this.props.match.url}/${category.Id}`}>{category.Name}</Link>
                                </List.Item>
                            )}
                        </List>
                    </Route>
                </Switch>
            </div>
        )
    }
}

export default Categories;