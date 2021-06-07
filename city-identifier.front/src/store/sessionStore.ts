import {action} from 'mobx';

import sessionService from "../service/session/sessionService";
import {ComparedCityDto, ComparedResultDto, DetailsDto} from "../service/client";

class SessionStore {

    @action
    public async getCurrentLoginInformation(): Promise<any> {
        await sessionService.getCurrentLoginInformation();
    }

    @action
    public async getStartPoint(value: string): Promise<DetailsDto> {
        return await sessionService.getStartPoint(value);
    }

    @action
    public async getEndPoint(value: string): Promise<DetailsDto> {
        return await sessionService.getEndPoint(value);
    }

    @action
    public async comparedCity(cities: ComparedCityDto): Promise<ComparedResultDto> {
        return await sessionService.comparedCity(cities);
    }
}

export default SessionStore;
