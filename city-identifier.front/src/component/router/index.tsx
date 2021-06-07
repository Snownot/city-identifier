import * as React from 'react';

import { Route, Switch } from 'react-router-dom';

import utils from '../../utils/utils';


const Router = () => {

    const Identifier = utils.getRoute('/').component;

    return (
        <Switch>
            <Route path="/" render={(props: any) => <Identifier {...props} exact />} />
        </Switch>
    );
};

export default Router;
