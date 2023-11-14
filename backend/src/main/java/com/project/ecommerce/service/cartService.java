package com.project.ecommerce.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.ecommerce.model.cartModel;
import com.project.ecommerce.repo.cartRepo;

@Service
public class cartService implements cartServiceInt {

     @Autowired
     private cartRepo ri;
     
    @Override
	public List<cartModel> getcartDetails(){
		return ri.findAll();
	}
	@Override
	public void savecartDetails(cartModel cm) {
		ri.save(cm);
	}
	@Override
	public void updatacartDetails(cartModel cm) {
		// TODO Auto-generated method stub
		ri.save(cm);
		
	}
	@Override
	public void deletecartDetails(int id) {
		// TODO Auto-generated method stub
		ri.deleteById(id);
		
	}
	@Override
	public Optional<cartModel> getcartData(int id) {
		// TODO Auto-generated method stub
		return ri.findById(id);
	}
//	
//	public List<cartModel> getDetails(int id,String productname)
//	{
//		return ri.findByIdAndProductName(id, productname);
//	}
	@Override
	public List<cartModel> getDetails(int id, String productname) {
		// TODO Auto-generated method stub
		return ri.findByIdAndProductname(id, productname);
//		return null;
	}

}
