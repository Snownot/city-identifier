package cityIidentifier.app.domain.repository;


import cityIidentifier.app.domain.Entity.UserData;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface UserRepository extends JpaRepository<UserData, UUID> {

    UserData findByUserName(String name);

}