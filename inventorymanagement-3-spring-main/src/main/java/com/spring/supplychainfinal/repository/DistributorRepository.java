package com.spring.supplychainfinal.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.spring.supplychainfinal.entity.Distributor;


public interface DistributorRepository  extends JpaRepository<Distributor, Long>{
	
	
	
	
	

    @Query(value = "SELECT * FROM distributor t WHERE t.username =:uname  and t.password2 = :password limit 1", nativeQuery = true)
    Distributor login(@Param("uname") String username, @Param("password") String password);
    

}
