package com.spring.supplychainfinal.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.spring.supplychainfinal.entity.LoginRegistration;

public interface LoginRegRepository extends JpaRepository<LoginRegistration, Long> {

	

    @Query(value = "SELECT * FROM login_registration t WHERE (t.name =:uname or t.phone =:uname) and t.password2 = :password_ limit 1", nativeQuery = true)
    LoginRegistration login(@Param("uname") String username, @Param("password_") String password);
    
    
	
	
}
