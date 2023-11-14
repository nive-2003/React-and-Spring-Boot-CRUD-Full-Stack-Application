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
import org.springframework.web.bind.annotation.RestController;

import com.project.ecommerce.model.detailsModel;
import com.project.ecommerce.service.detailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


@RestController
@CrossOrigin("*")
public class detailsController{
	
	
		
		@Autowired
		private detailsService service1;
	
		@GetMapping("/getdetails")
		public List<detailsModel> getDetails(){
			return service1. getDetailsDetails();
			
		}
		
		@PostMapping("/savedetails")
		public void saveDetailsDetails(@RequestBody detailsModel dm) {
			service1.saveDetailsDetails(dm);
		}
		@PutMapping("/updatedetails/{id}")
		public void updateLibraryData(@RequestBody detailsModel dm,@PathVariable int id) {
			dm.setId(id);
			service1.updataDetailsDetails(dm);
		}
		
		@DeleteMapping("/deletedetails/{id}")
		public void deleteDetails(@PathVariable int id) {
			service1.deleteDetailsDetails(id);
		}
		
		@GetMapping("/getdetailsbyid/{id}")
		public Optional<detailsModel> getid(@PathVariable int id){
			return service1.getByid(id);
		}
		
		
		
		@GetMapping("/pagingAndSorting/{pageNumber}/{pageSize}")
		public Page<detailsModel> detailsPagination(@PathVariable Integer pageNumber,@PathVariable Integer pageSize){
//			return service1.getDetailsPagination(pageNumber,pageSize);
			return service1.getDetailsPagination(pageNumber, pageSize);
		}
		
		@GetMapping(value = "/getbyname/{city}")
		private ResponseEntity<Object> getbyname(@PathVariable String city) {
			List<detailsModel> detailsModel = service1.getbyCity(city);
			return new ResponseEntity<>(detailsModel, HttpStatus.OK);
		}
		
	}

