import React, { Component } from 'react'
import { Menu, Icon } from 'antd'
import "./index.less"
import { Link } from 'react-router-dom'

const { SubMenu } = Menu

export default class NavLift extends Component {


    render() {
        return (
            
                <div> 
                <Link to="/" className="left-nav">
                    <header className="left-nav-header">
                        <h1>BackEnd System</h1>
                    </header>
                </Link>
                <div>
        
        <Menu

          mode="inline"
          theme="dark"
        >
          <Menu.Item key="1">
            <Icon type="pie-chart" />
            <span>Home</span>
          </Menu.Item>
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="mail" />
                <span>Navigation One</span>
              </span>
            }
          >
            <Menu.Item key="5">
            <Icon type="inbox" />
                Option 5
            </Menu.Item>
            <Menu.Item key="6">
            <Icon type="inbox" />
                Option 6
            </Menu.Item>
          </SubMenu>
        </Menu>
      </div>
                </div>

                
        
        )
    }
}
