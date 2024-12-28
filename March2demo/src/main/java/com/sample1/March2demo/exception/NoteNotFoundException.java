package com.sample1.March2demo.exception;

public class NoteNotFoundException extends RuntimeException{
	
	public NoteNotFoundException(Long id) {
		super("Could not find the note id " + id);
	}

}