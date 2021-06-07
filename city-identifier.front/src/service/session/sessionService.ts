import http from '../httpService';


class SessionService {
    public async getCurrentLoginInformation(): Promise<any> {
        let result = await http.getApiServicesAppSessionGetCurrentLoginInformation(
            ((window as any).$Env as any).Authorization
        )
        return result;
    }
}

export default new SessionService();
