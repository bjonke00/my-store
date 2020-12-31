package com.mystore.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.mystore.entities.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long>{
	
	@Query("SELECT usr FROM User usr WHERE usr.username=(:username) AND usr.password =(:password)")
    List<User> getUser(@Param("username") String username, @Param("password") String password);
}
