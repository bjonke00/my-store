package com.mystore.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mystore.entities.User;
import com.mystore.repositories.UserRepository;

@Service
public class UserService {
	
	@Autowired
	UserRepository userRepository;
	
	public void saveUser(User user) {
		userRepository.save(user);
	}
	
	public void register(User user) {
		userRepository.save(user);
	}
	
	public boolean login(User user) {
		List<User> users = userRepository.getUser(user.getUsername(), user.getPassword());
		return !users.isEmpty();
	}
	
	public User getUser(User user) {
		return userRepository.getUser(user.getUsername(), user.getPassword()).get(0);
	}
}
