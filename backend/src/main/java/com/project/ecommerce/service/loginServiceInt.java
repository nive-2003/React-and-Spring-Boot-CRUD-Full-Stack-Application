package com.project.ecommerce.service;


import java.util.List;
import java.util.Optional;

import com.project.ecommerce.model.detailsModel;
import com.project.ecommerce.model.signModel;


public interface loginServiceInt {
	public List<signModel> getLoginDetails();
	public void saveDetailsDetails(signModel dm);
	public List<signModel> findByUsernameAndPassword(String user,String pass);
	public List<signModel> findByEmailAndPassword(String user,String pass);
	public Optional<signModel> getByid(int id);

}
