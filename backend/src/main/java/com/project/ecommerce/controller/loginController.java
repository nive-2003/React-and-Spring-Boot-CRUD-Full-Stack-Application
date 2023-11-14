package com.project.ecommerce.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.project.ecommerce.model.detailsModel;
import com.project.ecommerce.model.signModel;
import com.project.ecommerce.service.loginService;


@RestController
@CrossOrigin("*")
public class loginController {
	
	@Autowired
	private loginService service1;
	

	@GetMapping("/getlogin")
	public List<signModel> getLoginDetails(){
		return service1.getLoginDetails();
		
	}
	@GetMapping("/loginbyusername/{username}/{password}")
	public String getbyusername(@PathVariable String username,@PathVariable String password)
	{
		List<signModel>obj = new ArrayList<>();
		obj=service1.findByUsernameAndPassword(username, password);
		if(obj.isEmpty())
		{
			return "login failed";
		}
		else
		{
			return "login sucessfully";
		}
	}
	
	@GetMapping("/getloginbyid/{id}")
	public Optional<signModel> getid(@PathVariable int id){
		return service1.getByid(id);
	}
	@PostMapping("/savelogin")
	public void saveDetailsDetails(@RequestBody signModel dm) {
		service1.saveDetailsDetails(dm);
	}
}

