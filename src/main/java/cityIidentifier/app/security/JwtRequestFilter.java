package cityIidentifier.app.security;

import cityIidentifier.app.domain.UserDataDto;
import cityIidentifier.app.domain.UserDto;
import cityIidentifier.app.service.UserService;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.annotation.Resource;
import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Component
public class JwtRequestFilter extends OncePerRequestFilter {

    @Resource
    private UserService userService;

    private final JwtTokenConverter jwtTokenUtil;

    public JwtRequestFilter(JwtTokenConverter jwtTokenUtil) {
        this.jwtTokenUtil = jwtTokenUtil;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain chain) throws IOException, ServletException {

        String requestTokenHeader = request.getHeader("Authorization");
        String jwtToken = null;
        UserDto connectedUser = null;

        UserDataDto credentialUser = null;

        if (requestTokenHeader != null && requestTokenHeader.startsWith("Bearer ")) {
            jwtToken = requestTokenHeader.substring(7);
            connectedUser = jwtTokenUtil.getUsernameFromToken(jwtToken);
        }

        if (connectedUser != null) {
            credentialUser = userService.updateConnection(connectedUser);
        }

        if (credentialUser != null && SecurityContextHolder.getContext().getAuthentication() == null) {

            UserPrincipal userPrincipal = new UserPrincipal();
            userPrincipal.setUsername(connectedUser.getUsername());
            userPrincipal.setIsExpired(false);

            UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken = new UsernamePasswordAuthenticationToken(
                    userPrincipal, null, userPrincipal.getAuthorities());

            usernamePasswordAuthenticationToken
                    .setDetails(new WebAuthenticationDetailsSource().buildDetails(request));

            SecurityContextHolder.getContext().setAuthentication(usernamePasswordAuthenticationToken);
        }

        chain.doFilter(request, response);
    }
}
