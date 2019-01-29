import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { List } from 'semantic-ui-react'
import { Food } from 'components';
import API from 'api';

class Foods extends React.Component {
    state = {
        foods: []
    }

    componentDidMount() {
        API.get('api/foods/page?limit=100&offset=1')
            .then(res => {
                const foods = res.data.FoodList;
                this.setState({ foods });
            })
    }

    render() {
        return (
            <div>
                <Switch>
                    <Route path="/foods/:id" component={Food}/>
                    <Route path="/foods">
                        <List link>
                            { this.state.foods.map(food => 
                                <List.Item>
                                    <Link to={`${this.props.match.url}/${food.Food.Id}`}>{food.Food.Name}</Link>
                                </List.Item>
                            )}
                        </List>
                    </Route>
                </Switch>
            </div>
        )
    }
}

export default Foods;