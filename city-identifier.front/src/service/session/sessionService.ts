import http from '../httpService';
import {ComparedCityDto, ComparedResultDto, DetailsDto} from "../client";


class SessionService {
    public async getCurrentLoginInformation(): Promise<any> {
        let result = await http.getApiServicesAppSessionGetCurrentLoginInformation(
            ((window as any).$Env as any).Authorization
        )
        return result;
    }

    public async getStartPoint(value: string): Promise<DetailsDto> {
        let result = await http.getApiServicesAppSessionGetStartPoint({value})
        return result.data;
    }

    public async getEndPoint(value: string): Promise<DetailsDto> {
        let result = await http.getApiServicesAppSessionGetEndPoint({value})
        return result.data;
    }

    public async comparedCity(cities: ComparedCityDto): Promise<ComparedResultDto> {
        console.log(cities)
        let result = await http.getApiServicesAppSessionGetComparedCity({body: cities})
        return result.data;
    }


}

export default new SessionService();
