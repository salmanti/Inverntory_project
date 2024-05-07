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

import com.spring.supplychainfinal.entity.Brand;

import com.spring.supplychainfinal.service.BrandService;

@RestController
@RequestMapping("/brand")
@CrossOrigin(origins="http://localhost:4200", allowedHeaders = "*")
public class BrandController {

	@Autowired
	BrandService brservice;
	

	@PostMapping("/save")
	public Brand save (@RequestBody Brand product) {
		
		
		return brservice.save(product);
	}
	
	@GetMapping("/get/{id}")
	public Brand getById (@PathVariable Long id) {
		
		return brservice.getById(id);
	}
	
	@PutMapping("/update")
	public Brand update (@RequestBody Brand product) {
		
		return brservice.update(product);
	}
	
	@DeleteMapping("/delete/{id}")    //browser theke del korte gele @GetMapping dite hobe 
	public String delete (@PathVariable Long id) {
		
		
		brservice.delete(id);
//		 wareRepo.deleteById(id);
		 return null;
	}
	
	@GetMapping("/getAll")
	public List<Brand> modelget () {
		
		return brservice.getAll();
	}
}
