package com.example.demo.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import com.example.demo.pojo.TrainerDetails;

public interface TrainerRepo extends CrudRepository<TrainerDetails, Long>{

	@Query(value="select * from mentor_details u where u.mentor_email = ?1 ",nativeQuery = true)
    TrainerDetails searchUserName(String userName);
	
	@Query(value="select mentor_name from mentor_details u where u.mentor_id = ?1 ",nativeQuery = true)
    String searchNameById(Integer id);

}
