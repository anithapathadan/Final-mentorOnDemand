package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import com.example.demo.pojo.TrainingDetails;

public interface TrainingRepository extends CrudRepository<TrainingDetails, Long> {
	@Query(value="select * from training_details c where c.user_id = ?1 and c.status=?2",nativeQuery = true)
    List<TrainingDetails> searchUserCourse(Integer id,String status);

    @Query(value="select * from training_details c where c.mentor_id = ?1 and c.status=?2",nativeQuery = true)
    List<TrainingDetails> searchMentorCourse(Integer id,String status);
    
    @Query(value="select * from training_details c where c.mentor_id = ?1 and c.status=?2",nativeQuery = true)
    List<TrainingDetails> searchUserPayment(Integer mentorId,String status);
}

