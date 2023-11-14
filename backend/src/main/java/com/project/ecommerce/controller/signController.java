package com.project.ecommerce.controller;

import java.util.List;


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
import com.project.ecommerce.model.signModel;
import com.project.ecommerce.service.signService;
@CrossOrigin("*")
@RestController
public class signController {
	@Autowired
	private signService ss;
	@GetMapping("/getsignup")
	public List<signModel> getdet()
	{
		return ss.getData();
	}
	@PostMapping("/savesignup")
	public String savedata(@RequestBody signModel se)
	{
		String username = se.getUsername();
		String email = se.getEmail();
		boolean checkEmail = ss.signupemail(email);
		boolean checkUsername = ss.signupuser(username);
		if(!checkEmail && !checkUsername)
		{
			ss.postData(se);
			return "signup successfull";
		}
		else
		{
			if(checkEmail)
				return " Email already exist";
			else
				return " Username already exist";
		}
	}
	@PutMapping("/updatesignup")
	public String updatedata(@RequestParam int id ,@RequestBody signModel se)
	{
		boolean checkEmail = ss.signupemail(se.getEmail());
		boolean checkUsername = ss.signupuser(se.getUsername());
		if(!checkEmail && !checkUsername)
		{
			ss.updateData(se);
			return " update successfull";
		}
		else if(checkEmail && checkUsername)
		{
			return "Email & Username already exist";
		}
		else
		{
			if(checkEmail)
				return " Email already exist";
			else
				return " Username already exist";
		}
		
	}
	@DeleteMapping("/deletesignup/{id}")
	public String deletedata(@PathVariable int id)
	{
		ss.deleteData(id);
		return "id: "+id+ "detail has been delete";
	}
	@PutMapping("/updateuser/{id}")
	public void updateLibraryData(@RequestBody signModel cm,@PathVariable int id) {
		cm.setId(id);
		ss.updateData(cm);
	}
	

}
