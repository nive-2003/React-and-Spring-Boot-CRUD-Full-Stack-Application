package com.project.ecommerce.model;


import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="details")
public class detailsModel {
	@Id
	private int id;
	
	public detailsModel() {
		super();
		
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	private String first_name;
	private String last_name;
	private String streetName;
	private long pincode;
	private String city;
	private long mobileNumber;
	private String dob;
	public String getFirst_name() {
		return first_name;
	}
	public void setFirst_name(String first_name) {
		this.first_name = first_name;
	}
	public String getLast_name() {
		return last_name;
	}
	public void setLast_name(String last_name) {
		this.last_name = last_name;
	}
	public String getStreetName() {
		return streetName;
	}
	public void setStreetName(String streetName) {
		this.streetName = streetName;
	}
	public long getPincode() {
		return pincode;
	}
	public void setPincode(long pincode) {
		this.pincode = pincode;
	}
	
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	
	public long getMobileNumber() {
		return mobileNumber;
	}
	public void setMobileNumber(long mobileNumber) {
		this.mobileNumber = mobileNumber;
	}
	public String getDob() {
		return dob;
	}
	public void setDob(String dob) {
		this.dob = dob;
	}
	public detailsModel(int id,String first_name, String last_name, String streetName, long pincode,
			String city, long mobileNumber,String dob) {
		super();
		this.id=id;
		this.first_name = first_name;
		this.last_name = last_name;
		this.streetName = streetName;
		this.pincode = pincode;
		this.city = city;
		this.mobileNumber = mobileNumber;
		this.dob = dob;
	}
}
