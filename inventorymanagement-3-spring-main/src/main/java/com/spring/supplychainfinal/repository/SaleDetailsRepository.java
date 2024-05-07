package com.spring.supplychainfinal.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import com.spring.supplychainfinal.entity.Sale_Details;

public interface SaleDetailsRepository  extends JpaRepository<Sale_Details, Long>{
	
	
   
    @Query(value = " SELECT * FROM sale_details s WHERE s.sale_id= :saleid ", nativeQuery = true)
     List<Sale_Details> salelist (@Param("saleid") Long id);
	
	
	

}
