package com.project.ecommerce.service;

import java.util.List;

import com.project.ecommerce.model.signModel;

public interface signServiceInt {
	public List<signModel> getData();
	public void postData(signModel se);
	public void updateData(signModel se);
	public void deleteData(int id);
	public boolean signupuser(String user);
	public boolean signupemail(String email);
}
