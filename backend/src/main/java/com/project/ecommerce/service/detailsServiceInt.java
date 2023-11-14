package com.project.ecommerce.service;

import java.util.List;
import java.util.Optional;

import com.project.ecommerce.model.detailsModel;


public interface detailsServiceInt {

	public List<detailsModel> getDetailsDetails();
	public void saveDetailsDetails(detailsModel dm);
	public void updataDetailsDetails(detailsModel dm);
	public void deleteDetailsDetails(int id);
	public Optional<detailsModel> getByid(int id);
	public List<detailsModel> getbyCity(String city);
}
