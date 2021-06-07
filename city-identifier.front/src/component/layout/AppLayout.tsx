import './AppLayout.less';

import * as React from 'react';
import {observer} from "mobx-react";
import {RouteComponentProps} from "react-router-dom";


interface IProps extends RouteComponentProps {

}


@observer
class AppLayout extends React.Component<IProps> {


}

export default AppLayout;
