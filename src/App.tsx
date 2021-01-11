import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { MenuItemGroup } from '@muya-ui/core';
import { SetIcon } from '@muya-ui/theme-light';
import { Content, Sider, Layout, Link } from './layout';
import loadable from '@loadable/component';
import Header from '@/components/Header';

const basename = '/';

const Index = loadable(() => import('./pages/index'));

export default function App() {
    return (
        <BrowserRouter basename={basename}>
            <Header />
            <Layout>
                <Sider
                    menuTitle="我的demo"
                    collapsedMenuTitle="管"
                    defaultOpenKeys={['model']}
                >
                    <MenuItemGroup key="brandgoods" title="我的路由">
                        <Link
                            to="/index"
                            key="/index"
                            icon={<SetIcon />}
                        >
                            我的作业
                        </Link>
                    </MenuItemGroup>
                </Sider>
                <Content>
                    <Switch>
                        <Route path="/index" exact component={Index} />
                    </Switch>
                    <Redirect exact from="/" to="/index" />
                </Content>
            </Layout>
        </BrowserRouter>
    );
}
