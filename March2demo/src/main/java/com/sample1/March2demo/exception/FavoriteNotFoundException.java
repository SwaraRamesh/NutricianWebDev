package com.sample1.March2demo.exception;

public class FavoriteNotFoundException extends RuntimeException{
	
	public FavoriteNotFoundException(Long id) {
		super("Could not find the favorite id "+id);
	}
}
