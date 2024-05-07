package com.spring.supplychainfinal.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.supplychainfinal.entity.DistributorProducts;
import com.spring.supplychainfinal.entity.Sale_Details;
import com.spring.supplychainfinal.repository.DistributorProductsRepository;

@Service
public class DistributorProductsService {
	
	@Autowired
	DistributorProductsRepository disProRepo;
	
	
public DistributorProducts save( DistributorProducts supp) {
		
		if(!supp.equals(null)) {
			return disProRepo.save(supp);
		}
		return null;
	}

public DistributorProducts getById(Long id) {
	Optional<DistributorProducts> op = disProRepo.findById(id);
	
	if(op.isPresent()) {
		return op.get();
	}
	
	return null;
}



public DistributorProducts getByDidPid(Long pid, Long did) {
	DistributorProducts op = disProRepo.getProductByPidDid(pid, did) ;
	
	if(op!=null) {
		
		return op;
	}
	
	return null;
}

public List<DistributorProducts> getAllByBrandDid( String brand, Long did){
	return disProRepo.getProductByBrandDid( brand,  did);
}



public List<DistributorProducts> getAll(){
	return disProRepo.findAll();
}

public List<DistributorProducts> getAllById( Long id){
	
	
	return disProRepo.productlist(id)  ;
}

public DistributorProducts delete (Long id) {
	
	Optional<DistributorProducts> op = disProRepo.findById(id);
	if(op.isPresent()) {
		disProRepo.delete(op.get());
		return null;
		
		
		
	}
	return null;
	
}


public DistributorProducts update( DistributorProducts product) {
	
	if(!product.equals(null)) {
		return disProRepo.save(product);
	}
	return null;
}

public DistributorProducts updateStock(Long quan , Long pid, Long did) {
	
	      disProRepo.updateStock(quan, pid, did);
	
		return null ;
}


public List<DistributorProducts>  listinsert( List<DistributorProducts> listofSupplier) {
	
	return disProRepo.saveAll(listofSupplier);
	
}

}
