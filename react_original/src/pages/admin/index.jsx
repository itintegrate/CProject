import PageHeader from '../../components/Header';
import PageFooter from '../../components/Footer';
import NavLift from '../../components/NavLift';
import {reqWeather} from '../../api/index'

import React, { Component } from 'react'
import { Layout} from 'antd';
const {Content} = Layout;





export default class Admin extends Component {

    render() {
        return (
            <Layout style={{height:'100%'}}>
                <NavLift />               
                <Layout>
                    <PageHeader/>
                    <Content>main content</Content>
                    <PageFooter />
                </Layout>                
          </Layout>
        )
    }
}
