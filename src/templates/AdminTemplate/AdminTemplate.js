import React, { useState } from 'react'
import { Route,NavLink } from 'react-router-dom';

import { Layout, Menu } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
} from '@ant-design/icons';
import { useSelector } from 'react-redux';
import { Redirect } from "react-router";

const { Header, Sider, Content } = Layout;


export const AdminTemplate = (props) => {

    const {userLogin} = useSelector(state=>state.UserReducer);
    console.log('userLogin',userLogin);

    const [state, setState] = useState({
        collapsed: false,
    });
    const toggle = () => {
        setState({
            ...state,
            collapsed: !state.collapsed,
        });
    };

    if(userLogin.maLoaiNguoiDung !== 'QuanTri'){
        alert('Bạn không có quyền truy cập vào trang này!!');
        return <Redirect to='/'/>
    }

    return (
        <Route path={props.path} exact render={(propsRoute) => {
            return <Layout>
                <Sider trigger={null} collapsible collapsed={state.collapsed}>
                    <div className="logo text-center" >
                        <img src="https://picsum.photos/50/50" style={{borderRadius:'50%'}}/>
                    </div>
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1" icon={<UserOutlined />}>
                            <NavLink to='/admin/films'>Quan Ly Phim</NavLink>
                        </Menu.Item>
                        <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                            nav 2
                        </Menu.Item>
                        <Menu.Item key="3" icon={<UploadOutlined />}>
                            nav 3
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-background text-white p-2" style={{ padding: 0,fontSize:20 }}>
                        {React.createElement(state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: 'trigger',
                            onClick: toggle,
                        })}
                    </Header>
                    <Content
                        className="site-layout-background"
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            minHeight: 280,
                        }}
                    >
                              <props.component {...propsRoute} />
                    </Content>
                </Layout>
            </Layout>
        }} />
    )
}