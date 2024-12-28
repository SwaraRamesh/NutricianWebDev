package com.sample1.March2demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class Favorite {

	@Id
	@GeneratedValue
	private Long Id;
	private Long userId;
	private Long medId;
	public Long getId() {
		return Id;
	}
	public void setid(Long Id) {
		Id = this.Id;
	}
	public Long getUserId() {
		return userId;
	}
	public void setUserId(Long userId) {
		this.userId = userId;
	}
	public Long getMedId() {
		return medId;
	}
	public void setMedId(Long medId) {
		this.medId = medId;
	}
}
