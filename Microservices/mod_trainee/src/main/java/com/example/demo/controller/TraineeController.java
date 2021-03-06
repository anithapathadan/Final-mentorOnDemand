package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.web.bind.annotation.*;
import com.example.demo.pojo.TraineeDetails;
import com.example.demo.service.TraineeService;
@EnableEurekaClient
//@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class TraineeController {
	@Autowired
	 TraineeService service;

	
	@RequestMapping(method = RequestMethod.POST,value = "/trainee/signup")
	  public void postTrainee(@RequestBody TraineeDetails trainee) {
	    service.postTrainee(trainee);
	  }
	
	@RequestMapping("/user/{id}")
	public String getUserDetails(@PathVariable Integer id) {
		return service.getUserDetails(id);
	}
	
	@RequestMapping("/trainee/{userName}")
    public TraineeDetails getPersonUserName(@PathVariable String userName){
        return service.getUsersUserName(userName);
    }
	
	@RequestMapping("/trainee/all")
	public List<TraineeDetails> getMentor()
	{
		return service.getTrainees();
	}
	
}




















