import React from 'react';
import { Link, Route } from 'react-router-dom';
// import { Food } from 'pages';
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
                <h2>Food List</h2>
                <ul>
                    { this.state.foods.map(food => 
                        <li><Link to={`${this.props.match.url}/${food.Id}`}>{food.Food.Name}</Link></li>
                    )}
                </ul>
                {/* <Route path={`${this.props.match.url}/:id`} component={Food}/> */}
            </div>
        )
    }
}

export default Foods;