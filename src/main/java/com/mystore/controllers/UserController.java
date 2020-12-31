package com.mystore.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
	
	@Autowired
	private UserRepository userRepository;
 
    @PostMapping(path = "/user", consumes = "application/json", produces = "application/json")
    @ResponseStatus(HttpStatus.OK)
    public void addUser(@RequestBody User user) {
        userService.saveUser(user);
    }
    
    @PostMapping(path = "/register", consumes = "application/json", produces = "application/json")
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<User> register(@RequestBody User user) {
        try {
        	userService.register(user);
        	userRepository.save(user);
        }catch(Exception e) {
        	return new ResponseEntity<>(user, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<>(user, HttpStatus.OK);
    }
    
    @PostMapping(path = "/login", consumes = "application/json", produces = "application/json")
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<User> login(@RequestBody User user) {
    	 try {
         	if(userService.login(user)) {
         		return new ResponseEntity<>(user, HttpStatus.OK);
         	}else {
         		return new ResponseEntity<>(user, HttpStatus.FORBIDDEN);
         	}
         }catch(Exception e) {
         	return new ResponseEntity<>(user, HttpStatus.INTERNAL_SERVER_ERROR);
         }
    }
    
}
