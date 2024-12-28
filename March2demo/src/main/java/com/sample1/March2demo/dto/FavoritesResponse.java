package com.sample1.March2demo.dto;

import java.util.List;

import com.sample1.March2demo.model.MedicalCondition;
import com.sample1.March2demo.model.User;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class FavoritesResponse {

	private User user;
	private List<MedicalCondition> MedCondList;
	
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
	public List<MedicalCondition> getMedCondList() {
		return MedCondList;
	}
	public void setMedCondList(List<MedicalCondition> medCondList) {
		MedCondList = medCondList;
	}
}
