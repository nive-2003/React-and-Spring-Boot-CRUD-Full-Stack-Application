package com.project.ecommerce.repo;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.PagingAndSortingRepository;

import com.project.ecommerce.model.detailsModel;

public interface detailsRepo extends JpaRepository<detailsModel,Integer>,PagingAndSortingRepository<detailsModel,Integer> {
	public List<detailsModel> getByid(int id);
	List<detailsModel> findByCityContainingIgnoreCase(String pincode);
	 Page<detailsModel> findAll(Pageable var1);
}
