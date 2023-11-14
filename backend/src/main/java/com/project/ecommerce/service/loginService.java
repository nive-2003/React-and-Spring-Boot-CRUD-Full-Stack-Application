package com.project.ecommerce.service;


import java.util.List;
//import java.util.Optional;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.ecommerce.model.detailsModel;
//import com.project.ecommerce.model.cartModel;
import com.project.ecommerce.model.signModel;
//import com.project.ecommerce.model.signModel;
import com.project.ecommerce.repo.loginRepo;



@Service
public class loginService implements loginServiceInt{
	@Autowired
	private loginRepo lr;
	
	public List<signModel> getLoginDetails(){
		return lr.findAll();
	}
	
	@Override
	public List<signModel> findByUsernameAndPassword(String user, String pass) {
		// TODO Auto-generated method stub
		return lr.findByUsernameAndPassword(user, pass);
	}

	@Override
	public List<signModel> findByEmailAndPassword(String user, String pass) {
		// TODO Auto-generated method stub
		return lr.findByEmailAndPassword(user, pass);
	}

	@Override
	public Optional<signModel> getByid(int id) {
		// TODO Auto-generated method stub
		return lr.findById(id);
	}
	@Override
	public void saveDetailsDetails(signModel dm) {
		lr.save(dm);
		
	}
}
