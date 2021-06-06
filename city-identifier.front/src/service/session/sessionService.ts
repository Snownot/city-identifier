import http from '../httpService';


class SessionService {
  public async getCurrentLoginInformation(): Promise<any> {
    let result = await http.getApiServicesAppSessionGetCurrentLoginInformation("sd")

    return result;
  }
}

export default new SessionService();
