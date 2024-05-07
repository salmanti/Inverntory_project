package com.spring.supplychainfinal.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Data;


@Entity
@Data
public class Sale_Details {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	 private long sale_details_id;
	 private long sale_id;
	 
	 private long product_id;   //fk
	 private String product_name;
	 private String product_brand;
	 
	    private long unit_price;
	    
	    private long quantity;
	    private long total;
	    
	    private long distributor_id;
	    
	    
	    private String product_category;  
		 
		private long retail_rate;
		private long mrp;
		
	    
	    
	    
	    
		public long getSale_details_id() {
			return sale_details_id;
		}
		public void setSale_details_id(long sale_details_id) {
			this.sale_details_id = sale_details_id;
		}
		public long getSale_id() {
			return sale_id;
		}
		public void setSale_id(long sale_id) {
			this.sale_id = sale_id;
		}
		public long getProduct_id() {
			return product_id;
		}
		public void setProduct_id(long product_id) {
			this.product_id = product_id;
		}
		public long getUnit_price() {
			return unit_price;
		}
		public void setUnit_price(long unit_price) {
			this.unit_price = unit_price;
		}
		public long getQuantity() {
			return quantity;
		}
		public void setQuantity(long quantity) {
			this.quantity = quantity;
		}
		public long getTotal() {
			return total;
		}
		public void setTotal(long total) {
			this.total = total;
		}
	  
	    
	  
	    
	    

}
