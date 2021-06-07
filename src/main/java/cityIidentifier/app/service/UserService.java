package cityIidentifier.app.service;

import cityIidentifier.app.domain.Entity.UserData;
import cityIidentifier.app.domain.UserDataDto;
import cityIidentifier.app.domain.UserDto;
import cityIidentifier.app.domain.repository.UserRepository;
import cityIidentifier.app.exception.UserFriendlyException;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;

    private final ModelMapper modelMapper;

    @Transactional
    public UserDataDto updateConnection(UserDto connectedUser) {
        UserData userData = userRepository.findByUserName(connectedUser.getUsername());

        if (userData == null) {
            throw new UserFriendlyException("User not found");
        }

        userData.setUpdatedDate(LocalDate.now());

        return modelMapper.map(userRepository.saveAndFlush(userData), UserDataDto.class);
    }

}
