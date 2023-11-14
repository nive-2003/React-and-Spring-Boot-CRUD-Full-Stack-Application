package com.project.ecommerce.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.ecommerce.model.cartModel;

public interface cartRepo extends JpaRepository<cartModel, Integer> {

	public List<cartModel> findByid(int id);
//	public List<cartModel> findByIdAndProductName(int id,String productname);

	public List<cartModel> findByIdAndProductname(int id, String productname);

}
