package com.project.ecommerce.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.ecommerce.model.detailsModel;
import com.project.ecommerce.model.signModel;


public interface loginRepo extends JpaRepository<signModel, Integer> {
	
	public List<signModel> getByid(int id);
	public List<signModel> findByUsernameAndPassword(String username,String password);
	public List<signModel> findByEmailAndPassword(String email,String password);
}
