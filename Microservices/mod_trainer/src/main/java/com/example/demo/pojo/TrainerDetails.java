
package com.example.demo.pojo;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="mentor_details")
public class TrainerDetails {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column(name="mentor_id")
	private Integer mentorId;
	
	@Column(name="mentor_name")
	private String mentorName;
	
	@Column(name="mentor_qual")
	private String mentorQual;
	
	@Column(name="alma_mater")
	private String almaMater;
	
	@Column(name="work_timings")
	private String workTimings;
	
	@Column(name="mentor_email")
	private String mentorEmail;
	
	@Column(name="mentor_years_exp")
	private Integer mentorYearsExp;
	
	@Column(name="mentor_password")
	private String password;
	
	@Column(name="no_of_trainings")
	private Integer trainings;
	
	@Column(name="rating")
	private float rating;

	public TrainerDetails(String mentorName, String mentorQual, String almaMater, String workTimings,
			String mentorEmail, Integer mentorYearsExp, String password, Integer trainings, float rating) {
		super();
		this.mentorName = mentorName;
		this.mentorQual = mentorQual;
		this.almaMater = almaMater;
		this.workTimings = workTimings;
		this.mentorEmail = mentorEmail;
		this.mentorYearsExp = mentorYearsExp;
		this.password = password;
		this.trainings = trainings;
		this.rating = rating;
	}

	public TrainerDetails() {
		super();
	}

	public Integer getMentorId() {
		return mentorId;
	}

	public String getMentorName() {
		return mentorName;
	}

	public void setMentorName(String mentorName) {
		this.mentorName = mentorName;
	}

	public String getMentorQual() {
		return mentorQual;
	}

	public void setMentorQual(String mentorQual) {
		this.mentorQual = mentorQual;
	}

	public String getAlmaMater() {
		return almaMater;
	}

	public void setAlmaMater(String almaMater) {
		this.almaMater = almaMater;
	}

	public String getWorkTimings() {
		return workTimings;
	}

	public void setWorkTimings(String workTimings) {
		this.workTimings = workTimings;
	}

	public String getMentorEmail() {
		return mentorEmail;
	}

	public void setMentorEmail(String mentorEmail) {
		this.mentorEmail = mentorEmail;
	}

	public Integer getMentorYearsExp() {
		return mentorYearsExp;
	}

	public void setMentorYearsExp(Integer mentorYearsExp) {
		this.mentorYearsExp = mentorYearsExp;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Integer getTrainings() {
		return trainings;
	}

	public void setTrainings(Integer trainings) {
		this.trainings = trainings;
	}

	public float getRating() {
		return rating;
	}

	public void setRating(float rating) {
		this.rating = rating;
	}
	
}
