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

import com.spring.supplychainfinal.entity.Supplier;
import com.spring.supplychainfinal.repository.SupplierRepository;
import com.spring.supplychainfinal.service.SupplierService;

@RestController
@RequestMapping("/supplier")
@CrossOrigin(origins="http://localhost:4200", allowedHeaders = "*")
public class SupplierControler {

	@Autowired
	SupplierService suppService;
	
	@Autowired
	SupplierRepository supprepo;
	
	
	

	@PostMapping("/save")
	public Supplier save (@RequestBody Supplier supplier) {
		
		
		return suppService.save(supplier);
	}
	
	@GetMapping("/get/{id}")
	public Supplier getById (@PathVariable Long id) {
		
		return suppService.getById(id);
	}
	
	
	@GetMapping("/getsupplier/{name}")
	public Supplier getByName (@PathVariable String name) {
		
		return supprepo.supplierdata(name);
	}
	
	@PutMapping("/update")
	public Supplier update (@RequestBody Supplier product) {
		
		return suppService.update(product);
	}
	
	@DeleteMapping("/delete/{id}")    //browser theke del korte gele @GetMapping dite hobe 
	public String delete (@PathVariable Long id) {
		
		
		suppService.delete(id);

		 return null;
	}
	
	@GetMapping("/getAll")
	public List<Supplier> modelget () {
		
		return suppService.getAll();
	}
	
	
}
