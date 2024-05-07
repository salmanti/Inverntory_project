package com.spring.supplychainfinal.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.supplychainfinal.entity.Product;
import com.spring.supplychainfinal.repository.ProductRepository;




@Service
public class ProductService {
	

	@Autowired
	ProductRepository productRepository;
	
	
	
	public Product save( Product product) {
		
		if(!product.equals(null)) {
			return productRepository.save(product);
		}
		return null;
	}
	
	public Product getById(Long id) {
		Optional<Product> op = productRepository.findById(id);
		
		if(op.isPresent()) {
			return op.get();
		}
		
		return null;
	}
	
	public List<Product> getAll(){
		return productRepository.findAll();
	}
	
	public String delete (Long id) {
		Optional<Product> op = productRepository.findById(id);
		if(op.isPresent()) {
			productRepository.delete(op.get());
			return null;	
		}
		return null;
		
	}
public Product update( Product product) {
		
		if(!product.equals(null)) {
			return productRepository.save(product);
		}
		return null;
	}
	

public List<Product>  listinsert( List<Product> listofProducts) {
	
	return productRepository.saveAll(listofProducts);
	
}


}
