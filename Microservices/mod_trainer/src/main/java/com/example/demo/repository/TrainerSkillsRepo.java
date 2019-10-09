package com.example.demo.repository;

//import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import com.example.demo.pojo.TrainerSkills;

public interface TrainerSkillsRepo extends CrudRepository<TrainerSkills, Long>{
}
