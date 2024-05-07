package com.spring.supplychainfinal.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.supplychainfinal.entity.Distributor;

import com.spring.supplychainfinal.repository.DistributorRepository;

@Service
public class DistributorService {
	
	@Autowired
	DistributorRepository disrepo;
	
	public Distributor save (Distributor dis ) {
		
		if(!disrepo.equals(null)) {
			return disrepo.save(dis);
		}
		return null;
	}
	
	public Distributor getById(Long id) {
		Optional<Distributor> op = disrepo.findById(id);
		
		if(op.isPresent()) {
			return op.get();
		}
		
		return null;
	}

	public List<Distributor> getAll(){
		return disrepo.findAll();
	}
	
	public String delete (Long id) {
		Optional<Distributor> op = disrepo.findById(id);
		if(op.isPresent()) {
			disrepo.delete(op.get());
			return null;	
		}
		return null;
		
	}
	
public Distributor update( Distributor product) {
		
		if(!product.equals(null)) {
			return disrepo.save(product);
		}
		return null;
	}

public List<Distributor>  listinsert( List<Distributor> listofProducts) {
	
	return disrepo.saveAll(listofProducts);
	
}
	
	
	
	
	
	
	
	
	
	
	
}
