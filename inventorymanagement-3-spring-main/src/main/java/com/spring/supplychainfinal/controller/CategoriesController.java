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


import com.spring.supplychainfinal.entity.Categories;

import com.spring.supplychainfinal.service.CategoriesService;

@RestController
@RequestMapping("/categories")
@CrossOrigin(origins="http://localhost:4200", allowedHeaders = "*")
public class CategoriesController {

	@Autowired
	CategoriesService catService;
	

	@PostMapping("/save")
	public Categories save (@RequestBody Categories cat) {
		
		
		return catService.save(cat);
	}
	
	@GetMapping("/get/{id}")
	public Categories getById (@PathVariable Long id) {
		
		return catService.getById(id);
	}
	
	@PutMapping("/update")
	public Categories update (@RequestBody Categories cat) {
		
		return catService.update(cat);
	}
	
	@DeleteMapping("/delete/{id}")    //browser theke del korte gele @GetMapping dite hobe 
	public String delete (@PathVariable Long id) {
		
		
		catService.delete(id);
//		 wareRepo.deleteById(id);
		 return null;
	}
	
	@GetMapping("/getAll")
	public List<Categories> modelget () {
		
		return catService.getAll();
	}
	
	
	
}
