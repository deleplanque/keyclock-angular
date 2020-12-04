package com.deleplanque.backend.controller;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class KeycloakController {

  @RequestMapping(
            path = "/admin",
            method = RequestMethod.GET
    )
    public String adminSecuredEndpoint(){
        return "This is an ADMIN endpoint payload";
    }

}
