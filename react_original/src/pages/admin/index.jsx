import React, { Component } from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import { Layout} from 'antd'


import Header from '../../components/Header'
import PageFooter from '../../components/Footer'
import NavLift from '../../components/NavLift'

import Category from '../category'
import Home from '../home'
import NotFound from '../not-found'
import Order from '../order'
import Product from '../product'
import Role from '../role'
import User from '../user'


const { Sider, Content } = Layout





export default class Admin extends Component {

    render() {
        return (
            <Layout style={{height:'100%'}}>
                <Sider>
                    <NavLift /> 
                </Sider>                              
                <Layout>
                    <Header>Header</Header>
                    <Content style={{backgroundColor:"white"}}>
                        
                        <Switch>
                            <Route path="/home" component = {Home}></Route>
                            <Route path="/not-found" component = {NotFound}></Route>
                            <Route path="/order" component = {Order}></Route>
                            <Route path="/product" component = {Product}></Route>
                            <Route path="/category" component = {Category}></Route>
                            <Route path="/user" component = {User}></Route>
                            <Redirect to="/home"/>
                        </Switch>
                        
                        
                        
                        </Content>
                    <PageFooter />
                </Layout>                
          </Layout>
        )
    }
}
