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

import com.spring.supplychainfinal.entity.DistributorProducts;
import com.spring.supplychainfinal.repository.DistributorProductsRepository;
import com.spring.supplychainfinal.service.DistributorProductsService;

@RestController
@RequestMapping ("/disproducts")
@CrossOrigin(origins="http://localhost:4200", allowCredentials = "true")
public class DistributorProductsController {
	
	
	@Autowired
	DistributorProductsService disProService;
	
	@Autowired
	DistributorProductsRepository disProRepo;
	

	@PostMapping("/save")
	public DistributorProducts save (@RequestBody DistributorProducts product) {
		
		
		return disProService.save(product);
	}
	

	@PostMapping("/saveByParam")
	
	public DistributorProducts saveByPara (@RequestParam(value = "quan") long quan, @RequestParam(value = "pid") long pid,@RequestParam(value = "did" ) long did,
			@RequestParam(value = "brand" ) String brand,@RequestParam(value = "pname" ) String pname,@RequestParam(value = "cate" ) String cate, @RequestParam(value = "retail") long retail,
			@RequestParam(value = "mrp") long mrp) {
		DistributorProducts distributorProducts = new DistributorProducts();
		distributorProducts.setCurrent_quantity(quan);
		distributorProducts.setDistributor_id(did);
		distributorProducts.setProduct_id(pid);
		distributorProducts.setProduct_brand(brand);
		distributorProducts.setProduct_name(pname);
		distributorProducts.setProduct_category(cate);
		distributorProducts.setRetail_rate(retail);
		distributorProducts.setMrp(mrp);

		return disProRepo.save(distributorProducts);
	}
	
	
	@GetMapping("/get/{id}")
	public DistributorProducts getById (@PathVariable Long id) {
		
		return disProService.getById(id);
	}
	
	@PutMapping("/update")
	public DistributorProducts update (@RequestBody DistributorProducts product) {
		
		return disProService.update(product);
	}
	
	
	@PutMapping("/updateStock")
	public DistributorProducts updateStock (@RequestParam(value = "quan") long quan, @RequestParam(value = "pid") long pid,@RequestParam(value = "did") long did) {
		
		return disProService.updateStock(quan, pid , did);
	}
	
	
	
	@DeleteMapping("/delete/{id}")    //browser theke del korte gele @GetMapping dite hobe 
	public String delete (@PathVariable Long id) {
		
		
		disProService.delete(id);
//		 wareRepo.deleteById(id);
		 return null;
	}
	
	@GetMapping("/getAll")
	public List<DistributorProducts> modelget () {
		
		return disProService.getAll();
	}
	
	
	
	
	@GetMapping("/getAllById/{id}")
	public List<DistributorProducts> getAllByDisId (@PathVariable Long id) {
		
	return disProService.getAllById(id);
	
	}
	
	@GetMapping("/getAllByBrandDid")
	public List<DistributorProducts> getAllByBrandDis (@RequestParam(value = "brand") String brand,@RequestParam(value = "did") long did) {
		
	return disProService.getAllByBrandDid(brand, did);
	
	}
	

	@GetMapping("/getAllByPidDid")
	public DistributorProducts getAllByPidDid (@RequestParam(value = "pid") long pid,@RequestParam(value = "did") long did) {
		
	return disProService.getByDidPid( pid , did);
	
	}
	
	
	
	@PostMapping("/saveAll")
	public List<DistributorProducts>  saveAll (@RequestBody  List<DistributorProducts> listofProducts) {
		
		
		
		
		return disProService.listinsert(listofProducts);
	}

}
