package com.spring.supplychainfinal.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.supplychainfinal.entity.Supplier;

import com.spring.supplychainfinal.repository.SupplierRepository;

@Service
public class SupplierService {
	
	@Autowired
	SupplierRepository suppRepo;
	
	
	
public Supplier save( Supplier supp) {
		
		if(!supp.equals(null)) {
			return suppRepo.save(supp);
		}
		return null;
	}

public Supplier getById(Long id) {
	Optional<Supplier> op = suppRepo.findById(id);
	
	if(op.isPresent()) {
		return op.get();
	}
	
	return null;
}

public List<Supplier> getAll(){
	return suppRepo.findAll();
}

public Supplier delete (Long id) {
	
	Optional<Supplier> op = suppRepo.findById(id);
	if(op.isPresent()) {
		suppRepo.delete(op.get());
		return null;
		
		
		
	}
	return null;
	
}


public Supplier update( Supplier product) {
	
	if(!product.equals(null)) {
		return suppRepo.save(product);
	}
	return null;
}

public List<Supplier>  listinsert( List<Supplier> listofSupplier) {
	
	return suppRepo.saveAll(listofSupplier);
	
}

}
