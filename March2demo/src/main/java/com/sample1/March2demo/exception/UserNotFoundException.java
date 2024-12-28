package com.sample1.March2demo.exception;

public class UserNotFoundException extends RuntimeException{
	
	public UserNotFoundException(Long id) {
		super("Could not find the user id "+id);
	}
	
	public UserNotFoundException(String username) {
		super("Could not find the username" + username);
	}

}