package cityIidentifier.app.controller;

import cityIidentifier.app.domain.ComparedCityDto;
import cityIidentifier.app.domain.ComparedResultDto;
import cityIidentifier.app.domain.ResultDto;
import cityIidentifier.app.service.CityService;
import cityIidentifier.app.service.DaDataService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;

@RestController
@CrossOrigin(maxAge = 3600)
@RequestMapping("/city")
public class CityIdentifierController {

    @Resource
    private DaDataService dataService;

    @Resource
    private CityService cityService;

    @GetMapping("/getStartPoint")
    public ResponseEntity<ResultDto> getStartPoint(@RequestParam(value = "value") String value) {
        ResultDto result = dataService.getAddress(value);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }

    @GetMapping("/getEndPoint")
    public ResponseEntity<ResultDto> getEndPoint(@RequestParam(value = "value") String value) {
        ResultDto result = dataService.getAddress(value);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }

    @PostMapping("/compareCity")
    public ResponseEntity<ComparedResultDto> compareCity(@RequestBody ComparedCityDto cities) {
        ComparedResultDto result = cityService.compare(cities);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }

}