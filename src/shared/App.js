import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Home, Categories, Brands, Foods } from 'pages';
import { MenuBar, BreadcrumbHeader } from 'components';


import 'semantic-ui-css/semantic.min.css'

class App extends Component {
  render() {
    return (
      <div>
        <MenuBar/>
        {/* <BreadcrumbHeader/>  */}
        <Route exact path="/" component={Home}/>
        <Route path="/categories" component={Categories}/>
        <Route path="/brands" component={Brands}/>
        <Route path="/foods" component={Foods}/>
      </div>
    );
  }
}

export default App;
