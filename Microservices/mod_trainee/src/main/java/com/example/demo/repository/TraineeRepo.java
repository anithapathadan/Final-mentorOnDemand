package com.example.demo.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.example.demo.pojo.TraineeDetails;
public interface TraineeRepo extends CrudRepository<TraineeDetails, Long> {
	@Query(value="select * from user_details u where u.user_email = ?1 ",nativeQuery = true)
     TraineeDetails searchUserName(String userName);
	
	@Query(value="select user_name from user_details u where u.user_id = ?1 ",nativeQuery = true)
    String searchNameById(Integer id);

	}
