package com.project.ecommerce.service;

import java.util.List;
import java.util.Optional;

import com.project.ecommerce.model.cartModel;



public interface cartServiceInt {
	public List<cartModel> getcartDetails();
	public void savecartDetails(cartModel cm);
	public void updatacartDetails(cartModel cm);
	public void deletecartDetails(int id);
	public Optional<cartModel> getcartData(int id);
	public List<cartModel> getDetails(int id,String productname);


}
