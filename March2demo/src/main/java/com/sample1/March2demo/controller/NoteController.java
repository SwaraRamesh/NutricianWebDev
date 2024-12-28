package com.sample1.March2demo.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.sample1.March2demo.dto.FavoritesResponse;
import com.sample1.March2demo.dto.NotesResponse;
import com.sample1.March2demo.exception.NoteNotFoundException;
import com.sample1.March2demo.exception.UserNotFoundException;
import com.sample1.March2demo.model.Favorite;
import com.sample1.March2demo.model.MedicalCondition;
import com.sample1.March2demo.model.Note;
import com.sample1.March2demo.model.User;
import com.sample1.March2demo.repository.FavoriteRepository;
import com.sample1.March2demo.repository.NoteRepository;
import com.sample1.March2demo.repository.UserRepository;

@RestController
@CrossOrigin("http://localhost:3000")
public class NoteController {
	
	@Autowired
	private NoteRepository noteRepository;
	
	@Autowired
	private UserRepository userRepo;
	
	
	@PostMapping("/note")
	Note newNote(@RequestBody Note newNote) {
		return noteRepository.save(newNote);
	}
	
	/*@GetMapping("/notes")
	List<Note> getAllNotes() {
		return noteRepository.findAll();
	}*/
	
	@GetMapping("/notesUser/{userId}")
	NotesResponse getAllNotesByUserId(@PathVariable("userId") Long userId) {
		//System.out.print(userId);
		//return favoriteRepo.findAllByUserId(userId);
		return generateResponse(noteRepository.findAllNotesByUserId(userId), userId);
	}
	
	NotesResponse generateResponse(List<Note> noteList, Long userId) {
		
		NotesResponse resp = new NotesResponse();
		System.out.println(noteList.size());
		//List<Note> noteList1 = new ArrayList<Note>();
		System.out.print("coming "+ userId);
		
		/*for(Note note: noteList)
		{
			System.out.println("note id "+note.getId());
			noteList1.add(note);//noteRepository.findById(note.getId()).get());
		}*/
		
		resp.setUser(userRepo.findById(userId).get());
		resp.setNoteList(noteList);
		return resp;
		
	}
	
	/*@GetMapping("/note/{id}/{userId}")
	Note getNoteByIdAndUserId(@PathVariable Long id, @PathVariable Long userId) {
		System.out.println(id);
		return noteRepository.findByUserIdAndId(id, userId);
		//.orElseThrow(() -> new NoteNotFoundException(id));
	}*/
	
	@GetMapping("/note/{id}")
	Note getNoteById(@PathVariable Long id) {
		return noteRepository.findNoteById(id);
	}
	
	@PutMapping("/note/{id}")
	Note updateNote(@RequestBody Note note, @PathVariable Long id ) {
		
		return noteRepository.findById(id)
				.map(varNote -> {
					varNote.setEntry(note.getEntry());
					return noteRepository.save(varNote);
				}).orElseThrow(() -> new NoteNotFoundException(id));
	}
	
	@DeleteMapping("/note/{id}")
	String deleteNote(@PathVariable Long id) {
		noteRepository.findById(id) .orElseThrow(()-> new NoteNotFoundException(id));
				
		noteRepository.deleteById(id);
					
		return "Note "+id + " deleted successfully.";	
	}

}
