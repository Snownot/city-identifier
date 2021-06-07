import './AppLayout.less';

import * as React from 'react';
import {observer} from "mobx-react";
import {Layout, Switch} from "antd";
import {Route, RouteComponentProps} from "react-router-dom";
import ProtectedRoute from "../router/protectedRoute";
import {appRouters} from "../router/router.config";
import DocumentTitle from 'react-document-title';

interface IProps extends RouteComponentProps {

}

@observer
class AppLayout extends React.Component<IProps> {

    render() {

        const layout = (
            <Layout style={{minHeight: '100vh'}}>
                <Switch>
                    {appRouters
                        .filter((item: any) => !item.isLayout)
                        .map((route: any, index: any) => (
                            <Route
                                exact
                                key={index}
                                path={route.path}
                                render={props => <ProtectedRoute component={route.component}
                                                                 permission={route.permission}/>}
                            />
                        ))}
                </Switch>


            </Layout>
        );

        return <DocumentTitle title={"Home"}>{layout}</DocumentTitle>;
    }
}

export default AppLayout;
