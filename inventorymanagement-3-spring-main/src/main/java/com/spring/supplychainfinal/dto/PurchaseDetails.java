package com.spring.supplychainfinal.dto;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

public class PurchaseDetails {
	
	


	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
    private long p_details_id;
	
	//product table
	
	private String product_name;
	private long purchase_rate;

	private long quantity;    // how many product bye
	private long total;        // quatity * purchase rate
	
	private long purchase_id;

	
	

}
