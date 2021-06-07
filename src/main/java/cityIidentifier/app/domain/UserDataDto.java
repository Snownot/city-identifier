package cityIidentifier.app.domain;

import lombok.Data;

import java.util.UUID;

@Data
public class UserDataDto {

    private UUID id;

    private String username;

}