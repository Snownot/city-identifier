package cityIidentifier.app.domain.Entity;

import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.time.LocalDate;
import java.util.UUID;

@Data
@Entity
@Table(name = "auth_user")
public class UserData {

    @Id
    @GeneratedValue
    @Column(name = "id")
    private UUID id;

    @NotNull
    @Column(name = "user_name")
    private String userName;

    @NotNull
    @Column(name = "created_data")
    private LocalDate createdDate;

    @NotNull
    @Column(name = "updated_data")
    private LocalDate updatedDate;


}