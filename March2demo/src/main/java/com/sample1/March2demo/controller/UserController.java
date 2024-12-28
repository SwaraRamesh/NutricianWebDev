package com.sample1.March2demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;

import java.util.*;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.sample1.March2demo.exception.MedicalConditionNotFoundException;
import com.sample1.March2demo.exception.UserNotFoundException;
import com.sample1.March2demo.model.MedicalCondition;
import com.sample1.March2demo.model.User;
import com.sample1.March2demo.repository.UserRepository;
import com.sample1.March2demo.repository.MedicalConditionRepository;

import java.io.Console;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("http://localhost:3000")
public class UserController {

	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private MedicalConditionRepository medicalConditionRepo;
	
	@PostMapping("/user")
	User newUser(@RequestBody User newUser) {	
		return userRepository.save(newUser);
	}
	
	@PostMapping("/medicalCondition")
	MedicalCondition newMedicalCondition(@RequestBody MedicalCondition newMedicalCondition) {
		return medicalConditionRepo.save(newMedicalCondition);
	}
	
	@GetMapping("/users")
	List<User> getAllUsers() {
		return userRepository.findAll();
	}
	
	@GetMapping("/userid/{id}")
	User getUserById(@PathVariable Long id) {
		System.out.println(id);
		return userRepository.findById(id)
		.orElseThrow(()->new UserNotFoundException(id));
	}
	
	@GetMapping("/user/{username}") 
	User getUserByusername(@PathVariable String username) {
		User user = userRepository.findByusername(username);
		if (user != null) {
			System.out.print("User "+user.getUsername());
			return user;
		}
		else {
			System.out.print("User not found");
			return null;
		}
		//.orElseThrow(()->new UserNotFoundException(username));
	}
	
	@GetMapping("/medicalConditions")
	List<MedicalCondition> getAllMedicalConditions() {
		return medicalConditionRepo.findAll();
	}
	
	@GetMapping("/medicalCondition/{id}")
	MedicalCondition getMedicalConditionById(@PathVariable Long id){
		return medicalConditionRepo.findById(id)
				.orElseThrow(()->new MedicalConditionNotFoundException(id));
	}
	
	@GetMapping("medicalConditions/paging/{page}/{size}")
	Page<MedicalCondition> getAllWithPaging(@PathVariable int page, @PathVariable int size) {
		Page<MedicalCondition> ret;
		ret = medicalConditionRepo.findAll(PageRequest.of(page, size));
		return ret;
	}
	
	@PutMapping("/user/{id}")
	User updateUser(@RequestBody User user, @PathVariable Long id ) {
		
		return userRepository.findById(id)
				.map(varUser -> {
					varUser.setEmail(user.getEmail());
					varUser.setPassword(user.getPassword());
					varUser.setFirstName(user.getFirstName());
					varUser.setLastName(user.getLastName());
					varUser.setUsername(user.getUsername());
					varUser.setPassword(user.getPassword());
					varUser.setRole(user.getRole());
					return userRepository.save(varUser);
				}).orElseThrow(() -> new UserNotFoundException(id));
		
		
	}
	
	
	@PutMapping("/medicalCondition/{id}")
	MedicalCondition updateMedicalCondition(@RequestBody MedicalCondition medicalCondition, @PathVariable Long id) {
		
		return medicalConditionRepo.findById(id)
				.map(varMedCond -> {
					varMedCond.setSymptoms(medicalCondition.getSymptoms());
					varMedCond.setSuggestions(medicalCondition.getSuggestions());
					varMedCond.setAvoid(medicalCondition.getAvoid());
					varMedCond.setMeals(medicalCondition.getMeals());
					varMedCond.setVeganMeals(medicalCondition.getVeganMeals());
					return medicalConditionRepo.save(varMedCond);
				}).orElseThrow(() -> new MedicalConditionNotFoundException(id));
	}
	
	@DeleteMapping("/user/{id}")
	String deleteUser(@PathVariable Long id) {
		userRepository.findById(id) .orElseThrow(()-> new UserNotFoundException(id));
				
		userRepository.deleteById(id);
					
		return "User "+id + " deleted successfully.";	
	}
	
	@DeleteMapping("/medicalCondition/{id}")
	String deleteMedicalCondition(@PathVariable Long id) {
		medicalConditionRepo.findById(id).orElseThrow(()-> new MedicalConditionNotFoundException(id));
		
		medicalConditionRepo.deleteById(id);
		
		return "Medical Condition deleted " + id;
	}
	
	
}
