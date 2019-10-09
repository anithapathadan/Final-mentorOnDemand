package com.example.demo.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.pojo.TrainerDetails;
import com.example.demo.pojo.TrainerSkills;
import com.example.demo.repository.TrainerRepo;
import com.example.demo.repository.TrainerSkillsRepo;

@Service
public class TrainerService {
@Autowired
TrainerRepo repo;

@Autowired
TrainerSkillsRepo tsrepo; 

public List<TrainerDetails> getTrainer(){
	List<TrainerDetails> trainer = new ArrayList<TrainerDetails>();
	 repo.findAll().forEach(trainer::add);
	 return trainer;
}

public List<TrainerSkills> ts(){
	List<TrainerSkills> trainer = new ArrayList<TrainerSkills>();
	 tsrepo.findAll().forEach(trainer::add);
	 return trainer;
}


public void postTrainer(TrainerDetails trainer) {
	repo.save(trainer);
}

public void postTrainerSkill(TrainerSkills trainerskills) {
	tsrepo.save(trainerskills);
}

public String getUserDetails(Integer id) {
	return repo.searchNameById(id);
}



public TrainerDetails mentorName(String userName) {

    return repo.searchUserName(userName);
}

public List<TrainerDetails> getTrainees(){
	List<TrainerDetails> ls=new ArrayList<>();
	repo.findAll().forEach(ls::add);
	return ls;
}

public void deleteMentor(Long id) {
	repo.deleteById(id);
}
}
