import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Input, Menu } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

export default class MenuBar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu secondary>
        <Menu.Item 
          name='home' 
          active={activeItem === 'home'} 
          onClick={this.handleItemClick} 
          as={Link} to="/"
        />
        <Menu.Item
          name='category'
          active={activeItem === 'category'}
          onClick={this.handleItemClick}
          as={Link} to="/categories"
        />
        <Menu.Item
          name='brand'
          active={activeItem === 'brand'}
          onClick={this.handleItemClick}
          as={Link} to="/brands"
        />
        <Menu.Item
          name='food'
          active={activeItem === 'food'}
          onClick={this.handleItemClick}
          as={Link} to="/foods"
        />
        <Menu.Menu position='right'>
          <Menu.Item>
            <Input icon='search' placeholder='Search'/>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}