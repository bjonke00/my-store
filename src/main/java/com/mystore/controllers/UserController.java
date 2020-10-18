package com.mystore.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.mystore.entities.User;
import com.mystore.repositories.UserRepository;
import com.mystore.services.UserService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {
    
	@Autowired
    private UserService userService;
 
    @PostMapping(path = "/user", consumes = "application/json", produces = "application/json")
    @ResponseStatus(HttpStatus.OK)
    public void addUser(@RequestBody User user) {
        userService.saveUser(user);
    }
    
    
    
}
