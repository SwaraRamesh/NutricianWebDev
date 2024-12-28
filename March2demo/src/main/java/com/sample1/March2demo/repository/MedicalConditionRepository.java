package com.sample1.March2demo.repository;



import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sample1.March2demo.model.MedicalCondition;

@Repository
public interface MedicalConditionRepository extends JpaRepository<MedicalCondition, Long>{

	Page<MedicalCondition> findAll(Pageable pageable);
}
