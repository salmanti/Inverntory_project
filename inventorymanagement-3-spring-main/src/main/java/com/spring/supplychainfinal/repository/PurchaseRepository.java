package com.spring.supplychainfinal.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import com.spring.supplychainfinal.entity.Product;
import com.spring.supplychainfinal.entity.Purchase;

public interface PurchaseRepository extends JpaRepository<Purchase, Long>{
	
	

    @Query(value = "SELECT * FROM purchase t WHERE  t.status = :status ", nativeQuery = true)
     List<Purchase> pendinglist(@Param("status") String pendinglist);
    

    @Query(value = "SELECT * FROM purchase t order by purchase_id desc ", nativeQuery = true)
     List<Purchase> decendingPurchaselist(  );
    
   
    
    
    @Transactional
    @Modifying
    @Query(value = "update purchase set status=? WHERE purchase_id =? ", nativeQuery = true)
	void updateStatus(String status, Long id);
    

  

}
