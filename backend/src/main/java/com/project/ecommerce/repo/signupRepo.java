package com.project.ecommerce.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.ecommerce.model.signModel;

public interface signupRepo extends JpaRepository<signModel, Integer> {
	public boolean existsByUsername(String user);
	public boolean existsByEmail(String email);
	public signModel findByUsername(String username);

}
