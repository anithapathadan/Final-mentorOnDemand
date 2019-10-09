package com.example.demo.service;


import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.repository.*;
import com.example.demo.pojo.*;
@Service
public class TraineeService {
@Autowired
private TraineeRepo repo;

public List<TraineeDetails> getTrainee(){
	List<TraineeDetails> trainee = new ArrayList<TraineeDetails>();
	 repo.findAll().forEach(trainee::add);
	 return trainee;
}

public void postTrainee(TraineeDetails trainee) {
	repo.save(trainee);
}

public String getUserDetails(Integer id) {
	return repo.searchNameById(id);
}

public TraineeDetails getUsersUserName(String userName) {

    return repo.searchUserName(userName);
}

public List<TraineeDetails> getTrainees(){
	List<TraineeDetails> ls=new ArrayList<>();
	repo.findAll().forEach(ls::add);
	return ls;
}
}








