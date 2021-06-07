import { action, observable } from 'mobx';

import sessionService from "../service/session/sessionService";


class SessionStore {

  @observable currentLogin?: string = "";

  @action
  async getCurrentLoginInformation() : Promise<any> {
    let result = await sessionService.getCurrentLoginInformation();
    console.log(result.data);
  }
}

export default SessionStore;
