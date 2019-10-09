package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.pojo.TrainerDetails;
import com.example.demo.service.TrainerService;

@EnableEurekaClient
@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class TrainerController {
	@Autowired
	TrainerService trainerService;
	

	@RequestMapping(method = RequestMethod.POST,value = "/trainer/signup")
	  public void postTrainer(@RequestBody TrainerDetails trainer) {
	    trainerService.postTrainer(trainer);
	    
	  }
	
	@RequestMapping("/trainer/{userName}")
    public TrainerDetails mentorName(@PathVariable String userName){
        return trainerService.mentorName(userName);
    }
	
	@RequestMapping("/mentor/{id}")
	public String getUserDetails(@PathVariable Integer id) {
		return trainerService.getUserDetails(id);
	}
	
	@RequestMapping("/trainer/all")
	public List<TrainerDetails> getMentor()
	{
		return trainerService.getTrainees();
	}
	
	@RequestMapping(method=RequestMethod.POST,value="/trainer/delete/{id}")
	public void deleteMentor(@PathVariable Long id)
	{
		trainerService.deleteMentor(id);
	}
}
