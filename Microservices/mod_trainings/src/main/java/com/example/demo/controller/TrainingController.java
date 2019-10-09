package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.web.bind.annotation.*;
import com.example.demo.pojo.TrainingDetails;
import com.example.demo.service.TrainingService;

@EnableEurekaClient
@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class TrainingController {

	@Autowired
	TrainingService service;


	@RequestMapping(method = RequestMethod.POST,value = "/training/new")
	  public void postTraining(@RequestBody TrainingDetails training) {
	    service.postTraining(training);
	  }
	
	@RequestMapping("/training/all")
	public List<TrainingDetails> getCourse() {
	return service.getCourse();
	}
	
	@RequestMapping("/training/mentor/payment/{mentorId}/{status}")
	public List<TrainingDetails> getUserPayment(@PathVariable Integer mentorId,String status) {
		return service.getUserPayment(mentorId,status);
	}
	
	
	@RequestMapping("/training/user/{id}/{status}")
	public List<TrainingDetails> getUserCourse(@PathVariable Integer id,@PathVariable String status) {
		return service.getUserCourse(id,status);
	}

	@RequestMapping("/training/mentor/{mentorId}/{status}")
	public List<TrainingDetails> getMentorCourse(@PathVariable Integer mentorId,@PathVariable String status) {
		return service.getMentorCourse(mentorId,status);
	}

}
