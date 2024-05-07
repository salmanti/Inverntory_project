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


import com.spring.supplychainfinal.entity.Sale;
import com.spring.supplychainfinal.repository.SaleRepository;
import com.spring.supplychainfinal.service.SaleService;

@RestController
@RequestMapping("/sale")
@CrossOrigin(origins="http://localhost:4200", allowedHeaders="*")
public class SaleController {
	
	@Autowired
	SaleService saleService;
	
	
	@Autowired
	SaleRepository saleRepo;


	@PostMapping("/save")
	public Sale save (@RequestBody Sale product) {
		
		
		return saleService.save(product);
	}
	
	@GetMapping("/get/{id}")
	public Sale getById (@PathVariable Long id) {
		
		return saleService.getById(id);
	}
	
	@PutMapping("/update")
	public Sale update (@RequestBody Sale product) {
		
		return saleService.update(product);
	}
	
	@PutMapping("/updateStatus/{id}")
	public Sale updateStatus (@PathVariable Long id, @RequestParam (value = "status")String status) {
		
		saleRepo.updateStatus(status, id);
		return null;
		
	}
	
	
	@DeleteMapping("/delete/{id}")    //browser theke del korte gele @GetMapping dite hobe 
	public String delete (@PathVariable Long id) {
		
		
		saleService.delete(id);
//		 wareRepo.deleteById(id);
		 return null;
	}
	
	@GetMapping("/getAll")
	public List<Sale> modelget () {
		
		return saleService.getAll();
	}
	
	
	@GetMapping("/getAllByStatus/{status}")
	public List<Sale> getAllByStatus (@PathVariable String status) {
		
		return saleRepo.salepending(status);
	}
	
	
	@PostMapping("/saveAll")
	public List<Sale>  saveAll (@RequestBody  List<Sale> listofProducts) {
		
		
		
		
		return saleService.listinsert(listofProducts);
	}

}
