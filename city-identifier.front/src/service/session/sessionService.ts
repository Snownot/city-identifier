import http from '../httpService';


class SessionService {
    public async getCurrentLoginInformation(): Promise<any> {
        let result = await http.getApiServicesAppSessionGetCurrentLoginInformation({
            headers: {
                Authorization: "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0b3RvIiwiZXhwIjoxNDk1ODI5NDA3fQ.O2xvqz15TwxdKxB0aTxm32ySdrcZjf_fsJB3FdUV1ESwWZ3bW4PKPWgm3RI6SPMeaX6Hh0Bdjirgyp4FkdPeRQ"
            },
        })
        return result;
    }
}

export default new SessionService();
