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

import com.spring.supplychainfinal.entity.Product;
import com.spring.supplychainfinal.repository.ProductRepository;
import com.spring.supplychainfinal.service.ProductService;



@RestController
@RequestMapping("/product")
@CrossOrigin(origins="http://localhost:4200", allowedHeaders="*")
public class ProductController {


	@Autowired
	ProductService productService;
	
	@Autowired
	ProductRepository proRepo;
	
	
	@PostMapping("/save")
	public Product save (@RequestBody Product product) {

		System.out.println(product.getProduct_name());

		return productService.save(product);
	}
	
	
	@GetMapping("/get/{id}")
	public Product getById (@PathVariable Long id) {
		
		return productService.getById(id);
	}
	
	@PutMapping("/update")
	public Product update (@RequestBody Product product) {
		
		return productService.update(product);
	}
	
	@PutMapping("/updateStock/{id}")
	public Product updateStock (@PathVariable Long id, @RequestParam(value = "quantity") long quantity ,@RequestParam(value="newtotal") long newtotal) {
		proRepo.updateStock(quantity,newtotal, id);
		
		return productService.getById(id);
	}
	
	
	@DeleteMapping("/delete/{id}")    //browser theke del korte gele @GetMapping dite hobe 
	public String delete (@PathVariable Long id) {
		 productService.delete(id);
		
		return null;
	}
	
	
	@GetMapping("/getAll")
	public List<Product> modelget () {
		
		return productService.getAll();
	}
	
	@GetMapping("/getNextValue")
	public long nextValues () {
		
		return proRepo.getNextSeriesId();
	}

	
	@GetMapping("/getproduct/{name}")
	public List<Product> productgetByBrand ( @PathVariable String name) {
		
		return proRepo.brandlist(name);
	}
	
	
	
}
