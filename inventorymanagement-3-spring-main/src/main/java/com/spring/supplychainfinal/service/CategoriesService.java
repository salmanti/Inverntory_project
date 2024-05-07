package com.spring.supplychainfinal.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.supplychainfinal.entity.Brand;
import com.spring.supplychainfinal.entity.Categories;
import com.spring.supplychainfinal.repository.CategoriesRepository;

@Service
public class CategoriesService {
	
	@Autowired
	CategoriesRepository catRepo;
	
	

public Categories save( Categories cat) {
		
		if(!cat.equals(null)) {
			return catRepo.save(cat);
		}
		return null;
	}

public Categories getById(Long id) {
	Optional<Categories> op = catRepo.findById(id);
	
	if(op.isPresent()) {
		return op.get();
	}
	
	return null;
}

public List<Categories> getAll(){
	return catRepo.findAll();
}

public Categories delete (Long id) {
	
	Optional<Categories> op = catRepo.findById(id);
	if(op.isPresent()) {
		catRepo.delete(op.get());
		return null;
		
		
		
	}
	return null;
	
}


public Categories update( Categories cat) {
	
	if(!cat.equals(null)) {
		return catRepo.save(cat);
	}
	return null;
}

public List<Categories>  listinsert( List<Categories> listofProducts) {
	
	return catRepo.saveAll(listofProducts);
	
}
	
	
	

}
