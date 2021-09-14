import React,{Component} from "react";
import { Layout,Menu, } from 'antd';

 import { HashRouter, Switch, NavLink, Route,  } from 'react-router-dom';
 import Home from "../component/home";
 import From from "../component/from";
 const { SubMenu } = Menu;
const { Header, Footer, Sider, Content } = Layout;
class Box extends Component{
  state = {
    collapsed: false,
  };

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
    render(){
        return(
        <HashRouter>
          <Layout style={{height:1000}}>
          <Sider>

         <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          inlineCollapsed={this.state.collapsed}
        >
          
          <Menu.Item key="1">
            
            <span>后台</span>
          </Menu.Item>
          <SubMenu
            key="sub1"
            title={
              <span>
              
                <span>一级路由</span>
              </span>
            }
          >
            <Menu.Item key="5"><NavLink to="/home">首页</NavLink></Menu.Item>
            <Menu.Item key="6"><NavLink to="/from">表单</NavLink></Menu.Item>
            <Menu.Item key="7">二级路由</Menu.Item>
          </SubMenu>
          </Menu>
         
          </Sider>
          <Layout>
            <Header>Header</Header>
            <Content>
            <Switch>
            <Route path='/home' component={Home} />
            <Route path='/from' component={From} />
            </Switch>
           

</Content>
             
            <Footer>Footer</Footer>
          </Layout>
        </Layout>
        </HashRouter>
        )
    }
}
export default Box