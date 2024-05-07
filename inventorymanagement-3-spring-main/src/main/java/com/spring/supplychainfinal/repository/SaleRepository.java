package com.spring.supplychainfinal.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import com.spring.supplychainfinal.entity.Sale;


public interface SaleRepository extends JpaRepository<Sale, Long>{
	

    @Query(value = " SELECT *FROM sale s  WHERE s.status=:status", nativeQuery = true)
     List<Sale> salepending (@Param("status") String pendinglist);

     
     
//     SELECT * FROM sale s where s.status=:SalePending
    
    
    
    

    @Transactional
    @Modifying
    @Query(value = "update sale set status=? WHERE sale_id =? ", nativeQuery = true)
	void updateStatus(String status, Long id);
    
	
}
