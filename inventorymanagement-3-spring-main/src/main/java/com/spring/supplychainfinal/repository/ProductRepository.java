package com.spring.supplychainfinal.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import com.spring.supplychainfinal.entity.Product;

public interface ProductRepository extends JpaRepository<Product, Long>{
	
	
	
	

    @Query(value = "SELECT * FROM product t WHERE  t.product_brand = :brandname ", nativeQuery = true)
     List<Product> brandlist(@Param("brandname") String brandlist);

    
    @Transactional
    @Modifying
    @Query(value = "update product set product_quantity=?, total_quantity=?  WHERE product_id =? ", nativeQuery = true)
	void updateStock(long quantity,long newtotal, Long id);
    
    
    
    @Transactional
    @Query(value = "SELECT next_val FROM hibernate_sequence;", nativeQuery = true)
    long nextValue( );

    
   
    @Query(value = "SELECT * FROM hibernate_sequence ;", nativeQuery = true)
     Long getNextSeriesId();
	

}
