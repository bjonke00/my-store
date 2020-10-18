package com.mystore.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mystore.entities.User;
import com.mystore.repositories.UserRepository;

@Service
public class UserService {
	
	@Autowired
	UserRepository repo;
	
	public User getUserById(Long id) {
		return repo.getOne(id);
	}
	
	public void saveUser(User user) {
		repo.save(user);
	}
}
