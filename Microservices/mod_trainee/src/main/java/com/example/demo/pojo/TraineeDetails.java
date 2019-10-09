package com.example.demo.pojo;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="user_details")
public class TraineeDetails {
	
	@Id
	@GeneratedValue
	@Column(name="user_id")
	private Integer userId;

	@Column(name="user_name")
	private String userFirstName;
	
	@Column(name="user_email")
	private String userEmail;
	
	@Column(name="user_password")
	private String userPassword;

	public Integer getUserId() {
		return userId;
	}

	public void setUserId(Integer userId) {
		this.userId = userId;
	}

	public String getUserFirstName() {
		return userFirstName;
	}

	public void setUserFirstName(String userFirstName) {
		this.userFirstName = userFirstName;
	}

	public String getUserEmail() {
		return userEmail;
	}

	public void setUserEmail(String userEmail) {
		this.userEmail = userEmail;
	}

	public String getUserPassword() {
		return userPassword;
	}

	public void setUserPassword(String userPassword) {
		this.userPassword = userPassword;
	}

	public TraineeDetails(Integer userId, String userFirstName, String userEmail, String userPassword) {
		super();
		this.userId = userId;
		this.userFirstName = userFirstName;
		this.userEmail = userEmail;
		this.userPassword = userPassword;
	}

	public TraineeDetails() {
		super();
	}
	
	
}
