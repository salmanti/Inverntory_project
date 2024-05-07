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


import com.spring.supplychainfinal.entity.Sale_Details;
import com.spring.supplychainfinal.repository.SaleDetailsRepository;
import com.spring.supplychainfinal.service.SaleDetailsService;

@RestController
@RequestMapping("/saleDetails")
@CrossOrigin(origins="http://localhost:4200", allowedHeaders="*")
public class SaleDetailsController {

	@Autowired
	SaleDetailsRepository saleDetailRepo;
	
	@Autowired
	SaleDetailsService saleDetalService;
	
	

	@PostMapping("/save")
	public Sale_Details save (@RequestBody Sale_Details product) {
		
		
		return saleDetalService.save(product);
	}
	
	@GetMapping("/get/{id}")
	public Sale_Details getById (@PathVariable Long id) {
		
		return saleDetalService.getById(id);
	}
	
	@PutMapping("/update")
	public Sale_Details update (@RequestBody Sale_Details product) {
		
		return saleDetalService.update(product);
	}
	
	@DeleteMapping("/delete/{id}")    //browser theke del korte gele @GetMapping dite hobe 
	public String delete (@PathVariable Long id) {
		
		
		saleDetalService.delete(id);
//		 wareRepo.deleteById(id);
		 return null;
	}
	
	@GetMapping("/getAll")
	public List<Sale_Details> modelget () {
		
		return saleDetalService.getAll();
	}
	
	
	
	
	@GetMapping("/getAllById/{id}")
	public List<Sale_Details> getAllById (@PathVariable Long id) {
		
	return saleDetalService.getAllById(id);
	
	}
	
	
	@PostMapping("/saveAll")
	public List<Sale_Details>  saveAll (@RequestBody  List<Sale_Details> listofProducts) {
		
		
		
		
		return saleDetalService.listinsert(listofProducts);
	}
	
	
}
