package com.spring.supplychainfinal.entity;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Data;

@Entity
@Data
public class Product {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long product_id;
	
	private String product_code;
	private String product_name;
	private String product_unit;
	private String product_brand;
	private long product_quantity;    //current 
	private long purchase_rate;
	private long wirehouse_rate;
	private long distributor_rate;
	private long retail_rate;
	private long mrp;
	
	private String product_category;  
	private long total_quantity;              // old and new purchase
	
	private Boolean status;					// for soft delete
	
	
//	@ManyToMany
//	private Set<Brand> brands = new HashSet<>();
//	
	
	
	
	
	
	
	public long getPurchase_rate() {
		return purchase_rate;
	}
	public long getTotal_quantity() {
		return total_quantity;
	}
	public void setTotal_quantity(long total_quantity) {
		this.total_quantity = total_quantity;
	}
	public String getProduct_category() {
		return product_category;
	}
	public void setProduct_category(String product_category) {
		this.product_category = product_category;
	}
	public void setPurchase_rate(long purchase_rate) {
		this.purchase_rate = purchase_rate;
	}
	public long getProduct_id() {
		return product_id;
	}
	public void setProduct_id(long product_id) {
		this.product_id = product_id;
	}
	public String getProduct_code() {
		return product_code;
	}
	public void setProduct_code(String product_code) {
		this.product_code = product_code;
	}
	public String getProduct_name() {
		return product_name;
	}
	public void setProduct_name(String product_name) {
		this.product_name = product_name;
	}
	public String getProduct_unit() {
		return product_unit;
	}
	public void setProduct_unit(String product_unit) {
		this.product_unit = product_unit;
	}
	public String getProduct_brand() {
		return product_brand;
	}
	public void setProduct_brand(String product_brand) {
		this.product_brand = product_brand;
	}
	public long getProduct_quantity() {
		return product_quantity;
	}
	public void setProduct_quantity(long product_quantity) {
		this.product_quantity = product_quantity;
	}
	public long getWirehouse_rate() {
		return wirehouse_rate;
	}
	public void setWirehouse_rate(long wirehouse_rate) {
		this.wirehouse_rate = wirehouse_rate;
	}
	public long getDistributor_rate() {
		return distributor_rate;
	}
	public void setDistributor_rate(long distributor_rate) {
		this.distributor_rate = distributor_rate;
	}
	public long getRetail_rate() {
		return retail_rate;
	}
	public void setRetail_rate(long retail_rate) {
		this.retail_rate = retail_rate;
	}
	public long getMrp() {
		return mrp;
	}
	public void setMrp(long mrp) {
		this.mrp = mrp;
	}

}
