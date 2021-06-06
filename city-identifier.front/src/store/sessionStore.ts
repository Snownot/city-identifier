import { action, observable } from 'mobx';

import sessionService from "../service/session/sessionService";


class SessionStore {
  @observable currentLogin: any = [];

  @action
  async getCurrentLoginInformation() : Promise<any> {
    let result = await sessionService.getCurrentLoginInformation();
    this.currentLogin = result;
  }
}

export default SessionStore;
