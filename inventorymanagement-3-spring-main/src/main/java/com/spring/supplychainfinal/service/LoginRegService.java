package com.spring.supplychainfinal.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.supplychainfinal.entity.LoginRegistration;

import com.spring.supplychainfinal.repository.LoginRegRepository;

@Service
public class LoginRegService {

	@Autowired
	LoginRegRepository loginRegRepo;
	
	
	
public LoginRegistration save( LoginRegistration logreg) {
		
		if(!logreg.equals(null)) {
			return loginRegRepo.save(logreg);
		}
		return null;
	}

public LoginRegistration getById(Long id) {
	Optional<LoginRegistration> op = loginRegRepo.findById(id);
	
	if(op.isPresent()) {
		return op.get();
	}
	
	return null;
}

public List<LoginRegistration> getAll(){
	return loginRegRepo.findAll();
}

public LoginRegistration delete (Long id) {
	
	Optional<LoginRegistration> op = loginRegRepo.findById(id);
	if(op.isPresent()) {
		loginRegRepo.delete(op.get());
		return null;
		
		
		
	}
	return null;
	
}


public LoginRegistration update( LoginRegistration logreg) {
	
	if(!logreg.equals(null)) {
		return loginRegRepo.save(logreg);
	}
	return null;
}

public List<LoginRegistration>  listinsert( List<LoginRegistration> listoflogreg) {
	
	return loginRegRepo.saveAll(listoflogreg);
	
}
	
	
}
