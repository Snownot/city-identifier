package cityIidentifier.app.security;

import cityIidentifier.app.domain.UserDto;
import cityIidentifier.app.exception.UserFriendlyException;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class JwtTokenConverter {

    @Value("${auth.secret}")
    private String secret;

    public UserDto getUsernameFromToken(String token) {
        try {
            UserDto userDataDto = null;

            Claims body = Jwts.parserBuilder().setSigningKey(secret).build().parseClaimsJws(token).getBody();
            if (body != null) {
                userDataDto = new UserDto();
                userDataDto.setUsername(body.get("username", String.class));
            }
            return userDataDto;
        } catch (SecurityException e) {
            throw new UserFriendlyException("token error");
        }
    }
}