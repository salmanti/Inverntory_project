package com.spring.supplychainfinal.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.supplychainfinal.entity.Brand;

import com.spring.supplychainfinal.repository.BrandRepository;

@Service
public class BrandService {
	
	@Autowired
	BrandRepository brandrepo;
	
	
public Brand save( Brand product) {
		
		if(!product.equals(null)) {
			return brandrepo.save(product);
		}
		return null;
	}

public Brand getById(Long id) {
	Optional<Brand> op = brandrepo.findById(id);
	
	if(op.isPresent()) {
		return op.get();
	}
	
	return null;
}

public List<Brand> getAll(){
	return brandrepo.findAll();
}

public Brand delete (Long id) {
	
	Optional<Brand> op = brandrepo.findById(id);
	if(op.isPresent()) {
		brandrepo.delete(op.get());
		return null;
		
		
		
	}
	return null;
	
}


public Brand update( Brand product) {
	
	if(!product.equals(null)) {
		return brandrepo.save(product);
	}
	return null;
}

public List<Brand>  listinsert( List<Brand> listofProducts) {
	
	return brandrepo.saveAll(listofProducts);
	
}
	
	
	

}
