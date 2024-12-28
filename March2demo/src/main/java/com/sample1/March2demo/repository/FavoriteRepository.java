package com.sample1.March2demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sample1.March2demo.model.Favorite;
import com.sample1.March2demo.model.MedicalCondition;

@Repository
public interface FavoriteRepository extends JpaRepository<Favorite, Long>{

	

	List<Favorite> findAllByUserId(Long userId);
	
	Favorite findByUserIdAndMedId(Long userId, Long medId);
	

	//Object findByMedId(Long medId);
	
}
