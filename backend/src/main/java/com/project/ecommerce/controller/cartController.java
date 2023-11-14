package com.project.ecommerce.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.project.ecommerce.model.cartModel;
import com.project.ecommerce.service.cartService;

@RestController
@CrossOrigin("*")
public class cartController {
	
	@Autowired
	private cartService service1;
	
	@GetMapping("/getcart")
	public List<cartModel> getDetails(){
		return service1.getcartDetails();
		
	}
	
	@PostMapping("/savecart")
	public void saveDetails(@RequestBody cartModel cm) {
		service1.savecartDetails(cm);
	}
	@PutMapping("/updatecart/{id}")
	public void updateLibraryData(@RequestBody cartModel cm,@PathVariable int id) {
		cm.setId(id);
		service1.updatacartDetails(cm);
	}
	
	@DeleteMapping("/deletecart/{id}")
	public String deleteDetails(@PathVariable int id) {
		service1.deletecartDetails(id);
			return "deleted";
	}
	
	@GetMapping("/getcartdata/{id}")
	public Optional<cartModel> getData1(@PathVariable int id){
		return service1.getcartData(id);
	}
	
	@GetMapping("/extra/{id}/{productname}")
	public List<cartModel> getData2(@PathVariable int id,@PathVariable String productname){
		return service1.getDetails(id,productname);
	}

}
