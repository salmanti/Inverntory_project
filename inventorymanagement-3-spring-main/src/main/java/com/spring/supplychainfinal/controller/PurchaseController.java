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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


import com.spring.supplychainfinal.entity.Purchase;
import com.spring.supplychainfinal.repository.PurchaseRepository;
import com.spring.supplychainfinal.service.PurchaseService;




@RestController
@RequestMapping("/purchase")
@CrossOrigin(origins="http://localhost:4200", allowedHeaders = "*")
public class PurchaseController {

	
	@Autowired
	PurchaseService purchaseService;
	
	@Autowired
	PurchaseRepository purRepo;
	
	

	@PostMapping("/save")
	public Purchase save (@RequestBody Purchase purchase) {
		
		
		return purchaseService.save(purchase);
	}
	
	@PostMapping("/saveAll")
	public List<Purchase>  saveAll (@RequestBody  List<Purchase> listofProducts) {
		
		
		
		
		return purchaseService.listinsert(listofProducts);
	}
	
	
	
	@GetMapping("/get/{id}")
	public Purchase getById (@PathVariable Long id) {
		
		return purchaseService.getById(id);
	}
	
	@PutMapping("/update")
	public Purchase update (@RequestBody Purchase product) {
		
		return purchaseService.update(product);
	}
	
	@PutMapping("/updateStatus/{id}")
	public Purchase updateStatus (@PathVariable Long id, @RequestParam (value = "status")String status) {
		
		purRepo.updateStatus(status, id);
		return null;
		
	}
	
	
	
	@DeleteMapping("/delete/{id}")    //browser theke del korte gele @GetMapping dite hobe 
	public String delete (@PathVariable Long id) {
		
		
		purchaseService.delete(id);
//		 wareRepo.deleteById(id);
		 return null;
	}
	
	@GetMapping("/getAll")
	public List<Purchase> modelget () {
		
		return purchaseService.getAll();
	}
	
	@GetMapping("/status/{status}")
	public List<Purchase> pendingmodelget (@PathVariable String status) {
		
		return purRepo.pendinglist( status);
	}
	
	
	
}
