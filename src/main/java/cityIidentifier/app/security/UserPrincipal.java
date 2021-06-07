package cityIidentifier.app.security;

import lombok.Data;
import org.springframework.security.core.GrantedAuthority;

import java.util.Collection;

@Data
public class UserPrincipal {

    private String username;

    private Collection<? extends GrantedAuthority> authorities;

}
