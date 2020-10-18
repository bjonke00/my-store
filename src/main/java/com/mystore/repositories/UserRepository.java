package com.mystore.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mystore.entities.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long>{
}
