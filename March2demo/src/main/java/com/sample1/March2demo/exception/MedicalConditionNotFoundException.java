package com.sample1.March2demo.exception;

public class MedicalConditionNotFoundException extends RuntimeException{

	public MedicalConditionNotFoundException(Long id) {
		super("Could not find the medical condition id "+id);
	}
}
