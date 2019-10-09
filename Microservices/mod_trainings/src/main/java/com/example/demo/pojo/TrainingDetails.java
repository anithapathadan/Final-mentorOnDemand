package com.example.demo.pojo;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="training_details")
public class TrainingDetails {

	@Id
	@GeneratedValue
	@Column(name="training_id")
	private Integer trainingId;
	
	@Column(name="user_id")
	private Integer userId;
	
	@Column(name="mentor_id")
	private Integer mentorId;
	
	@Column(name="duration")
	private String duration;
	
	@Column(name="end_date")
	private String endDate;
	
	@Column(name="technology")
	private String Technology;
	
	@Column(name="amount")
	private Integer amount;
	
	@Column(name="progress")
	private Integer progress;
	
	@Column(name="status")
	private String status;
	
	public Integer getTrainingId() {
		return trainingId;
	}

	public void setTrainingId(Integer trainingId) {
		this.trainingId = trainingId;
	}

	public Integer getUserId() {
		return userId;
	}

	public void setUserId(Integer userId) {
		this.userId = userId;
	}

	public Integer getMentorId() {
		return mentorId;
	}

	public void setMentorId(Integer mentorId) {
		this.mentorId = mentorId;
	}

	

	public String getDuration() {
		return duration;
	}

	public void setDuration(String duration) {
		this.duration = duration;
	}

	public String getEndDate() {
		return endDate;
	}

	public void setEndDate(String endDate) {
		this.endDate = endDate;
	}

	public String getTechnology() {
		return Technology;
	}

	public void setTechnology(String technology) {
		Technology = technology;
	}

	public Integer getAmount() {
		return amount;
	}

	public void setAmount(Integer amount) {
		this.amount = amount;
	}

	
	public Integer getProgress() {
		return progress;
	}

	public void setProgress(Integer progress) {
		this.progress = progress;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public TrainingDetails() {
		super();
	}

	public TrainingDetails(Integer userId, Integer mentorId, String duration, String endDate, String technology,
			Integer amount, Integer progress, String status) {
		super();
		this.userId = userId;
		this.mentorId = mentorId;
		this.duration = duration;
		this.endDate = endDate;
		Technology = technology;
		this.amount = amount;
		this.progress = progress;
		this.status = status;
	}
	
	
	
}
