package com.spring.supplychainfinal.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.spring.supplychainfinal.dto.Login;
import com.spring.supplychainfinal.entity.Distributor;
import com.spring.supplychainfinal.entity.LoginRegistration;
import com.spring.supplychainfinal.repository.DistributorRepository;
import com.spring.supplychainfinal.repository.LoginRegRepository;

@RestController
@RequestMapping("/login")
@CrossOrigin(origins="http://localhost:4200", allowedHeaders = "*")
public class LoginController {

	@Autowired
	LoginRegRepository loginRegRepo;
	
	@Autowired
	DistributorRepository disRepo;
	
	
	@PostMapping("/login")
	public LoginRegistration login (@RequestBody Login login ) {
		
		return loginRegRepo.login(login.getName(), login.getPassword2());
		
	}
	
	
	@PostMapping("/loginDis")
	public Distributor logindistributor (@RequestBody Login login ) {
		
		return disRepo.login(login.getName(), login.getPassword2());
		
	}
	
	
	
	
	
}
