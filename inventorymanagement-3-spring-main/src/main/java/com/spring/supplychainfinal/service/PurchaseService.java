package com.spring.supplychainfinal.service;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.supplychainfinal.entity.Brand;
import com.spring.supplychainfinal.entity.Purchase;
import com.spring.supplychainfinal.repository.PurchaseRepository;

@Service
public class PurchaseService {

	
	
	@Autowired
	PurchaseRepository purchaseRepo;
	
	
	
	
public Purchase save( Purchase product) {
		
		if(!product.equals(null)) {
			
			
		      Date date = new Date();
		      SimpleDateFormat formatter = new SimpleDateFormat("dd/MM/yyyy");
		      String str = formatter.format(date);
			
			
			product.setDate(str);     // add date 
			
			
			return purchaseRepo.save(product);
		}
		return null;
	}

public Purchase getById(Long id) {
	Optional<Purchase> op = purchaseRepo.findById(id);
	
	if(op.isPresent()) {
		return op.get();
	}
	
	return null;
}

public List<Purchase> getAll(){
	return purchaseRepo.decendingPurchaselist();            // for get decending order
}

public Purchase delete (Long id) {
	
	Optional<Purchase> op = purchaseRepo.findById(id);
	if(op.isPresent()) {
		purchaseRepo.delete(op.get());
		return null;
		
		
		
	}
	return null;
	
}


public Purchase update( Purchase product) {
	
	if(!product.equals(null)) {
		return purchaseRepo.save(product);
	}
	return null;
}

public List<Purchase>  listinsert( List<Purchase> listofProducts) {
	
	return purchaseRepo.saveAll(listofProducts);
	
}
	
}
