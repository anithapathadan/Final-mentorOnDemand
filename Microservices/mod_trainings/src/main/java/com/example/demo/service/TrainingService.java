package com.example.demo.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.pojo.TrainingDetails;
import com.example.demo.repository.TrainingRepository;

@Service
public class TrainingService {

	@Autowired
	TrainingRepository repo;
	
	public void postTraining(TrainingDetails training) {
		repo.save(training);
	}
	
	public List<TrainingDetails> getCourse() {
		List<TrainingDetails> ls=new ArrayList<>();
		repo.findAll().forEach(ls::add);
		return ls;
	}
	
	public List<TrainingDetails> getUserPayment(Integer mentorId,String status) {
		return repo.searchUserPayment(mentorId,status);
	}
	
	public List<TrainingDetails> getUserCourse(Integer userId,String status) {
		return repo.searchUserCourse(userId,status);
	}

	public List<TrainingDetails> getMentorCourse(Integer mentorId,String status) {
		return repo.searchMentorCourse(mentorId,status);
	}

}




