package com.project.ecommerce.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="cart")
public class cartModel {
	@Id
	private int id;
	
	private String url;
	
	private String productname;

	private double product_cost;
	
	private int productquantity;
	

	public cartModel() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public String getproductname() {
		return productname;
	}
	public void setproductname(String productname) {
		this.productname = productname;
	}
	public double getProduct_cost() {
		return product_cost;
	}
	public void setProduct_cost(double product_cost) {
		this.product_cost = product_cost;
	}
	public int getproductquantity() {
		return productquantity;
	}
	public void setproductquantity(int productquantity) {
		this.productquantity=productquantity;
	}
		
	
	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	public cartModel(int id, String url, String productname, double product_cost, int productquantity) {
		super();
		this.id = id;
		this.url = url;
		this.productname = productname;
		this.product_cost = product_cost;
		this.productquantity = productquantity;
	}

	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	

}
