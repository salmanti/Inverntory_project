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


import com.spring.supplychainfinal.entity.Warehouse;
import com.spring.supplychainfinal.repository.WarehouseRepository;
import com.spring.supplychainfinal.service.WarehouseService;

@RestController
@RequestMapping("/warehouse")
@CrossOrigin(origins="http://localhost:4200", allowedHeaders = "*")
public class WarehouseController {

	@Autowired
	WarehouseService warService;
	
	@Autowired
	WarehouseRepository wareRepo;
	
	
	@PostMapping("/save")
	public Warehouse save (@RequestBody Warehouse product) {
		System.out.println(product.getName());
		
		return warService.save(product);
	}
	
	@GetMapping("/get/{id}")
	public Warehouse getById (@PathVariable Long id) {
		
		return warService.getById(id);
	}
	
	@PutMapping("/update")
	public Warehouse update (@RequestBody Warehouse product) {
		
		return warService.update(product);
	}
	
	@DeleteMapping("/delete/{id}")    //browser theke del korte gele @GetMapping dite hobe 
	public String delete (@PathVariable Long id) {
		
		
		 warService.delete(id);
//		 wareRepo.deleteById(id);
		 return null;
	}
	
	@GetMapping("/getAll")
	public List<Warehouse> modelget () {
		
		return warService.getAll();
	}
	
	
}
