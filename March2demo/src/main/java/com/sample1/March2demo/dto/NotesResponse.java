package com.sample1.March2demo.dto;

import java.util.List;

import com.sample1.March2demo.model.Note;
import com.sample1.March2demo.model.User;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class NotesResponse {

	private User user;
	private List<Note> noteList;
	
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
	public List<Note> getNoteList() {
		return noteList;
	}
	public void setNoteList(List<Note> noteList) {
		this.noteList = noteList;
	}
}
