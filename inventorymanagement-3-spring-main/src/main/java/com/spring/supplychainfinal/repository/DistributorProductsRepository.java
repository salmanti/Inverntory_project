package com.spring.supplychainfinal.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import com.spring.supplychainfinal.entity.DistributorProducts;


public interface DistributorProductsRepository extends JpaRepository<DistributorProducts, Long>{

	
	
	

    @Query(value = " SELECT * FROM distributor_products s WHERE s.distributor_id= :saleid ", nativeQuery = true)
     List<DistributorProducts> productlist (@Param("saleid") Long id);
    
    
    

    @Transactional
    @Modifying
    @Query(value = "update distributor_products set current_quantity=:quan  WHERE product_id =:pid  and distributor_id=:did ", nativeQuery = true)
	void updateStock(@Param("quan") Long quan, @Param("pid") Long pid , @Param("did") Long did);
    
    
    
    


    @Query(value = "SELECT * FROM distributor_products where product_id= :pid and distributor_id=:did ", nativeQuery = true)
    DistributorProducts getProductByPidDid(@Param("pid") Long pid , @Param("did") Long did);
    
    



    @Query(value = "SELECT * FROM distributor_products where product_brand= :brand and distributor_id=:did ", nativeQuery = true)
    List<DistributorProducts> getProductByBrandDid(@Param("brand") String brand , @Param("did") Long did);
    
    

    
    
    
}
