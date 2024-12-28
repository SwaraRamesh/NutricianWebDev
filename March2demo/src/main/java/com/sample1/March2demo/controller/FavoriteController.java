package com.sample1.March2demo.controller;


import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sample1.March2demo.dto.FavoritesResponse;
import com.sample1.March2demo.dto.NotesResponse;
import com.sample1.March2demo.exception.FavoriteNotFoundException;
import com.sample1.March2demo.exception.UserNotFoundException;
import com.sample1.March2demo.model.Favorite;
import com.sample1.March2demo.model.MedicalCondition;
import com.sample1.March2demo.model.User;
import com.sample1.March2demo.repository.FavoriteRepository;
import com.sample1.March2demo.repository.MedicalConditionRepository;
import com.sample1.March2demo.repository.UserRepository;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/favorite")
public class FavoriteController {

	@Autowired
	private FavoriteRepository favoriteRepo;
	
	@Autowired
	private UserRepository userRepo;
	
	@Autowired
	private MedicalConditionRepository medicalRepo;
	
	@PostMapping("/add")
	Favorite newFavorite(@RequestBody Favorite newFavorite) {	
		return favoriteRepo.save(newFavorite);
	}
	
	
	
	/*@GetMapping("/{id}")
	public FavoritesResponse findAllMyList(@PathVariable("id") long userId) {
		List<MedicalCondition> medList = new ArrayList<MedicalCondition>();
		List<Favorite> d =  favoriteRepo.findAllByUserId(userId);
		for(Favorite myList: d ) {
			System.out.println(myList.getId());
			//medList.add(medicalRepo.findById(myList.getMedId()));
		}
		System.out.println(d.size());
		FavoritesResponse myResp =  new FavoritesResponse();
		//myResp.setMedCondList(medList);
		myResp.setUser(userRepo.getById(userId));
		return myResp;
	}*/
	
	
	@GetMapping("/{userId}")
	FavoritesResponse getAllFavoritesByUserId(@PathVariable("userId") Long userId) {
		//System.out.print(userId);
		//return favoriteRepo.findAllByUserId(userId);
		return generateResponse(favoriteRepo.findAllByUserId(userId), userId);
	}
	
	
	FavoritesResponse generateResponse(List<Favorite> favList, Long userId) {
		
		FavoritesResponse resp = new FavoritesResponse();
		
		List<MedicalCondition> medList = new ArrayList<MedicalCondition>();
		System.out.print("coming "+ userId);
		
		for(Favorite fav: favList)
		{
			//System.out.println("med id "+fav.getMedId());
			medList.add(medicalRepo.findById(fav.getMedId()).get());
		}
		
		resp.setUser(userRepo.findById(userId).get());
		resp.setMedCondList(medList);
		return resp;
		
	}
	
	/*FavoritesResponse getAllFavoritesByUserId(@PathVariable("userId") Long userId) {
		
		List<Favorite> favoritesByUser = favoriteRepo.findAllByUserId(userId);
		
		//System.out.println("size "+favoritesByUser.size());
		
		FavoritesResponse favoriteResponse = new FavoritesResponse();
		favoriteResponse.setUser(userRepo.getById(userId));
		
		//System.out.println(favoriteResponse.getUser());
		
		List<MedicalCondition> medList = new ArrayList<MedicalCondition>();
		/*for (int i = 0; i < favoritesByUser.size(); i++) {
			medList.add(medicalRepo.findById(favoritesByUser.get(i).getMedId());
		}
		
		for(Favorite fav: favoritesByUser)
		{
			
			//medList.add(medicalRepo.getById(fav.getMedId()));
			System.out.println("med id "+favoriteRepo.getById(fav.getId()));
		}
		//System.out.println("med size "+medList.size());
		
		favoriteResponse.setMedCondList(medList);
		return favoriteResponse;
	}*/
	
	@DeleteMapping("/delete/{userId}/{medId}")// 
	String deleteUser(@PathVariable Long userId, @PathVariable Long medId) {
		Favorite favDelete = new Favorite();
		if ((favoriteRepo.findByUserIdAndMedId(userId, medId))!= null)
		{	
			favDelete = favoriteRepo.findByUserIdAndMedId(userId, medId);
			favoriteRepo.deleteById(favDelete.getId());
		}
		return "Favorite deleted "+userId+", "+medId+ favDelete.getId();	
	}
}
