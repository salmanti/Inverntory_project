package com.spring.supplychainfinal.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.spring.supplychainfinal.dto.ResponseMessege;
import com.spring.supplychainfinal.entity.Distributor;
import com.spring.supplychainfinal.entity.Warehouse;
import com.spring.supplychainfinal.service.DistributorService;

@RestController
@RequestMapping("/distributor")
@CrossOrigin(origins="http://localhost:4200", allowedHeaders="*")
public class DistributorController {

	@Autowired
	DistributorService disService;
	
	
	
	

	@PostMapping("/save")
	public Distributor save (@RequestBody Distributor dis) {
		
		
		return disService.save(dis);
	}
	
	@GetMapping("/get/{id}")
	public Distributor getById (@PathVariable Long id) {
		
		return disService.getById(id);
	}
	
	@PutMapping("/update")
	public Distributor update (@RequestBody Distributor dis) {
		
		return disService.update(dis);
	}
	
	
	
	@DeleteMapping("/delete/{id}")    //browser theke del korte gele @GetMapping dite hobe 
	public ResponseEntity<ResponseMessege> delete (@PathVariable Long id) {
		
		String messege = " ";
		
		disService.delete(id);
		
		messege ="SuccessFully deleted";
		return ResponseEntity.status(HttpStatus.OK).body(new ResponseMessege(messege));
	}
	
	
	
	
	@GetMapping("/getAll")
	public List<Distributor> modelget () {
		
		return disService.getAll();
	}
	
	
	
}
