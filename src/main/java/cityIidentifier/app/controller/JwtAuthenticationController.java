package cityIidentifier.app.controller;

import jdk.net.SocketFlow;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class JwtAuthenticationController {

    @RequestMapping(value = "/connect", method = RequestMethod.HEAD)
    public ResponseEntity<?> connect() {
        return ResponseEntity.ok(SocketFlow.Status.OK);
    }
}
