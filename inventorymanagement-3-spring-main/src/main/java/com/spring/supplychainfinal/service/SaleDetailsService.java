package com.spring.supplychainfinal.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.supplychainfinal.entity.Sale_Details;

import com.spring.supplychainfinal.repository.SaleDetailsRepository;

@Service
public class SaleDetailsService {

	
	@Autowired
	SaleDetailsRepository saleDetailRepo;
	
	
	
	
public Sale_Details save( Sale_Details supp) {
		
		if(!supp.equals(null)) {
			return saleDetailRepo.save(supp);
		}
		return null;
	}

public Sale_Details getById(Long id) {
	Optional<Sale_Details> op = saleDetailRepo.findById(id);
	
	if(op.isPresent()) {
		return op.get();
	}
	
	return null;
}

public List<Sale_Details> getAll(){
	return saleDetailRepo.findAll();
}

public List<Sale_Details> getAllById( Long id){
	return saleDetailRepo.salelist(id)  ;
}

public Sale_Details delete (Long id) {
	
	Optional<Sale_Details> op = saleDetailRepo.findById(id);
	if(op.isPresent()) {
		saleDetailRepo.delete(op.get());
		return null;
		
		
		
	}
	return null;
	
}


public Sale_Details update( Sale_Details product) {
	
	if(!product.equals(null)) {
		return saleDetailRepo.save(product);
	}
	return null;
}

public List<Sale_Details>  listinsert( List<Sale_Details> listofSupplier) {
	
	return saleDetailRepo.saveAll(listofSupplier);
	
}
	
	
	
}
