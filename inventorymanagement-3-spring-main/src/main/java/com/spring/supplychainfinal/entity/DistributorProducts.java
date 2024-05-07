package com.spring.supplychainfinal.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Data;

@Entity
@Data
public class DistributorProducts {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	private long product_id;
	private long distributor_id;
	private long total_quantity;
	private long current_quantity;
	
	 private String product_name;
	 private String product_brand;
	 private String product_category;  
	 
		private long retail_rate;
		private long mrp;
		
		
	 
	

}
