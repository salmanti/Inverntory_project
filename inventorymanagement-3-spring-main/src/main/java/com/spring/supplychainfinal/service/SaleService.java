package com.spring.supplychainfinal.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.supplychainfinal.entity.Sale;


import com.spring.supplychainfinal.repository.SaleRepository;

@Service
public class SaleService {
	
	@Autowired
	SaleRepository saleRepo;
	
	
	
public Sale save( Sale supp) {
		
		if(!supp.equals(null)) {
			return saleRepo.save(supp);
		}
		return null;
	}

public Sale getById(Long id) {
	Optional<Sale> op = saleRepo.findById(id);
	
	if(op.isPresent()) {
		return op.get();
	}
	
	return null;
}

public List<Sale> getAll(){
	return saleRepo.findAll();
}

public Sale delete (Long id) {
	
	Optional<Sale> op = saleRepo.findById(id);
	if(op.isPresent()) {
		saleRepo.delete(op.get());
		return null;
		
		
		
	}
	return null;
	
}


public Sale update( Sale product) {
	
	if(!product.equals(null)) {
		return saleRepo.save(product);
	}
	return null;
}

public List<Sale>  listinsert( List<Sale> listofSupplier) {
	
	return saleRepo.saveAll(listofSupplier);
	
}

}
