package com.spring.supplychainfinal.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Data;


@Entity
@Data
public class Sale {
	
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	    private long sale_id;
	    private String date;
	    private String status;
	    
	    private long saller_id;   // fk                  by whome sale the product
	    private long distributor_id;  //fk               if sale to distributor
	    private long warehouse_id;    //fk                    if
	    private long customer_id;     //   fk             if
	    
	    private long sale_details_id;
	    
	   
	    private long grand_total;

		public long getSale_id() {
			return sale_id;
		}

		public void setSale_id(long sale_id) {
			this.sale_id = sale_id;
		}

		public String getDate() {
			return date;
		}

		public void setDate(String date) {
			this.date = date;
		}

		public long getSaller_id() {
			return saller_id;
		}

		public void setSaller_id(long saller_id) {
			this.saller_id = saller_id;
		}

		public long getDistributor_id() {
			return distributor_id;
		}

		public void setDistributor_id(long distributor_id) {
			this.distributor_id = distributor_id;
		}

		public long getWarehouse_id() {
			return warehouse_id;
		}

		public void setWarehouse_id(long warehouse_id) {
			this.warehouse_id = warehouse_id;
		}

		public long getCustomer_id() {
			return customer_id;
		}

		public void setCustomer_id(long customer_id) {
			this.customer_id = customer_id;
		}

		public long getSale_details_id() {
			return sale_details_id;
		}

		public void setSale_details_id(long sale_details_id) {
			this.sale_details_id = sale_details_id;
		}

		
	  

	    
	    
	    
	    
	    
}
