import * as React from 'react';

import { Route, Switch } from 'react-router-dom';

import utils from '../../utils/utils';


const Router = () => {

    const Identifier = utils.getRoute('/Identifier').component;

    return (
        <Switch>
            <Route path="/Identifier" render={(props: any) => <Identifier {...props} exact />} />
        </Switch>
    );
};

export default Router;
