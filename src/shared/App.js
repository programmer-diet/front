import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, Categories, Brands } from 'pages';
import { Menu } from 'components';

class App extends Component {
  render() {
    return (
      <div>
        {/* <Search/> */}
        <Menu/>
        <Route exact path="/" component={Home}/>
        <Route path="/categories" component={Categories}/>
        <Switch>
          <Route path="/brands/:name" component={Brands}/>
          <Route path="/brands" component={Brands}/>
        </Switch>
      </div>
    );
  }
}

export default App;
