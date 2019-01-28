import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, Categories, Brands, Foods } from 'pages';
import { Menu } from 'components';

class App extends Component {
  render() {
    return (
      <div>
        {/* <Search/> */}
        <Menu/>
        <Route exact path="/" component={Home}/>
        <Route path="/categories" component={Categories}/>
        <Route path="/brands" component={Brands}/>
        <Route path="/foods" component={Foods}/>
      </div>
    );
  }
}

export default App;
