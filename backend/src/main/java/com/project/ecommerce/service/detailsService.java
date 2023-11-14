package com.project.ecommerce.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.project.ecommerce.model.detailsModel;
import com.project.ecommerce.repo.detailsRepo;

@Service
public class detailsService implements detailsServiceInt {
	@Autowired
	detailsRepo ri;

	public Page<detailsModel> getDetailsPagination(Integer pageNumber,Integer pageSize){
		Sort sort = Sort.by(Sort.Direction.DESC,"pincode");
		Pageable pageable = PageRequest.of(pageNumber,pageSize,sort);
		return ri.findAll(pageable);
	}
	
	public List<detailsModel> getbyCity(String city) 
	{
		return (List<detailsModel>) ri.findByCityContainingIgnoreCase(city);
	}
	public List<detailsModel> getDetailsDetails(){
		return ri.findAll();
	}

	@Override
	public void saveDetailsDetails(detailsModel dm) {
		ri.save(dm);
		
	}

	@Override
	public void updataDetailsDetails(detailsModel dm) {
		// TODO Auto-generated method stub
		ri.save(dm);
		
	}

	@Override
	public void deleteDetailsDetails(int id) {
		// TODO Auto-generated method stub
		ri.deleteById(id);
		
	}

	@Override
	public Optional<detailsModel> getByid(int id) {
		// TODO Auto-generated method stub
		return ri.findById(id);
	}

	


}
