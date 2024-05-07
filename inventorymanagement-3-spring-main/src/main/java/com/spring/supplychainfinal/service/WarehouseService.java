package com.spring.supplychainfinal.service;

import java.io.Console;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.spring.supplychainfinal.entity.Warehouse;
import com.spring.supplychainfinal.repository.WarehouseRepository;

@Service
public class WarehouseService {
	
	@Autowired
	WarehouseRepository warrepo;
	
public Warehouse save( Warehouse product) {
		
		if(!product.equals(null)) {
			return warrepo.save(product);
		}
		return null;
	}

public Warehouse getById(Long id) {
	Optional<Warehouse> op = warrepo.findById(id);
	
	if(op.isPresent()) {
		return op.get();
	}
	
	return null;
}

public List<Warehouse> getAll(){
	return warrepo.findAll();
}

public Warehouse delete (Long id) {
	
	Optional<Warehouse> op = warrepo.findById(id);
	if(op.isPresent()) {
		warrepo.delete(op.get());
		return null;
		
		
		
	}
	return null;
	
}


public Warehouse update( Warehouse product) {
	
	if(!product.equals(null)) {
		return warrepo.save(product);
	}
	return null;
}

public List<Warehouse>  listinsert( List<Warehouse> listofProducts) {
	
	return warrepo.saveAll(listofProducts);
	
}


}
