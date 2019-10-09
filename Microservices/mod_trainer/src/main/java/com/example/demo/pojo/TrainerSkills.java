package com.example.demo.pojo;
import javax.persistence.*;

@Entity
@Table(name = "trainer_skills")
public class TrainerSkills {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column(name="skill_id")
	private Integer skillId;
	
	@Column(name="mentor_id")
	private Integer mentorId;

	@Column(name="skill_name")
	private String skillName;

	public Integer getSkillId() {
		return skillId;
	}

	public void setSkillId(Integer skillId) {
		this.skillId = skillId;
	}

	public Integer getMentorId() {
		return mentorId;
	}

	public void setMentorId(Integer mentorId) {
		this.mentorId = mentorId;
	}

	public String getSkillName() {
		return skillName;
	}

	public void setSkillName(String skillName) {
		this.skillName = skillName;
	}

	public TrainerSkills(Integer mentorId, String skillName) {
		super();
		this.mentorId = mentorId;
		this.skillName = skillName;
	}

	public TrainerSkills() {
		super();
	}
	
	
}

