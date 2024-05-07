package com.spring.supplychainfinal.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.spring.supplychainfinal.entity.LoginRegistration;
import com.spring.supplychainfinal.repository.LoginRegRepository;
import com.spring.supplychainfinal.service.LoginRegService;

@RestController
@RequestMapping("/loginregistration")
@CrossOrigin(origins="http://localhost:4200", allowedHeaders = "*")
public class LoginRegController {
	
	@Autowired
	LoginRegService loginRegService;
	
	
	
	
	
	

	@PostMapping("/save")
	public LoginRegistration save (@RequestBody LoginRegistration loginreg) {
		
		
		return loginRegService.save(loginreg);
	}
	
	@GetMapping("/get/{id}")
	public LoginRegistration getById (@PathVariable Long id) {
		
		return loginRegService.getById(id);
	}
	
	@PutMapping("/update")
	public LoginRegistration update (@RequestBody LoginRegistration loginreg) {
		
		return loginRegService.update(loginreg);
	}
	
	@DeleteMapping("/delete/{id}")    //browser theke del korte gele @GetMapping dite hobe 
	public String delete (@PathVariable Long id) {
		
		
		loginRegService.delete(id);
//		 wareRepo.deleteById(id);
		 return null;
	}
	
	@GetMapping("/getAll")
	public List<LoginRegistration> modelget () {
		
		return loginRegService.getAll();
	}
	
	
	
	
	
	

}
