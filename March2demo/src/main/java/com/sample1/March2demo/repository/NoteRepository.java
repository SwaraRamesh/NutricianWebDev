package com.sample1.March2demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sample1.March2demo.model.Favorite;
import com.sample1.March2demo.model.Note;
import com.sample1.March2demo.model.User;

@Repository
public interface NoteRepository extends JpaRepository<Note, Long>{
	
	Note findNoteById(Long id);
	
	List<Note> findAllNotesByUserId(Long userId);
	
	Note findByUserIdAndId(Long id, Long userId);
}
