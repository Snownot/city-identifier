package cityIidentifier.app.service;

import cityIidentifier.app.domain.ResultDto;
import lombok.SneakyThrows;
import org.springframework.stereotype.Service;
import ru.redcom.lib.integration.api.client.dadata.DaDataClient;
import ru.redcom.lib.integration.api.client.dadata.DaDataClientFactory;
import ru.redcom.lib.integration.api.client.dadata.DaDataException;
import ru.redcom.lib.integration.api.client.dadata.dto.Address;

import java.lang.reflect.Field;
import java.lang.reflect.Modifier;


@Service
public class DaDataService {

    private static final String daData_api_key = "c030e216075859df4555dfb9dea272a98db44c84";
    private static final String daData_secret_key = "b227ac81d7f26b6e1052b7beb1f1131926a6ac5b";

    private DaDataClient daData = DaDataClientFactory.getInstance(daData_api_key, daData_secret_key);

    @SneakyThrows
    public ResultDto getAddress(final String source) throws DaDataException {

        ResultDto resultDto = new ResultDto();

        Address addresses = daData.cleanAddress(source);

        resultDto.setValue (concatenate(addresses));
        resultDto.setCity (addresses.getCity());

        return resultDto;

    }

    public String concatenate(Address obj) throws IllegalAccessException {

        StringBuilder buffer = new StringBuilder();
        Field[] fields = obj.getClass().getDeclaredFields();

        for (Field f : fields) {

            if (!Modifier.isStatic(f.getModifiers())) {
                f.setAccessible(true);
                Object value = f.get(obj);

                if (value instanceof String) {
                    buffer.append(" ");
                    buffer.append(value);
                    buffer.append(" ");
                }

                if (buffer.length() > 50) {
                    break;
                }
            }
        }

        return buffer.toString();
    }
}