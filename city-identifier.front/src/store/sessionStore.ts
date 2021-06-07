import {action} from 'mobx';

import sessionService from "../service/session/sessionService";


class SessionStore {

    @action
    async getCurrentLoginInformation(): Promise<any> {
        await sessionService.getCurrentLoginInformation();
    }
}

export default SessionStore;
