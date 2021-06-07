package cityIidentifier.app.service;

import cityIidentifier.app.domain.ComparedCityDto;
import cityIidentifier.app.domain.ComparedResultDto;
import org.springframework.stereotype.Service;

@Service
public class CityService {

    public ComparedResultDto compare(ComparedCityDto cities) {
        ComparedResultDto comparedCityDto = new ComparedResultDto();
        comparedCityDto.setCompared(cities.getEndCity().equals(cities.getStartCity()));
        return comparedCityDto;
    }

}