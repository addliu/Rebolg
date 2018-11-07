import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import './App.css';
import WrappedNormalLoginForm from './login';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class App extends Component {
  constructor(props){
    super(props);
      this.state = {
          current: 'Home',
      }
  }

  Index = () => <h2>Home</h2>;

  About = () => <h2>About</h2>;

  Users = () => <h2>Users</h2>;

  handleClick = (e) => {
      this.setState({current: e.key});
  };

    AppRouter = () => (
        <Router>
            <div>
                <Menu onClick={this.handleClick}
                      selectedKeys={[this.state.current]}
                      mode="horizontal">
                    <Menu.Item key="Home"><Link to="/">Home</Link></Menu.Item>
                    <Menu.Item key="About"><Link to="/about/">About</Link></Menu.Item>
                    <Menu.Item key="Users"><Link to="/users/">Users</Link></Menu.Item>
                    <Menu.Item disabled key="Coming Soon">Coming Soon</Menu.Item>
                    <SubMenu title="SubMenu">
                        <MenuItemGroup title="item1">
                            <Menu.Item key="item1-1">item1-1</Menu.Item>
                            <Menu.Item key="item1-2">item1-2</Menu.Item>
                        </MenuItemGroup>
                        <MenuItemGroup title="item2">
                            <Menu.Item key="item2-1">item2-1</Menu.Item>
                            <Menu.Item key="item2-2">item2-2</Menu.Item>
                        </MenuItemGroup>
                    </SubMenu>
                </Menu>
                <Route path="/" exact component={this.Index}/>
                <Route path="/about/" component={this.About}/>
                <Route path="/users/" component={this.Users}/>
            </div>
        </Router>
    );


  render() {
    return (
        <div>
            {this.AppRouter()}
        </div>
    );

  }
}

export default App;
