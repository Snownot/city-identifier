import './App.css';

import * as React from 'react';
import Router from "./component/router";
import {inject} from "mobx-react";
import InjectNames from "./store/storeIdentifier";
import SessionStore from "./store/sessionStore";

export interface IAppProps {
  sessionStore?: SessionStore;
}

@inject(InjectNames.SessionStore)
class App extends React.Component<IAppProps> {
  async componentDidMount() {
    await this.props.sessionStore!.getCurrentLoginInformation();
  }

  public render() {
    return <Router />;
  }
}

export default App;
