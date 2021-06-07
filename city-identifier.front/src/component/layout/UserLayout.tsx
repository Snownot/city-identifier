import './UserLayout.less';

import * as React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Col } from 'antd';
import DocumentTitle from 'react-document-title';
import { appRouters } from '../router/router.config';


class UserLayout extends React.Component<any> {
  render() {
    return (
      <DocumentTitle title={"Hello"}>
        <Col className="container">
          <Switch>
            {appRouters
              .filter((item: any) => !item.isLayout)
              .map((item: any, index: number) => (
                <Route key={index} path={item.path} component={item.component} exact={item.exact} />
              ))}
            <Redirect from="/user" to="/user" />
          </Switch>
        </Col>
      </DocumentTitle>
    );
  }
}

export default UserLayout;
