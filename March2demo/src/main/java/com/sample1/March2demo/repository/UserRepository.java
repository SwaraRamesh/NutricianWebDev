package com.sample1.March2demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sample1.March2demo.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
	User findByusername(String username);

}
