package com.sample1.March2demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class MedicalCondition {

	@Id
	@GeneratedValue
	private Long Id;
	private String name;
    private String symptoms;
    private String suggestions;
    private String avoid;
    private String meals;
    private String veganMeals;
	public Long getId() {
		return Id;
	}
	public void setId(Long id) {
		Id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getSymptoms() {
		return symptoms;
	}
	public void setSymptoms(String symptoms) {
		this.symptoms = symptoms;
	}
	public String getSuggestions() {
		return suggestions;
	}
	public void setSuggestions(String suggestions) {
		this.suggestions = suggestions;
	}
	public String getAvoid() {
		return avoid;
	}
	public void setAvoid(String avoid) {
		this.avoid = avoid;
	}
	public String getMeals() {
		return meals;
	}
	public void setMeals(String meals) {
		this.meals = meals;
	}
	public String getVeganMeals() {
		return veganMeals;
	}
	public void setVeganMeals(String veganMeals) {
		this.veganMeals = veganMeals;
	}
    
	
	
}
