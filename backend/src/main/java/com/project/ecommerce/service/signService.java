package com.project.ecommerce.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.ecommerce.model.signModel;
import com.project.ecommerce.repo.signupRepo;
@Service
public class signService implements signServiceInt {
	@Autowired
	private signupRepo sri;
	@Override
	public List<signModel> getData() {
		// TODO Auto-generated method stub
		return sri.findAll();
	}

	@Override
	public void postData(signModel se) {
		// TODO Auto-generated method stub
		sri.save(se);

	}

	@Override
	public void updateData(signModel se) {
		// TODO Auto-generated method stub
		 sri.save(se);
	}

	@Override
	public void deleteData(int id) {
		// TODO Auto-generated method stub
		sri.deleteById(id);
	}

	@Override
	public boolean signupuser(String user) {
		// TODO Auto-generated method stub
		return sri.existsByUsername(user);
	}

	@Override
	public boolean signupemail(String email) {
		// TODO Auto-generated method stub
		return sri.existsByEmail(email);
	}

}
